import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class Hero {
  constructor(element) {
    this.el = element;
    this.onClick = this.onClick.bind(this);
    this.init();
  }

  init() {
    this.element = this.el;
    this.more = this.el.querySelector(".hero-more");

    if (this.more) {
      this.more.addEventListener("click", event => this.onClick(event));
    }

    const myImg = document.querySelector(".hero");

    const title = document.querySelector(".hero-cta");
    const speed = 0.1;
    title.style.transform =
      "translateY( calc( var(--scrollparallax) * -1px ) )";

    window.addEventListener("scroll", function() {
      title.style.setProperty(
        "--scrollparallax",
        (document.body.scrollTop || document.documentElement.scrollTop) * speed
      );
    });
  }

  onClick(event) {
    event.preventDefault();
    if (document.documentElement.scrollTo) {
      document.documentElement.scrollTo({
        top: this.el.offsetHeight,

        behavior: "smooth"
      });
    }
  }
}
