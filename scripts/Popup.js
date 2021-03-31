class Popup {
  constructor({ popupClass, popupOpenClass, closeBtnClass, openBtn, navBar }) {
    this._popup = document.querySelector(`.${popupClass}`);
    this._popupOpenClass = popupOpenClass;
    this._closeBtnClass = closeBtnClass;
    this._openBtn = document.querySelector(`.${openBtn}`);
    this._navBar = navBar;
  }

  _openPopup() {
    this._popup.classList.add(this._popupOpenClass);
    this._navBar.visible = "false";
  }

  _closePopup(e) {
    if (
      e.target.classList.contains(this._closeBtnClass) ||
      e.target.classList.contains(this._popupClass)
    ) {
      this._popup.classList.remove(this._popupOpenClass);
      this._navBar.visible = "true";
    }
  }

  _closePopupEsc(e) {
    if (e.key === "Escape") {
      this._popup.classList.remove(this._popupOpenClass);
      this._navBar.visible = "true";
    }
  }

  _setEventListeners() {
    this._openBtn.addEventListener("click", this._openPopup);
    document.addEventListener("click", this._closePopup);
    document.addEventListener("keyup", this._closePopupEsc);
  }

  create() {
    this._setEventListeners();
  }
}

export default Popup;
