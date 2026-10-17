/**
 * DỮ LIỆU CÂU HỎI MÔN KINH TẾ CHÍNH TRỊ MÁC - LÊNIN
 * Trọn bộ 100 câu hỏi ôn tập & thi thử chính thức
 */

const DEFAULT_QUESTIONS = [
  {
    id: 1,
    question: "Giá trị sử dụng của hàng hoá phụ thuộc vào:",
    options: {
      A: "Nhu cầu của con người",
      B: "Sự phát triển của khoa học, công nghệ",
      C: "Sự phát triển của nền sản xuất xã hội",
      D: "Đáp án B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 2,
    question: "Đưa ra cách hiểu đúng về \"Hàng hoá\":",
    options: {
      A: "Hàng hóa là sản phẩm có ích do con người tạo ra",
      B: "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người và được trao đổi, mua bán",
      C: "Đồ vật đáp ứng nhu cầu của ai đó",
      D: "Sản phẩm để trao đổi hoặc cất trữ"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 3,
    question: "Giá trị của hàng hóa do:",
    options: {
      A: "Khan hiếm tài nguyên quyết định.",
      B: "Quan hệ cung cầu quyết định",
      C: "Hao phí lao động xã hội của người sản xuất kết tinh trong hàng hóa quyết định",
      D: "Công dụng của hàng hóa quyết định. Hàng hóa càng có công dụng thì càng có giá trị cao."
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 4,
    question: "Mệnh đề nào sai?",
    options: {
      A: "Mọi sản phẩm đều là hàng hoá",
      B: "Mọi hàng hoá đều là sản phẩm",
      C: "Mọi sản phẩm đều là kết quả của sản xuất",
      D: "Không phải mọi sản phẩm đều là hàng hoá"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 5,
    question: "Giá trị hàng hoá là phạm trù:",
    options: {
      A: "Lịch sử",
      B: "Vĩnh viễn",
      C: "Xã hội",
      D: "Triết học"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 6,
    question: "Hai hàng hoá trao đổi được với nhau vì:",
    options: {
      A: "Chúng cùng là sản phẩm của lao động",
      B: "Có lượng thời gian hao phí lao động xã hội cần thiết để sản xuất ra chúng bằng nhau",
      C: "Có lượng hao phí vật tư kỹ thuật bằng nhau",
      D: "Cả A và B"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 7,
    question: "Yếu tố ảnh hưởng đến giá cả hàng hoá:",
    options: {
      A: "Quan hệ cung cầu",
      B: "Giá trị hàng hoá",
      C: "Công dụng của hàng hoá",
      D: "Cả A, B"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 8,
    question: "Lượng giá trị của một đơn vị hàng hoá gồm:",
    options: {
      A: "Hao phí lao động quá khứ",
      B: "Hao phí lao động mới",
      C: "Chi phí sản xuất tư bản",
      D: "Hao phí lao động quá khứ và hao phí lao động mới kết tinh vào hàng hoá"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 9,
    question: "Các nhân tố ảnh hưởng đến lượng giá trị hàng hoá:",
    options: {
      A: "Năng suất lao động",
      B: "Trình độ khoa học công nghệ được áp dụng vào sản xuất",
      C: "Mức độ phức tạp của lao động",
      D: "Đáp án A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 10,
    question: "Trong sản xuất hàng hóa:",
    options: {
      A: "Lao động trí óc là lao động trừu tượng, lao động chân tay là lao động cụ thể",
      B: "Lao động trí óc là lao động cụ thể, lao động chân tay là lao động trừu tượng",
      C: "Lao động trí óc và lao động chân tay đều có 2 mặt là lao động cụ thể và lao động trừu tượng",
      D: "Lao động trí óc và lao động chân tay là lao động cụ thể hoặc lao động trừu tượng"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 11,
    question: "Điền vào mệnh đề: \"Năng suất lao động tăng sẽ dẫn đến…\"",
    options: {
      A: "Số lượng hàng hoá sản xuất ra trong 1 đơn vị thời gian tăng, giá trị của một đơn vị hàng hoá giảm",
      B: "Số lượng hàng hóa sản xuất ra trong 1 đơn vị thời gian tăng, giá trị của một đơn vị hàng hóa tăng",
      C: "Giá trị của 1 đơn vị hàng hoá tăng",
      D: "Giá cả hàng hóa tăng"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 12,
    question: "Cường độ lao động tăng lên sẽ dẫn đến:",
    options: {
      A: "Giá trị của 1 đơn vị hàng hoá tăng lên",
      B: "Tăng tổng giá trị tạo ra trong một đơn vị thời gian nhưng giá trị 1 đơn vị hàng hoá không đổi.",
      C: "Không ảnh hưởng gì đến hoạt động sản xuất",
      D: "Giá trị của 1 đơn vị hàng hoá giảm đi"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 13,
    question: "Điểm giống nhau của tăng \"Năng suất lao động\" với tăng \"Cường độ lao động\" là:",
    options: {
      A: "Số lượng hàng hoá giảm",
      B: "Số sản phẩm tăng lên",
      C: "Hao phí nhiều sức cho quá trình sản xuất",
      D: "Không có điểm giống nhau"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 14,
    question: "Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là đúng?",
    options: {
      A: "Tổng số hàng hoá tăng 4 lần",
      B: "Tổng số giá trị hàng hoá tăng 4 lần",
      C: "Giá trị 1 đơn vị hàng hoá giảm 4 lần",
      D: "Giá trị 1 đơn vị hàng hoá không đổi"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 15,
    question: "Lao động của người sản xuất hàng hoá có tính 2 mặt:",
    options: {
      A: "Gồm: Lao động sống, lao động quá khứ",
      B: "Gồm: Lao động giản đơn và lao động phức tạp",
      C: "Gồm: Lao động tư nhân và lao động xã hội",
      D: "Gồm: Lao động cụ thể, lao động trừu tượng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 16,
    question: "Vì sao hàng hoá có 2 thuộc tính giá trị sử dụng và giá trị ?",
    options: {
      A: "Sản xuất hàng hoá tồn tại mâu thuẫn giữa tính tư nhân và tính xã hội",
      B: "Lao động sản xuất hàng hoá có tính 2 mặt: Lao động cụ thể và lao động trừu tượng",
      C: "Để thể hiện các yếu tố khác nhau trong sản phẩm hàng hoá",
      D: "Do lao động sản xuất hàng hóa chia làm 2 loại: lao động phức tạp và lao động giản đơn"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 17,
    question: "Hãy chọn 1 nội dung đúng nhất nói về lao động cụ thể và lao động trừu tượng:",
    options: {
      A: "Lao động cụ thể tạo ra sản phẩm còn lao động trừu tượng không tạo ra sản phẩm",
      B: "Lao động cụ thể tạo ra giá trị sử dụng của hàng hoá, lao động trừu tượng tạo ra giá trị hàng hoá",
      C: "Lao động cụ thể tạo ra giá trị của hàng hoá, lao động trừu tượng tạo ra giá trị sử dụng hàng hoá",
      D: "Lao động cụ thể tạo ra ít sản phẩm, lao động trừu tượng tạo ra nhiều sản phẩm"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 18,
    question: "Bản chất \"tiền tệ\" là gì?",
    options: {
      A: "Là hàng hóa đặc biệt, làm vật ngang giá cho các hàng hóa khác.",
      B: "Phản ánh hao phí lao động xã hội.",
      C: "Phản ánh quan hệ xã hội giữa những người sản xuất và trao đổi hàng hóa.",
      D: "Cả 3 đáp án A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 19,
    question: "Vì sao tiền thực hiện được chức năng thước đo giá trị?",
    options: {
      A: "Bởi vì bản thân tiền cũng là hàng hoá có giá trị",
      B: "Bởi vì do nhà nước quy định",
      C: "Bởi vì tiền được đưa vào trong lưu thông",
      D: "Bởi vì tiền có khả năng cất trữ và ít bị hao mòn hữu hình của tự nhiên"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 20,
    question: "Chọn ý đúng về \"thị trường\":",
    options: {
      A: "Là nơi diễn ra hành vi trao đổi mua bán hàng hoá giữa các chủ thể kinh tế.",
      B: "Là tổng hòa các mối quan hệ về trao đổi, mua bán hàng hóa trong xã hội; bị ảnh hưởng bởi các điều kiện lịch sử, kinh tế xã hội nhất định.",
      C: "Trong thị trường, các quan hệ và yếu tố vận động theo quy luật thị trường.",
      D: "Cả A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 21,
    question: "Thị trường có vai trò như thế nào?",
    options: {
      A: "Là điều kiện, môi trường cho sản xuất phát triển",
      B: "Kích thích sáng tạo của mọi thành viên trong xã hội, phân bổ nguồn lực hiệu quả trong nền kinh tế.",
      C: "Gắn kết nền kinh tế thành một chỉnh thể, gắn kết kinh tế quốc gia với kinh tế thế giới",
      D: "Cả A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 22,
    question: "Nền kinh tế thị trường là gì?",
    options: {
      A: "Là nền kinh tế trong đó có sản xuất và trao đổi hàng hoá",
      B: "Là nền kinh tế trong đó giá cả do nhà nước niêm yết công khai, minh bạch",
      C: "Là nền kinh tế hàng hóa phát triển ở trình độ cao, vận hành theo cơ chế thị trường",
      D: "Là nền kinh tế chịu sự tác động điều tiết của một số quy luật thị trường"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 23,
    question: "Nền kinh tế thị trường có các đặc trưng:",
    options: {
      A: "Là nền kinh tế mở",
      B: "Gồm nhiều hình thức sở hữu tư liệu sản xuất",
      C: "Giá cả hình thành theo nguyên tắc thị trường",
      D: "Cả A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 24,
    question: "Công thức T – H – T' ý nghĩa như thế nào?",
    options: {
      A: "Công thức chung của tư bản",
      B: "Công thức lưu thông hàng hóa giản đơn",
      C: "Công thức tiền sinh ra tiền",
      D: "Công thức lợi nhuận trong nền sản xuất tư bản chủ nghĩa"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 25,
    question: "Trong công thức T – H – T' trong đó T' = T + ΔT. Ý nghĩa của ΔT đó là :",
    options: {
      A: "Sản phẩm thặng dư",
      B: "Giá trị thặng dư bị nhà tư bản chiếm đoạt",
      C: "Thời gian làm việc thặng dư",
      D: "Lợi nhuận của nhà tư bản"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 26,
    question: "Nguồn gốc của giá trị thặng dư là do:",
    options: {
      A: "Tiền sinh ra giá trị thặng dư.",
      B: "Hàng hoá sức lao động sinh ra giá trị thặng dư",
      C: "Vốn đầu tư của chủ tư bản tạo ra giá trị thặng dư",
      D: "Máy móc tạo ra giá trị thặng dư"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 27,
    question: "\"Tư bản\" là:",
    options: {
      A: "Là giá trị đem lại giá trị thặng dư",
      B: "Là tiền nhà tư bản mua máy móc, nguyên liệu, nhà xưởng và thuê sức lao động để sản xuất giá trị thặng dư",
      C: "Là phạm trù lịch sử",
      D: "Cả 3 đáp án A, B,C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 28,
    question: "Khi nhà tư bản trả công cho người công nhân đúng bằng giá trị hàng hóa sức lao động, thì có bóc lột giá trị thặng dư không?",
    options: {
      A: "Không bóc lột giá trị thặng dư.",
      B: "Vẫn bóc lột giá trị thặng dư",
      C: "Còn tùy vào lĩnh vực là công nghiệp hay thương nghiệp",
      D: "Còn tùy vào thời điểm trả công"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 29,
    question: "Hoàn thành mệnh đề sau: \"Hàng hoá sức lao động …\"",
    options: {
      A: "Bao gồm cả thể lực và trí lực, là khả năng lao động của con người trong quá trình sản xuất",
      B: "Bao gồm sức lao động của người công nhân và của chủ tư bản",
      C: "Cũng có hai thuộc tính giá trị và giá trị sử dụng, nhưng hai thuộc tính này đặc biệt hơn so với hàng hoá thông thường",
      D: "Là phạm trù vĩnh viễn, vì mọi phương thức sản xuất đều có những người lao động"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 30,
    question: "Giá trị sử dụng của hàng hóa sức lao động đặc biệt, vì:",
    options: {
      A: "Số lượng lao động xã hội cần thiết để sản xuất và tái sản xuất ra sức lao động quyết định",
      B: "Người công nhân có thể làm được công việc chủ tư bản thuê",
      C: "Khi sử dụng hàng hóa sức lao động, có thể tạo ra lượng giá trị mới lớn hơn giá trị bản thân nó",
      D: "Là phạm trù vĩnh viễn."
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 31,
    question: "Về mặt giá trị, hàng hóa sức lao động được cấu thành bởi:",
    options: {
      A: "Giá trị của tư liệu sinh hoạt cần thiết để tái sản xuất sức lao động người công nhân.",
      B: "Chi phí đào tạo người lao động",
      C: "Giá trị của tư liệu sinh hoạt cần thiết để nuôi con cái người công nhân",
      D: "Cả A, B và C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 32,
    question: "\"Tiền công\" thực chất đó là:",
    options: {
      A: "Giá cả của hàng hóa sức lao động",
      B: "Giá trị của lao động",
      C: "Giá cả của lao động",
      D: "Giá trị của sức lao động"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 33,
    question: "Căn cứ nguồn gốc sinh ra giá trị thặng dư, tư bản được chia thành:",
    options: {
      A: "Tư bản bất biến và tư bản khả biến",
      B: "Tư bản cố định và tư bản lưu động",
      C: "Tư bản tiền tệ và tư bản sản xuất",
      D: "Tư bản sản xuất và tư bản hàng hóa"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 34,
    question: "Phân chia tư bản thành tư bản bất biến và tư bản khả biến, để:",
    options: {
      A: "Thấy được phương thức chu chuyển giá trị của tư bản sản xuất vào giá trị sản phẩm",
      B: "Thấy được nguồn gốc sinh ra giá trị thặng dư là bộ phận tư bản khả biến",
      C: "Thấy được nguồn gốc sinh ra giá trị thặng dư là bộ phận tư bản bất biến",
      D: "Thấy được cách thức làm giàu của nhà tư bản"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 35,
    question: "Yếu tố nào không thuộc tư bản bất biến:",
    options: {
      A: "Tư bản dùng để mua máy móc, thiết bị, nhà xưởng",
      B: "Tư bản dùng để trả tiền lương, tiền thưởng cho công nhân",
      C: "Tư bản dùng để đầu tư kết cấu hạ tầng phục vụ sản xuất",
      D: "Tư bản dùng để mua nguyên liệu , vật liệu, phụ liệu"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 36,
    question: "Phương pháp sản xuất giá trị thặng dư tuyệt đối là:",
    options: {
      A: "Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết thay đổi",
      B: "Tiết kiệm chi phí sản xuất",
      C: "Sử dụng kỹ thuật tiên tiến, cải tiến tổ chức quản lý",
      D: "Tăng năng suất lao động"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 37,
    question: "Sản xuất giá trị thặng dư tương đối:",
    options: {
      A: "Thu được do kéo dài ngày lao động vượt quá thời gian lao động tất yếu, trong khi các yếu tố khác không đổi.",
      B: "Thu được do rút ngắn thời gian lao động tất yếu",
      C: "Thu được do tăng năng suất lao động ở các xí nghiệp cá biệt so với giá trị chung của xã hội",
      D: "Thu được do kéo dài ngày lao động và tăng năng suất lao động"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 38,
    question: "Tư bản bất biến, ký hiệu:",
    options: {
      A: "K",
      B: "c",
      C: "v",
      D: "m"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 39,
    question: "Chọn đáp án đúng về \"Tư bản khả biến\":",
    options: {
      A: "Tư bản khả biến là bộ phận trực tiếp tạo ra giá trị thặng dư",
      B: "Bộ phận tư bản tồn tại dưới hình thái sức lao động",
      C: "Tiền công người công nhân nhận được khi chủ tư bản trả",
      D: "Cả A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 40,
    question: "Công thức tính \"lợi nhuận\":",
    options: {
      A: "p = m",
      B: "p = G – k",
      C: "p = c + v + m",
      D: "p = k + m"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 41,
    question: "Lợi nhuận là:",
    options: {
      A: "Là phạm trù lịch sử",
      B: "Là số chênh lệch giữa giá bán hàng hoá và chi phí sản xuất",
      C: "Là biểu hiện bên ngoài của giá trị thặng dư",
      D: "Cả A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 42,
    question: "Chọn đáp án đúng về \"Tỷ suất giá trị thặng dư\":",
    options: {
      A: "Công thức là: m' = (m/v).100%",
      B: "Công thức là: m' = (t'/t).100%",
      C: "Phản ánh trình độ bóc lột giá trị thặng dư của nhà tư bản",
      D: "Cả A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 43,
    question: "Nguồn gốc của lợi nhuận thương nghiệp :",
    options: {
      A: "Do lưu thông mà có",
      B: "Do bán hàng hóa cao hơn giá trị",
      C: "Do tiết kiệm chi phí vận chuyển",
      D: "Là một phần giá trị thặng dư được tạo ra trong sản xuất"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 44,
    question: "Đặc điểm của Tư bản cho vay:",
    options: {
      A: "Quyền sử dụng tách khỏi quyền sở hữu",
      B: "Tư bản cho vay là hàng hóa đặc biệt",
      C: "Đáp án A và B đều đúng",
      D: "Chính là hình thức \"Tiền đẻ ra tiền\""
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 45,
    question: "Để thấy được nguồn gốc tạo ra GTTD, tư bản được chia thành:",
    options: {
      A: "Tư bản bất biến và tư bản khả biến",
      B: "Tư bản cố định và tư bản lưu động",
      C: "Tư bản sản xuất và tư bản lưu thông",
      D: "Tư bản hàng hóa và tư bản tiền tệ"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 46,
    question: "Tích lũy tư bản:",
    options: {
      A: "Là tiết kiệm chi tiêu của nhà tư bản và đem vào sản xuất",
      B: "Là việc hợp nhất vốn của các nhà tư bản để mở rộng sản xuất",
      C: "Là sự chuyển hóa một phần giá trị thặng dư thành tư bản",
      D: "Là việc mở rộng quy mô sản xuất bằng việc vay vốn ngân hàng"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 47,
    question: "Độc quyền định nghĩa là gì ?",
    options: {
      A: "Là liên minh các chủ tư bản, trong việc sản xuất hàng hoá , dịch vụ .",
      B: "Là sự liên minh giữa chủ tư bản, trong việc định giá hàng hóa, dịch vụ .",
      C: "Là liên minh các tư bản trong việc định giá cả độc quyền, nhằm thu lợi nhuận độc quyền cao.",
      D: "Là sự liên minh giữa chủ tư bản, trong việc định giá cân bằng giá cả - thị trường hàng hóa , dịch vụ"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 48,
    question: "Giá cả độc quyền là gì ?",
    options: {
      A: "Là giá cả do các tổ chức độc quyền áp đặt trong mua, bán hàng hóa để đạt được lợi nhuận độc quyền cao",
      B: "Là giá cả do các tổ chức độc quyền áp đặt trong mua hàng hóa để đạt được lợi nhuận độc quyền cao",
      C: "Là giá cả do các tổ chức độc quyền áp đặt trong bán hàng hóa để đạt được lợi nhuận độc quyền cao",
      D: "Là giá cả do các tổ chức độc quyền áp đặt trong mua, bán hàng hóa nhưng vẫn chịu sự điều tiết của Nhà nước"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 49,
    question: "Khi mới bắt đầu quá trình độc quyền, các tổ chức độc quyền hình thành theo liên kết nào ?",
    options: {
      A: "Ngang",
      B: "Dọc",
      C: "Cả A và B",
      D: "Không có đáp án nào đúng"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 50,
    question: "Hình thức tổ chức độc quyền đầu tiên là gì ?",
    options: {
      A: "Xanhđica",
      B: "Cácten",
      C: "Tờ rớt",
      D: "Công xooc xi om"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 51,
    question: "Trong giai đoạn độc quyền, các tổ chức độc quyền mua và bán hàng hóa theo giá cả độc quyền để thu được gì ?",
    options: {
      A: "Lợi nhuận độc quyền cao.",
      B: "Lợi nhuận siêu ngạch",
      C: "Lợi nhuận bình quân",
      D: "Lợi nhuận cá biệt"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 52,
    question: "Xuất khẩu tư bản là gì?",
    options: {
      A: "Xuất khẩu tư bản là xuất khẩu hàng hóa ra nước ngoài để thu lợi nhuận",
      B: "Xuất khẩu tư bản là xuất khẩu giá trị ra nước ngoài nhằm chiếm đoạt giá trị thặng dư và các nguồn lợi nhuận khác ở các nước nhập khẩu tư bản.",
      C: "Xuất khẩu tư bản là xuất khẩu giá trị ra nước ngoài nhằm giúp đỡ các nước kém phát triển",
      D: "Xuất khẩu tư bản là xuất khẩu giá trị ra nước ngoài nhằm phân phối giá trị thặng dư ở các nước nhập khẩu tư bản"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 53,
    question: "Các tổ chức độc quyền xuất hiện vào giai đoạn nào?",
    options: {
      A: "Từ giữa thế kỷ XV đến giữa thế kỷ XVII",
      B: "Từ giữa thế kỷ XVI đến giữa thế kỷ XVII",
      C: "Từ nửa cuối thế kỷ XVII đến nửa đầu thế kỷ XVIII",
      D: "Cuối thế kỷ XIX đầu thế kỷ XX"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 54,
    question: "Hãy chỉ ra tác động tiêu cực của độc quyền?",
    options: {
      A: "Thúc đẩy tiến bộ kỹ thuật",
      B: "Góp phần thúc đẩy nền kinh tế phát triển theo hướng sản xuất lớn hiện đại",
      C: "Tăng năng suất lao động",
      D: "Phá vỡ cạnh tranh hoàn hảo gây thiệt hại cho người tiêu dùng và xã hội."
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 55,
    question: "Hãy chỉ ra tác động tích cực của độc quyền ?",
    options: {
      A: "Độc quyền tạo ra khả năng to lớn trong việc nghiên cứu triển khai các hoạt động khoa học kỹ thuật, thúc đẩy tiến bộ kỹ thuật",
      B: "Độc quyền xuất hiện phá vỡ cạnh tranh hoàn hảo gây thiệt hại cho người tiêu dùng và xã hội",
      C: "Độc quyền có thể kìm hãm tiến bộ kỹ thuật, theo đó kìm hãm sự phát triển kinh tế, xã hội.",
      D: "Độc quyền chi phối các quan hệ kinh tế, xã hội, làm tăng sự phân hóa giàu nghèo"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 56,
    question: "Đâu không phải là nguyên nhân hình thành các tổ chức độc quyền",
    options: {
      A: "Do sự phát triển của lực lượng sản xuất",
      B: "Do khủng hoảng và sự phát triển của các tổ chức tín dụng",
      C: "Do cạnh tranh tự do",
      D: "Do nhà nước xã hội chủ nghĩa"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 57,
    question: "Theo C.Mác, tích tụ và tập trung sản xuất phát triển đến mức độ nhất định sẽ dẫn đến:",
    options: {
      A: "Cạnh tranh tự do.",
      B: "Độc quyền.",
      C: "Thất nghiệp.",
      D: "Sản xuất nhỏ."
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 58,
    question: "Một đặc trưng quan trọng của kinh tế thị trường định hướng XHCN ở Việt Nam là:",
    options: {
      A: "Xóa bỏ vai trò quản lý của Nhà nước.",
      B: "Lấy mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
      C: "Chỉ dựa trên cạnh tranh tự do.",
      D: "Phủ nhận quan hệ hàng hóa – tiền tệ."
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 59,
    question: "KTTT định hướng XHCN ở Việt Nam được xác định bao gồm các hình thức sở hữu nào (theo quan điểm của Đại hội lần thứ XIII Đảng Cộng sản Việt Nam)?",
    options: {
      A: "Sở hữu nhà nước, sở hữu tập thể",
      B: "Sở hữu tư nhân",
      C: "Sở hữu hỗn hợp",
      D: "Cả 3 đáp án A, B,C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 60,
    question: "Điền vào dấu \"…\": \"Trong nền kinh tế thị trường định hướng XHCN ở Việt Nam... đóng vai trò định hướng, xây dựng và hoàn thiện thể chế kinh tế\"",
    options: {
      A: "Nhà nước",
      B: "Người sản xuất",
      C: "Người tiêu dùng",
      D: "Chủ thể trung gian"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 61,
    question: "Xét về hình thức đầu tư, xuất khẩu tư bản bao gồm những gì?",
    options: {
      A: "Đầu tư trực tiếp",
      B: "Đầu tư gián tiếp.",
      C: "Cả A và B",
      D: "Đầu tư trực tiếp, đầu tư gián tiếp, đầu tư hỗn hợp"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 62,
    question: "Độc quyền nhà nước hiểu thế nào là đúng ?",
    options: {
      A: "Là kiểu tổ chức do tư nhân thực hiện",
      B: "Là kiểu tổ chức có cả tư nhân và nhà nước kết hợp với nhau",
      C: "Tư nhân và Nhà nước cùng kết hợp, nhưng dựa trên sức mạnh của nhà nước.",
      D: "Là kiểu tổ chức mà sức mạnh của tư nhân và nhà nước là cân bằng nhau."
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 63,
    question: "Định hướng XHCN có mục tiêu đạt được những giá trị cốt lõi là gì?",
    options: {
      A: "Quân đội hùng mạnh",
      B: "Đời sống nhân dân ấm no, hạnh phúc",
      C: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      D: "Nền văn hóa tiên tiến đậm đà bản sắc dân tộc"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 64,
    question: "Nhà nước pháp quyền XHCN Việt Nam đặt dưới sự lãnh đạo:",
    options: {
      A: "Đảng Cộng sản Việt Nam",
      B: "Quốc hội Việt Nam",
      C: "Quân đội nhân dân Việt Nam",
      D: "Chính phủ Việt Nam"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 65,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, yếu tố đóng vai trò là động lực chủ yếu trong việc giải phóng sức sản xuất là?",
    options: {
      A: "Cung",
      B: "Cầu",
      C: "Thị trường",
      D: "Cung và cầu"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 66,
    question: "Mục tiêu phát triển nền KTTT định hướng XHCN ở Việt Nam là gì?",
    options: {
      A: "Để tạo ra cơ sở vật chất - kỹ thuật của CNXH",
      B: "Làm cho cuộc sống người dân tốt hơn",
      C: "Đạt mục tiêu \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"",
      D: "Cả 3 đáp án A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 67,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò chủ đạo?",
    options: {
      A: "Thành phần kinh tế nhà nước",
      B: "Thành phần kinh tế tư nhân",
      C: "Thành phần kinh tế tập thể",
      D: "Thành phần kinh tế có vốn đầu tư nước ngoài"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 68,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò là một động lực quan trọng?",
    options: {
      A: "Thành phần kinh tế nhà nước",
      B: "Thành phần kinh tế tư nhân",
      C: "Thành phần kinh tế tập thể",
      D: "Thành phần kinh tế có vốn đầu tư nước ngoài"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 69,
    question: "Lợi ích kinh tế được hiểu:",
    options: {
      A: "Đó là khi tham gia thực hiện các hoạt động kinh tế thì con người thu được lợi ích vật chất",
      B: "Đó là khi tham gia thực hiện các hoạt động kinh tế thì con người thu được lợi ích vật chất và lợi ích tinh thần",
      C: "Đó là lợi ích vật chất của doanh nghiệp",
      D: "Đó là lợi ích vật chất của người lao động gồm: Lương, thưởng của người lao động"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 70,
    question: "Lợi ích kinh tế của chủ doanh nghiệp được thể hiện ở:",
    options: {
      A: "Doanh thu",
      B: "Lãi suất",
      C: "Lợi nhuận",
      D: "Tốc độ tăng trưởng"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 71,
    question: "Lợi ích kinh tế của người lao động được thể hiện trước hết ở:",
    options: {
      A: "Thu nhập",
      B: "Bảo hiểm xã hội",
      C: "Phúc lợi xã hội",
      D: "Tiền công thực tế"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 72,
    question: "Trong các hình thức lợi ích kinh tế, hình thức được coi là cơ sở, nền tảng của những lợi ích còn lại là:",
    options: {
      A: "Lợi ích kinh tế cá nhân",
      B: "Lợi ích kinh tế xã hội",
      C: "Lợi ích kinh tế tập thể",
      D: "Lợi ích kinh tế nhóm"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 73,
    question: "Đối với KTTT định hướng XHCN ở Việt Nam, Đảng lãnh đạo nền kinh tế thông qua đâu?",
    options: {
      A: "Cương lĩnh cũng như các đường lối để thực hiện phát triển kinh tế xã hội",
      B: "Đảng đề ra chủ trương, cũng như các quyết sách ở từng giai đoạn phát triển đất nước",
      C: "Cả A và B đúng",
      D: "Chính sách, pháp luật về kinh tế"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 74,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, để thực hiện vai trò của mình, Nhà nước phải thông qua đâu?",
    options: {
      A: "Các quy định của hệ thống pháp luật",
      B: "Xây dựng các quy hoạch và kế hoạch",
      C: "Sử dụng các công cụ kinh tế cũng như xây dựng các chính sách",
      D: "Cả 3 đáp án A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 75,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, nhà nước tác động vào thị trường thông qua yếu tố nào?",
    options: {
      A: "Bằng cơ chế",
      B: "Đưa ra các chính sách.",
      C: "Sử dụng các công cụ kinh tế",
      D: "Cả 3 đáp án A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 76,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam hình thức phân phối nào phản ánh định hướng XHCN?",
    options: {
      A: "Phân phối theo lao động",
      B: "Phân phối theo hiệu quả kinh tế",
      C: "Phân phối theo phúc lợi",
      D: "Cả 3 đáp án A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 77,
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, Nhà nước không thực hiện chức năng nào?",
    options: {
      A: "Xây dựng và hoàn thiện thể chế",
      B: "Kiểm soát độc quyền",
      C: "Khắc phục tình trạng thị trường không hoàn hảo",
      D: "Cung cấp tất cả các hàng hóa và dịch vụ cho thị trường"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 78,
    question: "Ở Việt Nam, thể chế KTTT định hướng XHCN phải là thể chế phục vụ và vì lợi ích của ai?",
    options: {
      A: "Giai cấp công nhân và nông dân",
      B: "Đảng Cộng sản Việt Nam",
      C: "Nhân dân",
      D: "Nhà nước xã hội chủ nghĩa Việt Nam"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 79,
    question: "Hãy cho biết mối quan hệ lợi ích kinh tế như thế nào?",
    options: {
      A: "Có sự thống nhất",
      B: "Có sự mâu thuẫn",
      C: "Thống nhất và mâu thuẫn",
      D: "Không có mối liên hệ với nhau"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 80,
    question: "Quan điểm \"Công nghiệp hóa gắn với phát triển bền vững\" nghĩa là:",
    options: {
      A: "Công nghiệp hóa nông nghiệp làm mặt trận hàng đầu",
      B: "Kết hợp tăng trưởng kinh tế với bảo vệ môi trường, công bằng xã hội.",
      C: "Tập trung giải quyết vấn đề xã hội.",
      D: "Chú trọng công nghiệp hóa đô thị."
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 81,
    question: "Công nghiệp hóa là gì?",
    options: {
      A: "CNH là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội dựa chủ yếu trên lao động bằng máy móc nhằm tạo ra năng suất LĐ XH cao",
      B: "CNH là quá trình hiện đại hóa hoạt động sản xuất trong XH",
      C: "CNH là quá trình chuyển nền sản xuất xã hội sang chủ yếu bằng máy móc nhằm tạo ra năng suất lao động xã hội cao",
      D: "CNH là quá trình chuyển từ lao động thủ công sang lao động bằng máy móc"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 82,
    question: "CNH ở nước Anh bắt đầu từ ngành:",
    options: {
      A: "Công nghiệp nhẹ",
      B: "Công nghiệp nặng",
      C: "Dịch vụ",
      D: "Cơ khí chế tạo máy"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 83,
    question: "Mô hình CNH tiêu biểu trên thế giới là:",
    options: {
      A: "Mô hình CNH cổ điển",
      B: "Mô hình CNH kiểu Liên Xô",
      C: "Mô hình CNH của Nhật Bản & các nước công nghiệp mới (NICs)",
      D: "Cả 3 đáp án A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 84,
    question: "Nhật Bản và các nước công nghiệp mới (NICs) sử dụng con đường nào để tiến hành CNH, HĐH?",
    options: {
      A: "Đầu tư nghiên cứu, chế tạo và hoàn thiện dần dần trình độ công nghệ từ trình độ thấp đến trình độ cao",
      B: "Tiếp nhận chuyển giao công nghệ hiện đại từ nước phát triển hơn",
      C: "Xây dựng chiến lược phát triển KH - CN nhiều tầng, kết hợp công nghệ truyền thống và công nghệ hiện đại",
      D: "Cả 3 đáp án A, B, C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 85,
    question: "Trong hệ thống cơ cấu kinh tế, nội dung giữ vai trò quan trọng nhất là:",
    options: {
      A: "Cơ cấu ngành",
      B: "Cơ cấu vùng",
      C: "Cơ cấu thành phần",
      D: "Không có đáp án nào đúng"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 86,
    question: "Cơ cấu kinh tế là:",
    options: {
      A: "Mối quan hệ tỷ lệ giữa các ngành, các vùng và các thành phần kinh tế",
      B: "Việc sắp xếp các lĩnh vực trong nền kinh tế",
      C: "Quan hệ tỷ lệ giữa các ngành kinh tế",
      D: "Việc tổ chức nền kinh tế thành các thành phần khác nhau"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 87,
    question: "Hội nhập kinh tế quốc tế là gì?",
    options: {
      A: "Là 1 quốc gia tham gia vào nền kinh tế thế giới để đạt được mục tiêu ổn định kinh tế vĩ mô.",
      B: "Là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích, đồng thời tuân thủ các chuẩn mực quốc tế chung.",
      C: "Là quá trình quốc gia gắn kết với thế giới trên các phương diện: chính trị, kinh tế, văn hóa.",
      D: "Là gia nhập tổ chức kinh tế quốc tế WTO."
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 88,
    question: "Tại sao nói: \"Hội nhập kinh tế quốc tế là tất yếu khách quan đối với Việt Nam\" ?",
    options: {
      A: "Do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế.",
      B: "Gia tăng thêm uy tín cho quốc gia.",
      C: "Hội nhập kinh tế quốc tế là phương thức phát triển của các nước kể cả các nước đang và kém phát triển.",
      D: "Đáp án A và C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 89,
    question: "Toàn cầu hóa là gì?",
    options: {
      A: "Là một quốc gia tham gia hội nhập kinh tế quốc tế.",
      B: "Là việc các quốc gia trong khu vực liên kết & phụ thuộc lẫn nhau.",
      C: "Là quá trình tạo ra liên kết & sự phụ thuộc lẫn nhau ngày càng tăng giữa các quốc gia trên quy mô toàn cầu.",
      D: "Chỉ diễn ra trên phương diện kinh tế."
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 90,
    question: "Giá trị của hội nhập kinh tế quốc tế là:",
    options: {
      A: "Tạo ra cơ hội để các quốc gia giải quyết những vấn đề toàn cầu đã & đang xuất hiện ngày càng nhiều",
      B: "Là cơ hội để tiếp cận & sử dụng được các nguồn lực bên ngoài: tài chính, KHCN, trình độ quản lý tiên tiến.",
      C: "Mở cửa thị trường, thu hút vốn, thúc đẩy công nghiệp hóa, tăng tích lũy, tạo cơ hội việc làm mới, nâng cao thu nhập …",
      D: "Cả 3 đáp án A, B & C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 91,
    question: "\"Đầu tư quốc tế là hình thức di chuyển quốc gia về… từ quốc gia này đến quốc gia khác\":",
    options: {
      A: "Vốn",
      B: "Kỹ thuật",
      C: "Người lao động",
      D: "Hàng hóa"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 92,
    question: "\"Đẩy mạnh CNH, HĐH đất nước\" được coi là… để xây dựng thành công nền kinh tế độc lập, tự chủ đi đôi với tích cực & chủ động hội nhập kinh tế quốc tế?",
    options: {
      A: "Kết quả",
      B: "Biện pháp",
      C: "Nguyên nhân",
      D: "Bài học"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 93,
    question: "ODA có nghĩa là gì?",
    options: {
      A: "Khoản vốn hỗ trợ phát triển chính thức",
      B: "Đầu tư trực tiếp nước ngoài",
      C: "Đầu tư gián tiếp nước ngoài",
      D: "Xuất khẩu tư bản"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 94,
    question: "FDI có nghĩa là gì?",
    options: {
      A: "Đầu tư nước ngoài",
      B: "Vốn đầu tư trực tiếp nước ngoài",
      C: "Vốn đầu tư gián tiếp nước ngoài",
      D: "Xuất khẩu tư bản"
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 95,
    question: "Toàn cầu hóa diễn ra ở:",
    options: {
      A: "Mặt kinh tế",
      B: "Mặt chính trị",
      C: "Mặt văn hóa – xã hội",
      D: "Cả 3 đáp án A, B, C"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 96,
    question: "Nội dung hội nhập kinh tế quốc tế gồm:",
    options: {
      A: "Chuẩn bị các điều kiện để thực hiện hội nhập hiệu quả, thành công.",
      B: "Thực hiện đa dạng các hình thức và mức độ hội nhập kinh tế quốc tế.",
      C: "Tham gia các nền văn hóa tiến bộ trên toàn cầu",
      D: "Đáp án A và B đúng"
    },
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 97,
    question: "Ở phạm vi khoa học công nghệ, lợi ích của hội nhập quốc tế mang lại là:",
    options: {
      A: "Làm tăng khả năng thu hút KHCN hiện đại vào nền kinh tế",
      B: "Tăng cơ hội cho các doanh nghiệp thu hút được nguồn tín dụng đầu tư quốc tế",
      C: "Mở rộng cơ hội tìm kiếm việc",
      D: "Tiếp cận với văn hóa tiến bộ của thế giới"
    },
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 98,
    question: "Trong các tác động của hội nhập quốc tế, đâu là tác động tiêu cực xét về mặt kinh tế?",
    options: {
      A: "Sự \"xâm lăng\" lối sống của nước ngoài vào giới trẻ hiện nay",
      B: "Tạo ra một số thách thức đối với quyền lực nhà nước, những âm mưu diễn biến thù địch",
      C: "Các doanh nghiệp trong nước đối mặt với sự cạnh tranh khốc liệt với doanh nghiệp nước ngoài",
      D: "Bất bình đẳng xã hội gia tăng"
    },
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 99,
    question: "Hội nhập kinh tế quốc tế của Việt Nam nhằm mục tiêu:",
    options: {
      A: "Mở cửa giao lưu hợp tác văn hóa, chính trị, quốc phòng.",
      B: "Tham gia vào phân công lao động quốc tế, tận dụng nguồn lực để phát triển.",
      C: "Gia nhập các tổ chức kinh tế trong khu vực.",
      D: "Chỉ thu hút vốn mà không mở rộng thương mại."
    },
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 100,
    question: "Ảnh hưởng của hội nhập kinh tế quốc tế đối với chất lượng nguồn nhân lực như thế nào?",
    options: {
      A: "Người lao động có tay nghề cao hơn",
      B: "Các hoạt động giáo dục - đào tạo, nghiên cứu khoa học được đẩy mạnh hợp tác giữa các nước với nhau",
      C: "Cơ hội học hỏi công nghệ mới",
      D: "Đáp án A, B và C đúng"
    },
    correctAnswer: "D",
    explanation: ""
  }
];

/**
 * Quản lý lưu trữ và nạp câu hỏi
 */
const QuestionManager = {
  STORAGE_KEY: "ktct_custom_questions_v2",
  MISTAKES_KEY: "ktct_wrong_questions_v2",
  BOOKMARKS_KEY: "ktct_bookmarked_questions_v2",
  HISTORY_KEY: "ktct_exam_history_v2",

  /**
   * Lấy danh sách câu hỏi hiện tại (custom hoặc mặc định)
   */
  getAllQuestions() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Lỗi đọc câu hỏi từ localStorage:", e);
    }
    return DEFAULT_QUESTIONS;
  },

  /**
   * Lưu danh sách câu hỏi mới
   */
  saveQuestions(questions) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(questions));
      return true;
    } catch (e) {
      console.error("Lỗi lưu câu hỏi:", e);
      return false;
    }
  },

  /**
   * Khôi phục danh sách câu hỏi gốc
   */
  resetToDefault() {
    localStorage.removeItem(this.STORAGE_KEY);
    return DEFAULT_QUESTIONS;
  },

  /**
   * Lấy danh sách ID các câu làm sai
   */
  getWrongQuestionIds() {
    try {
      const stored = localStorage.getItem(this.MISTAKES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Thêm câu hỏi vào danh sách sai
   */
  addWrongQuestion(id) {
    const list = this.getWrongQuestionIds();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(this.MISTAKES_KEY, JSON.stringify(list));
    }
  },

  /**
   * Xóa câu hỏi khỏi danh sách sai (khi làm đúng lại)
   */
  removeWrongQuestion(id) {
    let list = this.getWrongQuestionIds();
    list = list.filter(item => item !== id);
    localStorage.setItem(this.MISTAKES_KEY, JSON.stringify(list));
  },

  /**
   * Xóa toàn bộ sổ tay câu sai
   */
  clearAllWrongQuestions() {
    localStorage.removeItem(this.MISTAKES_KEY);
  },

  /**
   * Lấy danh sách câu đã bookmark (đánh dấu sao)
   */
  getBookmarkedIds() {
    try {
      const stored = localStorage.getItem(this.BOOKMARKS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Bật/Tắt bookmark một câu hỏi
   */
  toggleBookmark(id) {
    let list = this.getBookmarkedIds();
    const index = list.indexOf(id);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify(list));
    return list.includes(id);
  },

  /**
   * Hàm thông minh phân tích văn bản thô (Word / Notepad / PDF) thành mảng câu hỏi
   */
  parseRawText(rawText) {
    if (!rawText || !rawText.trim()) return [];

    const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    const questions = [];
    let currentQ = null;
    let autoId = 1;

    const qStartRegex = /^(?:câu|cau|\b)\s*(\d+)[\.:\-\)\s]+(.+)/i;
    const optionRegex = /^([A-D])[\.:\)\-\]]\s*(.+)/i;
    const answerRegex = /^(?:đáp án|dap an|đa|da|key|ans|answer)[\s\.:\-_=]+([A-D])/i;
    const explainRegex = /^(?:giải thích|giai thich|gt|explain)[\s\.:\-_=]+(.+)/i;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      const ansMatch = line.match(answerRegex);
      if (ansMatch && currentQ) {
        currentQ.correctAnswer = ansMatch[1].toUpperCase();
        continue;
      }

      const expMatch = line.match(explainRegex);
      if (expMatch && currentQ) {
        currentQ.explanation = expMatch[1];
        continue;
      }

      const optMatch = line.match(optionRegex);
      if (optMatch && currentQ) {
        const letter = optMatch[1].toUpperCase();
        let optText = optMatch[2].trim();
        if (/\(?(?:đáp án đúng|dap an dung|đa đúng|da dung)\)?/i.test(optText)) {
          currentQ.correctAnswer = letter;
          optText = optText.replace(/\(?(?:đáp án đúng|dap an dung|đa đúng|da dung)\)?/gi, '').trim();
        }
        currentQ.options[letter] = optText;
        continue;
      }

      const qMatch = line.match(qStartRegex);
      if (qMatch) {
        if (currentQ && currentQ.options.A && currentQ.options.B) {
          questions.push(currentQ);
        }
        const qNum = parseInt(qMatch[1], 10) || autoId;
        currentQ = {
          id: qNum,
          question: qMatch[2].trim(),
          options: { A: "", B: "", C: "", D: "" },
          correctAnswer: "A",
          explanation: ""
        };
        autoId = qNum + 1;
        continue;
      }

      if (currentQ) {
        if (!currentQ.options.A) {
          currentQ.question += " " + line;
        }
      }
    }

    if (currentQ && currentQ.options.A && currentQ.options.B) {
      questions.push(currentQ);
    }

    return questions.map((q, idx) => ({
      ...q,
      id: q.id || (idx + 1),
      correctAnswer: q.correctAnswer || "A"
    }));
  }
};
