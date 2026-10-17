/**
 * KTCT QUIZ — APPLICATION CONTROLLER
 * Màn hình ban đầu: Màn hình chọn câu & chế độ (Setup View)
 * Màn hình làm bài: Giao diện làm trắc nghiệm tối giản, không giải thích (Quiz View)
 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const ICON = {
  star: '<svg class="stroke" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check: '<svg class="stroke" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  cross: '<svg class="stroke" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>'
};

const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

const App = {
  view: 'setup',            // 'setup' | 'quiz'
  setupMode: 'practice',    // 'practice' (Luyện tập) | 'exam' (Thi thử)
  filterMode: 'all',        // 'all' | 'none' | 'wrong' | 'marked' | 'range' | 'custom'
  mode: 'practice',         // mode trong lúc làm bài: 'practice' | 'exam' | 'review'
  shuffleQuestions: false,  // Xáo trộn câu hỏi
  shuffleAnswers: false,    // Xáo trộn đáp án

  all: [],                  // Toàn bộ câu hỏi
  selected: new Set(),      // Các câu hỏi được chọn ở Setup

  session: [],              // Danh sách câu hỏi trong phiên làm bài hiện tại
  sessionStartTime: 0,      // Thời điểm bắt đầu phiên làm bài
  index: 0,                 // Câu hiện tại (0-indexed)
  answers: {},              // { [id]: 'A'..'D' }

  exam: {
    running: false,
    endAt: 0,
    total: 20 * 60,
    remaining: 20 * 60,
    timer: null,
    minutes: 20,
    shuffle: true
  },

  _dlgResolve: null,

  // ======================================================================
  // KHỞI TẠO ỨNG DỤNG
  // ======================================================================
  init() {
    this.bindEvents();
    this.reload();

    // Tải cấu hình đã lưu của người dùng (nếu lần đầu vào web: mặc định khoanh vùng 1 -> 57 câu)
    this.loadSetupPrefs();

    // Mở Màn hình chọn câu ôn tập đầu tiên khi mới vào
    this.showSetup();
  },

  reload() {
    this.all = QuestionManager.getAllQuestions();
  },

  loadSetupPrefs() {
    this._loadingPrefs = true;
    try {
      const raw = localStorage.getItem('ktct_setup_state_v1');
      if (raw) {
        const data = JSON.parse(raw);
        if (data) {
          if (data.setupMode === 'exam' || data.setupMode === 'practice') {
            this.setupMode = data.setupMode;
          }
          if (data.filterMode) this.filterMode = data.filterMode;
          if (typeof data.shuffleQuestions === 'boolean') this.shuffleQuestions = data.shuffleQuestions;
          if (typeof data.shuffleAnswers === 'boolean') this.shuffleAnswers = data.shuffleAnswers;
          if (data.examMinutes) {
            this.exam.minutes = parseInt(data.examMinutes, 10) || 20;
            const minInp = $('#setup-exam-minutes');
            if (minInp) minInp.value = this.exam.minutes;
          }

          const fromInp = $('#setup-from');
          const toInp = $('#setup-to');
          if (fromInp && data.rangeFrom) fromInp.value = data.rangeFrom;
          if (toInp && data.rangeTo) {
            toInp.value = data.rangeTo;
            toInp.dataset.touched = '1';
          }

          if (Array.isArray(data.selectedIds) && data.selectedIds.length > 0) {
            const allIdSet = new Set(this.all.map(q => q.id));
            const valid = data.selectedIds.filter(id => allIdSet.has(id));
            if (valid.length > 0) {
              this.selected = new Set(valid);
              this._loadingPrefs = false;
              return;
            }
          }
        }
      }
    } catch (e) {
      console.warn('Lỗi loadSetupPrefs:', e);
    }

    // MẶC ĐỊNH LẦN ĐẦU VÀO WEB (theo yêu cầu người dùng):
    // Khoanh vùng 1 -> 57 câu, Light mode (đã cấu hình mặc định trong HTML)
    const defFrom = 1;
    const defTo = Math.min(57, this.all.length);
    const fromInp = $('#setup-from');
    const toInp = $('#setup-to');
    if (fromInp) fromInp.value = defFrom;
    if (toInp) {
      toInp.value = defTo;
      toInp.dataset.touched = '1';
    }
    this.filterMode = 'range';
    this.setupMode = 'practice';
    this.selected = new Set(this.all.slice(defFrom - 1, defTo).map(q => q.id));
    this._loadingPrefs = false;
    this.saveSetupPrefs();
  },

  saveSetupPrefs() {
    if (this._loadingPrefs) return;
    try {
      const fromInp = $('#setup-from');
      const toInp = $('#setup-to');
      const minInp = $('#setup-exam-minutes');
      const payload = {
        setupMode: this.setupMode,
        filterMode: this.filterMode,
        shuffleQuestions: !!this.shuffleQuestions,
        shuffleAnswers: !!this.shuffleAnswers,
        rangeFrom: fromInp ? parseInt(fromInp.value, 10) || 1 : 1,
        rangeTo: toInp ? parseInt(toInp.value, 10) || this.all.length : Math.min(57, this.all.length),
        examMinutes: minInp ? parseInt(minInp.value, 10) || 20 : 20,
        selectedIds: Array.from(this.selected)
      };
      localStorage.setItem('ktct_setup_state_v1', JSON.stringify(payload));
    } catch (e) {
      console.warn('Lỗi saveSetupPrefs:', e);
    }
  },

  bindEvents() {
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-action]');
      if (el) {
        const fn = this[el.dataset.action];
        if (typeof fn === 'function') fn.call(this, el.dataset.arg, el);
        return;
      }
      // Bấm ngoài modal để đóng (trừ hộp thoại dialog)
      if (e.target.classList && e.target.classList.contains('modal') && e.target.id !== 'modal-dialog') {
        this.closeModal(e.target.id);
      }
    });

    $('#import-text').addEventListener('input', () => this.previewImport());
    $('#setup-exam-minutes').addEventListener('input', () => {
      this.syncSetupMinutePills();
      this.saveSetupPrefs();
    });

    // Các checkbox tùy chọn theo sketch
    const chkQ = $('#setup-check-shuffle-q');
    if (chkQ) chkQ.addEventListener('change', (e) => {
      this.shuffleQuestions = e.target.checked;
      this.saveSetupPrefs();
    });
    const chkA = $('#setup-check-shuffle-a');
    if (chkA) chkA.addEventListener('change', (e) => {
      this.shuffleAnswers = e.target.checked;
      this.saveSetupPrefs();
    });
    const chkRange = $('#setup-check-range');
    if (chkRange) chkRange.addEventListener('change', (e) => {
      if (e.target.checked) this.setupSelRange();
      else this.setupSelAll();
    });

    const inpFrom = $('#setup-from');
    if (inpFrom) inpFrom.addEventListener('input', () => {
      const val = parseInt(inpFrom.value, 10);
      if (!isNaN(val) && val >= 1) this.setupSelRange();
    });
    const inpTo = $('#setup-to');
    if (inpTo) inpTo.addEventListener('input', () => {
      const val = parseInt(inpTo.value, 10);
      if (!isNaN(val) && val >= 1) this.setupSelRange();
    });

    document.addEventListener('keydown', (e) => this.onKey(e));
  },

  onKey(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;

    if (e.key === 'Escape') {
      const open = $$('.modal').filter(m => !m.hidden && m.id !== 'modal-dialog').pop();
      if (open) this.closeModal(open.id);
      else if (document.body.classList.contains('palette-open')) this.togglePalette();
      return;
    }
    if ($$('.modal').some(m => !m.hidden)) return;

    // Phím tắt làm bài chỉ áp dụng khi đang ở Màn hình làm bài (view === 'quiz')
    if (this.view !== 'quiz') return;

    const k = e.key.toUpperCase();
    if (LETTERS.includes(k)) this.answer(k);
    else if (['1', '2', '3', '4'].includes(k)) this.answer(LETTERS[+k - 1]);
    else if (e.key === 'ArrowRight') this.next();
    else if (e.key === 'ArrowLeft') this.prev();
    else if (k === 'F') this.toggleBookmark();
    else return;
    e.preventDefault();
  },

  // ======================================================================
  // GIAO DIỆN & TIỆN ÍCH CHUNG
  // ======================================================================
  toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('ktct_theme', next); } catch (e) {}
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', next === 'dark' ? '#121212' : '#f5f3ee');
  },

  togglePalette() {
    document.body.classList.toggle('palette-open');
  },

  openModal(id) { $('#' + id).hidden = false; },
  closeModal(id) { $('#' + id).hidden = true; },

  dialog({ title = 'Thông báo', message = '', ok = 'Đồng ý', cancel = 'Hủy', danger = false, alertOnly = false }) {
    return new Promise((resolve) => {
      $('#dlg-title').textContent = title;
      $('#dlg-msg').textContent = message;
      const okBtn = $('#dlg-ok');
      okBtn.textContent = ok;
      okBtn.className = 'btn ' + (danger ? 'btn-danger' : 'btn-primary');
      const cancelBtn = $('#dlg-cancel');
      cancelBtn.textContent = cancel;
      cancelBtn.hidden = alertOnly;
      this._dlgResolve = resolve;
      this.openModal('modal-dialog');
    });
  },

  dialogResult(val) {
    this.closeModal('modal-dialog');
    const r = this._dlgResolve;
    this._dlgResolve = null;
    if (r) r(val === '1');
  },

  notice(message, title = 'Thông báo') {
    return this.dialog({ title, message, ok: 'Đóng', alertOnly: true });
  },

  // ======================================================================
  // MÀN HÌNH 1: THIẾT LẬP / CHỌN CÂU BAN ĐẦU (SETUP VIEW)
  // ======================================================================
  showSetup() {
    this.view = 'setup';
    document.body.dataset.view = 'setup';
    document.body.classList.remove('palette-open');

    // Chuyển view kèm hiệu ứng mượt mà
    const setupView = $('#view-setup');
    const quizView = $('#view-quiz');
    setupView.hidden = false;
    quizView.hidden = true;

    setupView.classList.remove('view-enter');
    void setupView.offsetWidth;
    setupView.classList.add('view-enter');
    setupView.addEventListener('animationend', () => setupView.classList.remove('view-enter'), { once: true });

    // Header ở trạng thái Setup
    this.updateHeaderMode();

    this.renderSetup();
  },

  updateHeaderMode() {
    const isQuiz = (this.view === 'quiz');
    $('#btn-back-setup').hidden = !isQuiz;
    $('#quiz-status-mid').hidden = true; // Luôn ẩn chữ Luyện tập / Thi thử lẻ loi ở giữa theo yêu cầu
    $('#quiz-progress-bar').hidden = !isQuiz;
    if ($('#btn-pos')) $('#btn-pos').hidden = !isQuiz;

    const submitBtn = $('#btn-topbar-submit');

    if (!isQuiz) {
      $('#brand-title').textContent = 'KTCT Mác - Lênin';
      $('#exam-timer').hidden = true;
      if (submitBtn) submitBtn.hidden = true;
      if ($('#btn-reopen-result')) $('#btn-reopen-result').hidden = true;
      return;
    }

    // Khi đang trong màn hình quiz: brand-title bên trái hiển thị chế độ hiện tại
    const modeTitle = (this.mode === 'exam') ? 'Thi thử' : (this.mode === 'review' ? 'Xem lại bài' : 'Luyện tập');
    $('#brand-title').textContent = modeTitle;

    if (this.mode === 'exam') {
      $('#exam-timer').hidden = false;
      if (submitBtn) {
        submitBtn.hidden = false;
        submitBtn.className = 'btn btn-danger btn-sm btn-submit-pill';
      }
      if ($('#btn-reopen-result')) $('#btn-reopen-result').hidden = true;
    } else if (this.mode === 'review') {
      $('#exam-timer').hidden = true;
      if (submitBtn) submitBtn.hidden = true;
      if ($('#btn-reopen-result')) $('#btn-reopen-result').hidden = false;
    } else {
      // mode === 'practice'
      $('#exam-timer').hidden = true;
      if (submitBtn) {
        submitBtn.hidden = false;
        submitBtn.className = 'btn btn-primary btn-sm btn-submit-pill';
      }
      if ($('#btn-reopen-result')) $('#btn-reopen-result').hidden = true;
    }
  },

  renderSetup() {
    const totalQ = this.all.length;

    // 1. Cập nhật số lượng câu sai và bookmark
    const mistakesCount = QuestionManager.getWrongQuestionIds().length;
    const bookmarksCount = QuestionManager.getBookmarkedIds().length;
    $('#setup-count-mistakes').textContent = mistakesCount;
    $('#setup-count-bookmarks').textContent = bookmarksCount;

    // 2. Active mode card (Luyện tập hoặc Thi thử)
    $$('.mode-card').forEach(c => c.classList.remove('active'));
    const activeBtn = $('#mode-btn-' + this.setupMode);
    if (activeBtn) activeBtn.classList.add('active');

    // 3. Hiển thị tùy chọn thi thử nếu chọn thi
    $('#setup-exam-options').hidden = (this.setupMode !== 'exam');

    // 4. Tiêu đề mục chọn câu - không đánh số
    $('#scope-section-title').textContent = 'Chọn câu';

    // Input bounds - Mặc định đến câu 57 (nếu chưa từng tùy chỉnh)
    $('#setup-from').max = $('#setup-to').max = totalQ;
    if (!$('#setup-to').dataset.touched) $('#setup-to').value = Math.min(57, totalQ);

    // Đồng bộ trạng thái checkbox theo sketch
    if ($('#setup-check-shuffle-q')) {
      $('#setup-check-shuffle-q').checked = !!this.shuffleQuestions;
    }
    if ($('#setup-check-shuffle-a')) {
      $('#setup-check-shuffle-a').checked = !!this.shuffleAnswers;
    }
    if ($('#setup-check-range')) {
      $('#setup-check-range').checked = (this.filterMode === 'range');
    }

    // 5. Vẽ lưới 1..N các câu hỏi (ở trên)
    this.renderSetupGrid();

    // 6. Cập nhật trạng thái tick của các nút bộ lọc
    const selCount = this.selected.size;
    $('#setup-sel-count').textContent = `Đang chọn: ${selCount} / ${totalQ} câu`;

    // Cập nhật class 'active' cho các nút có thể tick
    $('#filter-btn-all').classList.toggle('active', this.filterMode === 'all' && selCount === totalQ);
    $('#filter-btn-wrong').classList.toggle('active', this.filterMode === 'wrong');
    $('#filter-btn-marked').classList.toggle('active', this.filterMode === 'marked');

    // 7. Cập nhật nút bắt đầu
    const startBtn = $('#btn-start');
    if (this.setupMode === 'exam') {
      const mins = parseInt($('#setup-exam-minutes').value, 10) || 20;
      startBtn.textContent = `Bắt đầu thi thử (${selCount} câu · ${mins}p)`;
    } else {
      startBtn.textContent = `Bắt đầu luyện tập (${selCount} câu)`;
    }

    startBtn.disabled = (selCount === 0);

    // Tự động lưu trạng thái thiết lập để không bị mất khi reload
    this.saveSetupPrefs();
  },

  renderSetupGrid() {
    const grid = $('#setup-grid');
    grid.innerHTML = '';

    this.all.forEach((q, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (this.selected.has(q.id) ? ' on' : '');
      b.textContent = i + 1;
      b.dataset.action = 'toggleSetupItem';
      b.dataset.arg = i;
      grid.appendChild(b);
    });
  },

  selectSetupMode(mode) {
    this.setupMode = (mode === 'exam') ? 'exam' : 'practice';
    this.renderSetup();
  },

  toggleSetupItem(i) {
    const id = this.all[+i].id;
    this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id);
    if (this.selected.size === this.all.length) {
      this.filterMode = 'all';
    } else if (this.selected.size === 0) {
      this.filterMode = 'none';
    } else {
      this.filterMode = 'custom';
    }
    this.renderSetup();
  },

  setupSelAll() {
    this.selected = new Set(this.all.map(q => q.id));
    this.filterMode = 'all';
    this.renderSetup();
  },

  setupSelNone() {
    this.selected.clear();
    this.filterMode = 'none';
    this.renderSetup();
  },

  toggleSelWrong() {
    const ids = QuestionManager.getWrongQuestionIds().filter(id => this.all.some(q => q.id === id));
    if (!ids.length) {
      return this.notice('Sổ câu sai hiện đang trống. Bạn chưa làm sai câu nào!');
    }
    this.selected = new Set(ids);
    this.filterMode = 'wrong';
    this.renderSetup();
  },

  toggleSelMarked() {
    const ids = QuestionManager.getBookmarkedIds().filter(id => this.all.some(q => q.id === id));
    if (!ids.length) {
      return this.notice('Chưa có câu nào được gắn sao ⭐!');
    }
    this.selected = new Set(ids);
    this.filterMode = 'marked';
    this.renderSetup();
  },

  setupSelRange() {
    const n = this.all.length;
    let a = parseInt($('#setup-from').value, 10) || 1;
    let b = parseInt($('#setup-to').value, 10) || n;
    $('#setup-to').dataset.touched = '1';
    a = Math.max(1, Math.min(n, a));
    b = Math.max(1, Math.min(n, b));
    if (a > b) [a, b] = [b, a];
    this.selected = new Set(this.all.slice(a - 1, b).map(q => q.id));
    this.filterMode = 'range';
    this.renderSetup();
  },

  toggleShuffleQuestions() {
    this.shuffleQuestions = !this.shuffleQuestions;
    if ($('#setup-check-shuffle-q')) {
      $('#setup-check-shuffle-q').checked = this.shuffleQuestions;
    }
    this.saveSetupPrefs();
  },

  toggleShuffleAnswers() {
    this.shuffleAnswers = !this.shuffleAnswers;
    if ($('#setup-check-shuffle-a')) {
      $('#setup-check-shuffle-a').checked = this.shuffleAnswers;
    }
    this.saveSetupPrefs();
  },

  setExamMin(m) {
    $('#setup-exam-minutes').value = m;
    this.syncSetupMinutePills();
    this.renderSetup();
  },

  syncSetupMinutePills() {
    const v = parseInt($('#setup-exam-minutes').value, 10);
    $$('#setup-exam-options .pill[data-action="setExamMin"]').forEach(p => {
      p.classList.toggle('active', parseInt(p.dataset.arg, 10) === v);
    });
  },

  /**
   * Bấm nút "Bắt Đầu Làm Bài" từ màn hình chọn câu
   */
  startFromSetup() {
    if (!this.selected.size) {
      return this.notice('Vui lòng chọn ít nhất 1 câu hỏi để làm bài.');
    }

    // Chuẩn bị danh sách câu hỏi (clone từng câu để không làm hỏng dữ liệu gốc khi xáo trộn)
    let list = this.all
      .filter(q => this.selected.has(q.id))
      .map(q => ({
        ...q,
        options: { ...q.options }
      }));

    // 1. Xáo trộn thứ tự câu hỏi nếu tick "Xáo trộn câu hỏi"
    if (this.shuffleQuestions) {
      list = shuffle(list);
    }

    // 2. Xáo trộn thứ tự các đáp án ABCD nếu tick "Xáo trộn đáp án"
    if (this.shuffleAnswers) {
      list.forEach(q => {
        const correctText = q.options[q.correctAnswer];
        const validLetters = LETTERS.filter(L => q.options[L] !== undefined);
        const shuffledTexts = shuffle(validLetters.map(L => q.options[L]));
        validLetters.forEach((L, idx) => {
          q.options[L] = shuffledTexts[idx];
          if (shuffledTexts[idx] === correctText) {
            q.correctAnswer = L;
          }
        });
      });
    }

    if (this.setupMode === 'exam') {
      const mins = Math.max(1, Math.min(300, parseInt($('#setup-exam-minutes').value, 10) || 20));
      this.exam.total = mins * 60;
      this.exam.remaining = this.exam.total;
      this.exam.endAt = Date.now() + this.exam.total * 1000;
      this.exam.running = true;
      this.startExamTimer();
    } else {
      this.stopExamTimer();
      this.exam.running = false;
    }

    this.mode = this.setupMode;
    this.session = list;
    this.sessionStartTime = Date.now();
    this.answers = {};
    this.index = 0;

    // Chuyển sang Màn hình làm bài (Quiz View) kèm hiệu ứng fade
    this.view = 'quiz';
    document.body.dataset.view = 'quiz';
    const setupView = $('#view-setup');
    const quizView = $('#view-quiz');
    setupView.hidden = true;
    quizView.hidden = false;

    quizView.classList.remove('view-enter');
    void quizView.offsetWidth;
    quizView.classList.add('view-enter');
    quizView.addEventListener('animationend', () => quizView.classList.remove('view-enter'), { once: true });

    this._lastIndex = -1;

    // Header ở trạng thái Quiz
    this.updateHeaderMode();

    this.renderQuiz();
  },

  // ======================================================================
  // MÀN HÌNH 2: LÀM BÀI TRẮC NGHIỆM (QUIZ VIEW)
  // Giao diện tinh gọn, KHÔNG CÓ PHẦN GIẢI THÍCH
  // ======================================================================
  async backToSetup() {
    if (this.exam.running) {
      const ok = await this.dialog({
        title: 'Dừng bài thi?',
        message: 'Bạn đang trong bài thi tính giờ. Rời khỏi sẽ hủy bài thi hiện tại.',
        ok: 'Dừng thi & Đổi đề',
        danger: true
      });
      if (!ok) return;
      this.stopExamTimer();
      this.exam.running = false;
    }
    this.showSetup();
  },

  cur() {
    return this.session[this.index];
  },

  isRevealed(q) {
    if (this.mode === 'exam') return false;
    if (this.mode === 'review') return true;
    return !!this.answers[q.id];
  },

  renderQuiz() {
    const q = this.cur();
    const n = this.session.length;
    const revealed = this.isRevealed(q);
    const chosen = this.answers[q.id];

    // Hiệu ứng chuyển câu mượt mà (chỉ kích hoạt khi chuyển sang câu khác)
    const card = $('article.card');
    if (card && this._lastIndex !== this.index) {
      card.classList.remove('card-enter');
      void card.offsetWidth;
      card.classList.add('card-enter');
      this._lastIndex = this.index;
    }

    // Card Meta
    $('#q-index').innerHTML = `Câu ${this.index + 1}<span class="of"> / ${n}</span>`;
    $('#q-chapter').innerHTML = q.chapter ? `<span class="ch-name">${q.chapter}</span>` : '';

    const tag = $('#q-tag');
    tag.hidden = (this.mode !== 'review');
    tag.textContent = 'Xem lại';

    // Nút làm lại câu này (chỉ hiện trong Ôn Luyện khi câu này đã được chọn đáp án)
    const retryBtn = $('#btn-retry');
    retryBtn.hidden = !(this.mode === 'practice' || this.mode === 'mistakes' || this.mode === 'bookmarks') || !chosen;

    // Nút bookmark
    const marked = QuestionManager.getBookmarkedIds().includes(q.id);
    const star = $('#btn-bookmark');
    star.classList.toggle('on', marked);
    star.innerHTML = ICON.star;

    // Nội dung câu hỏi
    $('#q-text').textContent = q.question;

    // 4 Đáp án A, B, C, D (KHÔNG CÓ KHỐI GIẢI THÍCH)
    const box = $('#options');
    box.innerHTML = '';

    LETTERS.forEach((L) => {
      const text = q.options[L];
      if (!text) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.action = 'answer';
      btn.dataset.arg = L;

      const key = document.createElement('span');
      key.className = 'opt-key';
      key.textContent = L;

      const label = document.createElement('span');
      label.className = 'opt-text';
      label.textContent = text;
      btn.append(key, label);

      let cls = 'option';
      if (revealed) {
        cls += ' locked';
        if (L === q.correctAnswer) {
          cls += ' correct';
          key.innerHTML = ICON.check;
        } else if (L === chosen) {
          cls += ' wrong';
          key.innerHTML = ICON.cross;
        } else {
          cls += ' dim';
        }
      } else if (this.mode === 'exam' && L === chosen) {
        cls += ' selected';
      }

      btn.className = cls;
      box.appendChild(btn);
    });

    // Navigation buttons
    $('#btn-prev').disabled = (this.index === 0);
    const posStr = `${this.index + 1} / ${n}`;
    if ($('#nav-pos-text')) $('#nav-pos-text').textContent = posStr;
    if ($('#nav-pos-desktop')) $('#nav-pos-desktop').textContent = posStr;

    const next = $('#btn-next');
    const last = (this.index === n - 1);
    if (last && this.mode !== 'review') {
      next.textContent = 'Nộp bài';
      next.dataset.action = 'confirmSubmit';
      next.className = 'btn ' + (this.mode === 'exam' ? 'btn-danger' : 'btn-primary');
      next.disabled = false;
    } else {
      next.textContent = 'Sau →';
      next.dataset.action = 'next';
      next.className = 'btn btn-primary';
      next.disabled = last;
    }

    // Palette sidebar & progress bar
    this.renderQuizPalette();
    this.renderQuizProgress();
  },

  tally() {
    let correct = 0, wrong = 0, answered = 0;
    this.session.forEach(q => {
      const a = this.answers[q.id];
      if (a) {
        answered++;
        a === q.correctAnswer ? correct++ : wrong++;
      } else if (this.mode === 'review') {
        wrong++;
      }
    });
    return { correct, wrong, answered };
  },

  renderQuizPalette() {
    const grid = $('#palette-grid');
    grid.innerHTML = '';
    const marks = new Set(QuestionManager.getBookmarkedIds());

    this.session.forEach((q, i) => {
      const a = this.answers[q.id];
      let cls = 'chip';
      if (this.mode === 'exam') {
        if (a) cls += ' answered';
      } else if (this.mode === 'review' || a) {
        cls += (a === q.correctAnswer) ? ' correct' : ' wrong';
      }
      if (i === this.index) cls += ' current';
      if (marks.has(q.id)) cls += ' marked';

      const b = document.createElement('button');
      b.type = 'button';
      b.className = cls;
      b.textContent = i + 1;
      b.dataset.action = 'go';
      b.dataset.arg = i;
      grid.appendChild(b);
    });

    const t = this.tally();
    const stats = $('#stats');
    if (this.mode === 'exam') {
      stats.textContent = `Đã làm ${t.answered} / ${this.session.length}`;
    } else {
      const left = this.session.length - t.correct - t.wrong;
      stats.innerHTML =
        `<span class="ok">${t.correct}</span> đúng · <span class="bad">${t.wrong}</span> sai` +
        (left > 0 ? ` · ${left} còn lại` : '');
    }
  },

  renderQuizProgress() {
    const n = this.session.length;
    let pct = 0;
    if (n) {
      pct = this.mode === 'review' ? 100 : (this.tally().answered / n) * 100;
    }
    $('#progress-fill').style.width = pct + '%';
  },

  answer(letter) {
    const q = this.cur();
    if (!q || !q.options[letter] || this.mode === 'review') return;

    if (this.mode === 'exam') {
      if (!this.exam.running) return;
      if (this.answers[q.id] === letter) delete this.answers[q.id];
      else this.answers[q.id] = letter;
      this.renderQuiz();
      return;
    }

    // Chế độ Ôn Luyện: Hiện kết quả ngay
    if (this.answers[q.id]) return; // Đã trả lời thì giữ nguyên, muốn làm lại bấm "Làm lại"
    this.answers[q.id] = letter;

    if (letter === q.correctAnswer) {
      if (this.mode === 'mistakes') QuestionManager.removeWrongQuestion(q.id);
    } else {
      QuestionManager.addWrongQuestion(q.id);
    }
    this.renderQuiz();
  },

  retry() {
    const q = this.cur();
    if (!q) return;
    delete this.answers[q.id];
    this.renderQuiz();
  },

  next() {
    if (this.index < this.session.length - 1) {
      this.index++;
      this.renderQuiz();
    }
  },

  prev() {
    if (this.index > 0) {
      this.index--;
      this.renderQuiz();
    }
  },

  go(i) {
    this.index = Math.max(0, Math.min(this.session.length - 1, parseInt(i, 10) || 0));
    document.body.classList.remove('palette-open');
    this.renderQuiz();
  },

  toggleBookmark() {
    const q = this.cur();
    if (!q) return;
    const isMarked = QuestionManager.toggleBookmark(q.id);
    const star = $('#btn-bookmark');
    if (star) {
      star.classList.remove('star-pop');
      if (isMarked) {
        void star.offsetWidth;
        star.classList.add('star-pop');
      }
    }
    this.renderQuiz();
  },

  // ======================================================================
  // ĐỒNG HỒ & THI THẬT
  // ======================================================================
  startExamTimer() {
    this.stopExamTimer();
    $('#exam-timer').hidden = false;
    this.tickExam();
    this.exam.timer = setInterval(() => this.tickExam(), 250);
  },

  stopExamTimer() {
    if (this.exam.timer) {
      clearInterval(this.exam.timer);
      this.exam.timer = null;
    }
  },

  tickExam() {
    const rem = Math.max(0, Math.ceil((this.exam.endAt - Date.now()) / 1000));
    this.exam.remaining = rem;
    $('#exam-countdown').textContent = fmtTime(rem);
    $('#exam-timer').classList.toggle('low', rem <= 180);
    if (rem <= 0) {
      this.stopExamTimer();
      this.finishSession(true);
    }
  },

  async confirmSubmit() {
    if (this.mode === 'review') return;
    const total = this.session.length;
    const answered = Object.keys(this.answers).length;
    const left = total - answered;

    const modeName = (this.mode === 'exam') ? 'bài thi thử' : 'bài luyện tập';
    const ok = await this.dialog({
      title: `Nộp ${modeName}?`,
      message: left > 0
        ? `Bạn còn ${left} câu chưa làm (đã làm ${answered}/${total}). Bạn có chắc chắn muốn nộp bài?`
        : `Bạn đã làm đủ ${total}/${total} câu. Bạn có chắc chắn muốn nộp bài?`,
      ok: 'Nộp bài',
      danger: (this.mode === 'exam')
    });
    if (ok) this.finishSession(false);
  },

  finishSession(timeUp) {
    if (this.mode === 'review') return;

    if (this.exam.running) {
      this.exam.running = false;
      this.stopExamTimer();
    }

    const n = this.session.length;
    let correct = 0;
    this.session.forEach(q => {
      if (this.answers[q.id] === q.correctAnswer) {
        correct++;
      } else {
        QuestionManager.addWrongQuestion(q.id);
      }
    });

    const wrong = n - correct;
    const score = Number(((correct / n) * 10).toFixed(2));
    const elapsed = this.mode === 'exam'
      ? (timeUp ? this.exam.total : (this.exam.total - this.exam.remaining))
      : Math.round((Date.now() - (this.sessionStartTime || Date.now())) / 1000);

    let rating;
    if (score >= 9) rating = 'Xuất sắc';
    else if (score >= 8) rating = 'Giỏi';
    else if (score >= 6.5) rating = 'Khá';
    else if (score >= 5) rating = 'Trung bình';
    else rating = 'Cần cố gắng hơn';

    $('#result-title').textContent = timeUp ? 'Hết giờ làm bài' : 'Đã nộp bài';
    $('#result-score').textContent = score;
    const r = $('#result-rating');
    r.textContent = rating;
    r.className = 'result-rating ' + (score >= 5 ? 'pass' : 'fail');
    $('#result-correct').textContent = correct;
    $('#result-wrong').textContent = wrong;
    $('#result-time').textContent = fmtTime(elapsed);
    $('#btn-result-mistakes').hidden = (wrong === 0);

    // Chuyển sang chế độ xem lại bài
    this.mode = 'review';
    this.index = 0;

    this.updateHeaderMode();
    this.renderQuiz();
    this.openModal('modal-result');
  },

  openResultModal() {
    this.openModal('modal-result');
  },

  reviewMistakes() {
    this.closeModal('modal-result');
    this.setupMode = 'practice';
    const wrongIds = QuestionManager.getWrongQuestionIds().filter(id => this.all.some(q => q.id === id));
    this.selected = new Set(wrongIds);
    this.filterMode = 'wrong';
    this.startFromSetup();
  },

  retakeExam() {
    this.closeModal('modal-result');
    this.showSetup();
  },

  // ======================================================================
  // NHẬP / XUẤT CÂU HỎI
  // ======================================================================
  openImport() {
    if (this.exam.running) {
      return this.notice('Không thể thêm câu hỏi trong lúc đang làm bài thi.');
    }
    this.previewImport();
    this.openModal('modal-import');
  },

  previewImport() {
    const n = QuestionManager.parseRawText($('#import-text').value).length;
    $('#import-count').textContent = `${n} câu được nhận diện`;
  },

  async importApply(kind) {
    const parsed = QuestionManager.parseRawText($('#import-text').value);
    if (!parsed.length) {
      return this.notice('Chưa nhận diện được câu hỏi nào. Vui lòng kiểm tra lại định dạng theo mẫu.');
    }

    let merged;
    if (kind === 'replace') {
      const ok = await this.dialog({
        title: 'Thay thế toàn bộ câu hỏi?',
        message: `Bộ câu hỏi hiện tại (${this.all.length} câu) sẽ được thay bằng ${parsed.length} câu mới. Sổ câu sai và câu đã lưu sẽ được đặt lại.`,
        ok: 'Thay thế',
        danger: true
      });
      if (!ok) return;
      merged = parsed.map((q, i) => ({ ...q, id: i + 1 }));
      localStorage.removeItem(QuestionManager.MISTAKES_KEY);
      localStorage.removeItem(QuestionManager.BOOKMARKS_KEY);
    } else {
      const maxId = this.all.reduce((m, q) => Math.max(m, q.id), 0);
      merged = [...this.all, ...parsed.map((q, i) => ({ ...q, id: maxId + i + 1 }))];
    }

    QuestionManager.saveQuestions(merged);
    this.reload();
    this.selected = new Set(this.all.map(q => q.id));
    $('#import-text').value = '';
    this.closeModal('modal-import');
    this.showSetup();
    this.notice(`Đã cập nhật xong! Hiện có tổng cộng ${this.all.length} câu hỏi.`, 'Thành công');
  },

  exportJSON() {
    const blob = new Blob([JSON.stringify(this.all, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ktct_questions.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },

  async resetDefault() {
    const ok = await this.dialog({
      title: 'Khôi phục câu hỏi mẫu?',
      message: 'Bộ câu hỏi hiện tại sẽ được thay bằng 20 câu mẫu ban đầu. Sổ câu sai và câu đã lưu sẽ được đặt lại.',
      ok: 'Khôi phục',
      danger: true
    });
    if (!ok) return;
    QuestionManager.resetToDefault();
    localStorage.removeItem(QuestionManager.MISTAKES_KEY);
    localStorage.removeItem(QuestionManager.BOOKMARKS_KEY);
    this.reload();
    this.selected = new Set(this.all.map(q => q.id));
    this.closeModal('modal-import');
    this.showSetup();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
