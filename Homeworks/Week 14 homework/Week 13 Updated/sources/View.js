class View {
  constructor() {
    this.body = document.querySelector("body");
  }

  createTemplateElement = function (elementId, htmlContent) {
    const templateElement = document.querySelector(`#${elementId}`);
    if (templateElement) {
      return templateElement;
    }

    const templateEl = document.createElement("template");
    templateEl.setAttribute("id", elementId);
    templateEl.innerHTML = htmlContent;

    this.body.appendChild(templateEl);

    return templateEl;
  };

  deleteElement = function (elementId) {
    console.log(`Deleting element with id "${elementId}"`);
    const element = document.querySelector(`[data-id="article-${elementId}"]`);
    console.log(`Element:`, element);
    if (!element) {
      console.log("Element not found");
      return;
    }

    element.remove();
    console.log("Element deleted");
  };
}
