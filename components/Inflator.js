class Inflator {
  constructor({ data, container, template, populateItem}) {
    this._data = data;
    this._container = document.querySelector(`.${container}`);
    this._template = document.querySelector(`#${template}`).content;
    this._populateItem = populateItem;
  }

  generateList() {
    this._data.map(item => {
      const htmlItem = this._template.cloneNode(true);
      this._populateItem(item, htmlItem);
      this._container.append(htmlItem);
    })
  }
}

export default Inflator;
