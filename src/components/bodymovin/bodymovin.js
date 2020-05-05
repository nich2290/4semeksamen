import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class BodyMovin {
  constructor(element) {
    this.el = element;

    this.init();
  }

  init() {
    this.bodymovin = this.el;
    this.bodyPath = this.el.dataset.json;

    lottie.loadAnimation({
      container: this.bodymovin, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: this.bodyPath // the path to the animation json
    });
  }
}
