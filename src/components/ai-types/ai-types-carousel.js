export default class AiTypes {
  constructor(element) {
    this.el = element;
    this.slides = this.el.querySelector(".glide__slides");
    this.init();
  }

  init() {
    console.log("glide types init");
    var glide = new Glide(".glide", {
      gap: 0
    });
    glide.mount();
  }
}