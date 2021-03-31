class Popup {
  constructor({
    popupClass,
    popupOpenClass,
    closeBtnClass,
    openBtn,
    navBarClass,
  }) {
    this._popup = document.querySelector(`.${popupClass}`);
    this._popupClass = popupClass;
    this._popupOpenClass = popupOpenClass;
    this._closeBtnClass = closeBtnClass;
    this._openBtn = document.querySelector(`.${openBtn}`);
    this._navBar = document.querySelector(`.${navBarClass}`);
  }

  _openPopup = () => {
    this._popup.classList.add(this._popupOpenClass);
    this._navBar.style.display = "none";
  };

  _closePopup = (e) => {
    if (
      e.target.classList.contains(this._closeBtnClass) ||
      e.target.classList.contains(this._popupClass)
    ) {
      console.log(e.target);
      this._popup.classList.remove(this._popupOpenClass);
      this._navBar.style.display = "flex";
    }
  };

  _closePopupEsc = (e) => {
    if (e.key === "Escape") {
      this._popup.classList.remove(this._popupOpenClass);
      this._navBar.style.display = "flex";
    }
  };

  _setEventListeners = () => {
    this._openBtn.addEventListener("click", this._openPopup);
    document.addEventListener("click", this._closePopup);
    document.addEventListener("keyup", this._closePopupEsc);
  };

  create = () => {
    this._setEventListeners();
  };
}

export default Popup;
