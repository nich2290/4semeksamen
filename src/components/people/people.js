import anime from "animejs";
import { width } from "window-size";

export default class People {
  constructor(element) {
    this.el = element;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
    this.init();
  }

  init() {
    let buffer = [];
    let lastKeyTime = Date.now();

    this.dataBubble = this.el.querySelector(".person-container");

    this.el.addEventListener("mouseenter", event =>
      this.onMouseEnter(event, this.el, this.dataBubble)
    );
    this.el.addEventListener("click", event =>
      this.onMouseEnter(event, this.elm, this.dataBubble)
    );
    this.el.addEventListener("mouseleave", event =>
      this.onMouseExit(event, this.el, this.dataBubble)
    );

    document.addEventListener("keydown", event => {
      const charList = "abcdefghijklmnopqrstuvwxyzæøå0123456789";
      const key = event.key.toLowerCase();

      if (charList.lastIndexOf(key) === -1) return;
      const currentTime = Date.now();

      if (currentTime - lastKeyTime > 1000) {
        buffer = [];
      }

      buffer.push(key.charCodeAt(0));
      lastKeyTime = currentTime;

      if (buffer.join("") === "111118115101101") {
        document.querySelector(".people").classList.add("spoof");
      }
    });
  }

  onMouseEnter(event, element, bubble) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let X = event.pageX - (rect.left + scrollLeft);
    let Y = event.pageY - (rect.top + scrollTop);
    let XWidth = 0;
    let YWidth = 0;

    bubble.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");

    if (X < 0) {
      XWidth = 20;
      YWidth = 0;
    }
    if (X > rect.width - 10) {
      XWidth = -20;
      YWidth = 0;
    }
    if (Y < 0) {
      XWidth = 0;
      YWidth = -20;
    }
    if (Y > rect.height - 10) {
      XWidth = 0;
      YWidth = 20;
    }

    var tl = anime.timeline({
      easing: "linear",
      duration: 200
    });

    // Add children
    tl.add({
      targets: bubble,
      translateY: YWidth,
      translateX: XWidth,
      scale: 10
    })
      .add({
        targets: bubble,
        scale: 50
      })
      .add({
        targets: bubble,
        scale: 100
      });
  }

  onMouseExit(event, element, bubble) {
    bubble.removeAttribute("style");
  }

  onMouseClick(event, element, bubble) {
    var bubbleinfo = element.querySelector(".person-info");
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let X = event.pageX - (rect.left + scrollLeft);
    let Y = event.pageY - (rect.top + scrollTop);
    let XWidth = 0;
    let YWidth = 0;

    console.log(
      "y: ",
      Y,
      "Height: ",
      rect.height,
      "X: ",
      X,
      "Width: ",
      rect.width
    );

    bubble.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");

    if (X < 0) {
      XWidth = 20;
      YWidth = 0;
    }
    if (X > rect.width - 10) {
      XWidth = -20;
      YWidth = 0;
    }
    if (Y < 0) {
      XWidth = 0;
      YWidth = -20;
    }
    if (Y > rect.height - 10) {
      XWidth = 0;
      YWidth = 20;
    }

    var tl = anime.timeline({
      easing: "linear",
      duration: 250
    });

    // Add children
    tl.add({
      targets: bubble,
      translateY: YWidth,
      translateX: XWidth,
      opacity: 0.2,
      scale: 10
    })
      .add({
        targets: bubble,
        opacity: 0.5,
        scale: 50
      })
      .add({
        targets: bubble,
        opacity: 0.99,
        scale: 100
      })
      .add({
        target: bubbleinfo,
        opacity: 0.99
      });
  }
}
