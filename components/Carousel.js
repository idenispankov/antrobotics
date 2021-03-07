class Carousel {
  constructor({ data, btnBackClass, btnForwardClass, populateItem }) {
    this._counter = 0;
    this._data = data;
    this._btnBack = document.querySelector(`.${btnBackClass}`);
    this._btnForward = document.querySelector(`.${btnForwardClass}`);
    this._populateItem = populateItem;
  }

  _setSlide(n) {
    this._counter += n;
    this._counter === 0
      ? (this._btnBack.disabled = true)
      : (this._btnBack.disabled = false);

    this._counter === this._data.length - 1
      ? (this._btnForward.disabled = true)
      : (this._btnForward.disabled = false);

    this._populateItem(this._data[this._counter]);
  }

  _setEventListeners() {
    this._btnBack.addEventListener("click", () => {
      this._setSlide(-1);
    });
    this._btnForward.addEventListener("click", () => {
      this._setSlide(1);
    });
  }

  generateCarousel() {
    this._setSlide(0);
    this._setEventListeners();
  }
}

export default Carousel;
