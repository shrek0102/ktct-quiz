# Ôn tập trắc nghiệm Kinh tế chính trị Mác - Lênin

Mở [`index.html`](index.html) bằng trình duyệt là dùng được ngay (không cần cài đặt, không cần mạng). Giao diện chuẩn font Times New Roman, hỗ trợ chế độ Sáng / Tối, tối ưu mượt mà cho cả Máy tính (Desktop/PC) và Điện thoại (Mobile).

---

## 🌟 Luồng hoạt động

### 1. Màn hình đầu tiên (Setup & Chọn đề):
Mở web lên là màn hình chọn đề ngay:
- **Chọn chế độ**:
  - **Ôn luyện**: Chọn đáp án là biết đúng/sai ngay lập tức.
  - **Thi thật**: Tính giờ (mặc định 20 phút hoặc tự chỉnh), ẩn đáp án, nộp bài tính điểm thang 10.
  - **Sổ câu sai**: Chỉ ôn các câu bạn từng làm sai.
  - **Đã đánh dấu**: Chỉ ôn các câu bạn đã gắn sao ⭐.
- **Tùy chỉnh phạm vi câu hỏi**:
  - Chọn nhanh: *Tất cả*, *Bỏ chọn*, *Từ câu A đến B*, *Ngẫu nhiên X câu*.
  - Lưới số câu hỏi (1..N): Bấm trực tiếp vào từng ô số để bật/tắt câu muốn làm.
- Bấm nút **[ Bắt Đầu Làm Bài ]** để vào giao diện trắc nghiệm.

### 2. Màn hình làm bài (Quiz View):
- Thanh trên cùng siêu tối giản: Có nút **`[ ← Chọn lại đề ]`** để quay lại đổi đề bất cứ lúc nào, cùng nút Sáng/Tối và đồng hồ đếm ngược (nếu thi thật). Không còn thanh tab rườm rà.
- **KHÔNG CÓ PHẦN GIẢI THÍCH**:
  - Khi chọn đáp án ở chế độ Ôn luyện: Đáp án đúng tô **Xanh lá (✔️)**, đáp án bạn chọn sai tô **Đỏ (❌)**. Không hiện thêm đoạn text giải thích dài dòng.
  - Có nút nhỏ *Làm lại* ở góc câu hỏi nếu muốn xóa lựa chọn để thử lại.
- Danh sách câu hỏi bên phải (Palette) hiển thị trực quan các câu đã làm, đúng, sai.

---

## 📥 Thêm câu hỏi mới

Bấm nút **`+`** ở góc phải trên cùng thanh header:
- Dán nội dung câu hỏi theo định dạng:
```text
Câu 1: Hai thuộc tính của hàng hóa là gì?
A. Giá trị sử dụng và giá trị
B. Giá cả và chi phí
C. Lợi nhuận và tiền tệ
D. Cung và cầu
Đáp án: A
```
- Chọn **Thêm vào** (nối tiếp vào bộ hiện tại) hoặc **Thay thế** (thay toàn bộ bằng 100 câu mới).
- Hoặc chỉnh sửa trực tiếp mảng `DEFAULT_QUESTIONS` trong file `js/questions.js`.
