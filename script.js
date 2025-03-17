// Lấy các phần tử cần thiết
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenuMobile = document.querySelector('.nav-menu-mobile');

// Thêm sự kiện click vào hamburger icon
hamburgerIcon.addEventListener('click', () => {
  // Toggle hiển thị menu di động
  navMenuMobile.classList.toggle('show');
});
