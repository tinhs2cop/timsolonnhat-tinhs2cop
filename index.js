// index.js

const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm nhập vào nhiều số và tìm số lớn nhất
function findMaxNumber() {
  const numbers = [];

  function inputNumber() {
    rl.question('Nhập một số (nhập "done" để kết thúc): ', (input) => {
      if (input.toLowerCase() === 'done') {
        // Nếu người dùng nhập "done", tìm số lớn nhất và hiển thị kết quả
        const maxNumber = Math.max(...numbers);
        console.log(`Số lớn nhất là: ${maxNumber}`);
        rl.close();
      } else {
        const number = parseFloat(input);

        // Kiểm tra xem đầu vào có phải là số hợp lệ hay không
        if (!isNaN(number)) {
          numbers.push(number);
          inputNumber();
        } else {
          console.log('Vui lòng nhập một số hợp lệ.');
          // Nếu đầu vào không hợp lệ, yêu cầu nhập lại số đó
          inputNumber();
        }
      }
    });
  }

  // Bắt đầu nhập số
  inputNumber();
}

// Bắt đầu chương trình
findMaxNumber();
