import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class Primary {
  constructor(element) {
    this.el = element;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onClick = this.onMouseEnter.bind(this);
    this.init();
  }

  init() {
    this.el.addEventListener("mouseenter", event =>
      this.onMouseEnter(event, this.el)
    );
    this.el.addEventListener("click", event =>
      this.onMouseEnter(event, this.el)
    );
  }

  onMouseEnter(event, element) {
    var rect = element.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //console.log("enter", e.pageX, this.offsetLeft);
    let X = event.pageX - (rect.left + scrollLeft);
    let Y = event.pageY - (rect.top + scrollTop);
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add("ripple");
    rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
    let customColor = element.getAttribute("ripple-color");
    if (customColor) rippleDiv.style.background = customColor;
    element.appendChild(rippleDiv);
    setTimeout(function() {
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  }
}
