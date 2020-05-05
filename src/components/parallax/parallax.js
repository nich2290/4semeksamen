import * as basicScroll from "basicscroll";

export default class Parallax {
  constructor(element) {
    this.el = element;
    this.init();
  }

  init() {
    const instance = basicScroll.create({
      elem: this.el,
      from: "top-top",
      to: "bottom-top",
      props: {
        "--tx": {
          from: 0.99,
          to: 0.01
        }
      }
    });

    instance.start();
  }
}
