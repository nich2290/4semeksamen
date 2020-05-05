import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class Header {
  constructor(element) {
    this.el = element;
    this.onMenuClick = this.onMenuClick.bind(this);

    this.init();
  }

  init() {
    this.burger = this.el.querySelector(".burger-link");
    this.menu = this.el.querySelector(".menu");
    this.logo = this.el.querySelector(".logo");
    this.logoText = this.el.querySelector(".logotext");
    this.topElement = document.querySelector("body");
    this.htmlElement = document.querySelector("html");
    this.burger.addEventListener("click", event => this.onMenuClick(event));

    if (this.logoText) {
      let logoTextContent = this.logoText.innerHTML;
      logoTextContent = logoTextContent.replace("ø", "€");
      this.logoText.innerHTML = logoTextContent;
      this.logo.classList.add("active");
    }
  }

  onMenuClick(event) {
    event.preventDefault();
    if (this.topElement.classList.contains("active-menu")) {
      this.topElement.classList.remove("active-menu");
      this.topElement.classList.add("inactive-menu");
      this.htmlElement.classList.remove("no-scroll");
      this.menu.classList.remove("active");
      this.burger.classList.remove("is-active");
    } else {
      this.topElement.classList.add("active-menu");
      this.topElement.classList.remove("inactive-menu");
      this.htmlElement.classList.add("no-scroll");
      this.menu.classList.add("active");
      this.burger.classList.add("is-active");
    }
  }
}
