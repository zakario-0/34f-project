let btn = document.querySelector(".mobile-btn");

const toggleBurger = (menuCLass, showCLass) => {
  let menu = document.querySelector(`.${menuCLass}`);

  if (menu.className.includes(showCLass)) {
    menu.className = menuCLass;
  } else {
    menu.className += ` ${showCLass}`;
  }
};

btn.addEventListener('click', () => {
  toggleBurger("header-nav", "header-nav-active");
});
