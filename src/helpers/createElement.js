function createElement(type, attributes = {}, innerHTML = "") {
  const element = document.createElement(type);

  for (const [attribute, value] of Object.entries(attributes)) {
    element.setAttribute(attribute, value);
  }

  element.innerHTML = innerHTML;

  return element;
}

export { createElement };
