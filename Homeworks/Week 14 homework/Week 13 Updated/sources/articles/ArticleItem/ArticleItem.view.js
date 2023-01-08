class ArticleItemView extends View {
  constructor() {
    super();
    this.body = document.querySelector("body");
    this.init();
  }

  init = async function () {
    //creates the model to get the template and other data items
    this.model = await new ArticleItemModel().init();
    //with the template html add it to <template> tag in dom
    this.templateElement = this.createTemplateElement(
      "article-item-template",
      this.model.templateContent
    );
  };

  //Method used by Article List to render its list items
  //sends article param with article data
  render = function (article) {
    //this.templateElement is the dom element <template>
    const clonedElement = this.templateElement.content.cloneNode(true);
    const element = clonedElement.firstElementChild;
    const { id, title, description } = article;
    console.log(`Rendering element with id "${article.id}"`);
    element.setAttribute("data-id", `article-${id}`);
    console.log(`Element:`, element);
    element.querySelector("h2").innerText = title;
    element.querySelector("p").innerText = description;
    element.querySelector("button").onclick = function () {
      console.log("buton clicked");
      this.deleteElement(article.id);
    }.bind(this);

    return element;
  };
}
