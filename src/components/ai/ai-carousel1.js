export default class AiCarousel {
  constructor(element) {
    this.el = element;
    this.slides = this.el.querySelector(".glide__slides");
    this.init();
  }

  init() {
    console.log("glide init");
    const carousels = document.querySelectorAll(".carousels");

    Object.values(carousels).map(carousel => {
      const slider = new Glide(carousel, {
        startAt: 0
      });
      slider.mount();
    });
  }
}
