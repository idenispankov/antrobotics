class Navbar {
  constructor({ navbarClass, bannerClass, menuBtnClass }) {
    this._banner = document.querySelector(`.${bannerClass}`);
    this._menuBtn = document.querySelector(`.${menuBtnClass}`);
    this._burgerBefore = document
      .querySelector(`.${menuBtnClass}`)
      .querySelector(".menu-btn__burger-before");
    this._burgerPresent = document
      .querySelector(`.${menuBtnClass}`)
      .querySelector(".menu-btn__burger-present");
    this._burgerAfter = document
      .querySelector(`.${menuBtnClass}`)
      .querySelector(".menu-btn__burger-after");
    this._navbar = document.querySelector(`.${navbarClass}`);
    this._navLogo = this._navbar.querySelector(".navbar__logo");
    this._navSocial = this._navbar.querySelector(".navbar__social");
    this._navLinks = this._navbar.querySelectorAll(".navbar__list-link");
    this._navList = this._navbar.querySelector(".navbar__list");
  }

  _changeTheme = () => {
    const bannerHeight = this._banner.clientHeight;
    if (window.scrollY > bannerHeight - 50) {
      this._burgerBefore.classList.add("menu-btn__burger-before_theme_light");
      this._burgerPresent.classList.add("menu-btn__burger-present_theme_light");
      this._burgerAfter.classList.add("menu-btn__burger-after_theme_light");
      this._navbar.classList.add("navbar_theme_light");
      this._navLogo.classList.add("navbar__logo_theme_light");
      this._navSocial.classList.add("navbar__social_theme_light");
      this._navList.classList.add("navbar__list_theme_light");
      this._navLinks.forEach((item) =>
        item.classList.add("navbar__list-link_theme_light")
      );
    } else {
      this._burgerBefore.classList.remove(
        "menu-btn__burger-before_theme_light"
      );
      this._burgerPresent.classList.remove(
        "menu-btn__burger-present_theme_light"
      );
      this._burgerAfter.classList.remove("menu-btn__burger-after_theme_light");
      this._navbar.classList.remove("navbar_theme_light");
      this._navLogo.classList.remove("navbar__logo_theme_light");
      this._navSocial.classList.remove("navbar__social_theme_light");
      this._navList.classList.remove("navbar__list_theme_light");
      this._navLinks.forEach((item) =>
        item.classList.remove("navbar__list-link_theme_light")
      );
    }
  };

  _toggleMenuBtn = () => {
    if (this._menuBtn.classList.contains("open")) {
      this._menuBtn.classList.remove("open");
      this._navList.classList.remove("navbar__list_mode_open");
    } else {
      this._menuBtn.classList.add("open");
      this._navList.classList.add("navbar__list_mode_open");
    }
  };

  _setEventListeners = () => {
    window.addEventListener("scroll", this._changeTheme);
    this._menuBtn.addEventListener("click", this._toggleMenuBtn);
  };

  create = () => {
    this._setEventListeners();
  };
}

export default Navbar;
