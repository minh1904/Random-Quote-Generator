'use strict';
const btnReload = document.querySelector('.reload-button');

let allQuotes = [];
fetch('https://api.api-ninjas.com/v1/quotes') // Thay bằng URL của API bạn muốn gọi
  .then((response) => response.json()) // Chuyển đổi dữ liệu JSON trả về từ API
  .then((data) => {
    allQuotes = data; // Lưu dữ liệu từ API vào mảng allQuotes
  })
  .catch((error) => console.error('Error fetching data:', error));

btnReload.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  document.querySelector('.text').textContent = allQuotes[randomIndex];
});
