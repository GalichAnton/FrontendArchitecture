export default class Card {
  element = {};
  subElements = {};

  constructor({id = 0, title = '', description = ''} = {}) {
    this.state = {
      id,
      title,
      description
    };

    this.render();
    this.getSubElements();
  }

  get template () {
    return `<div data-id="${this.id}" >
      <h1 data-element="title">${this.state.title}</h1>
      <div data-element="description">${this.state.description}</div>
    </div>`;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
  }

  update(props = {}) {
    this.updateState(props);
  }

  updateState(data) {
    for (const [key, value] of Object.entries(data)) {
      this.state[key] = value;
    }

    for (const [key, value] of Object.entries(this.state)) {
      this.subElements[key].innerHTML = value;
    }
  }

  getSubElements() {
    const elements = this.element.querySelectorAll('[data-element]');
    this.subElements = [...elements].reduce((acc, subElement) => {
      acc[subElement.dataset.element] = subElement;
      return acc;
    }, {});
  }
}
