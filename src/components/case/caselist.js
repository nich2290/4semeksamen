import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class CaseList {
  constructor(element) {
    this.el = element;
    this.onClick = this.onClick.bind(this);
    this.init();
  }

  init() {
    this.showMore = this.el.querySelector("[data-more]");
    this.showMoreContainer = this.el.querySelector(".show-more");
    this.caseInner = this.el.querySelector(".case-container-inner");
    this.caseOuter = this.el.querySelector(".case-container");
    if (this.caseInner) {
      this.caselistNumber = this.caseInner.querySelectorAll(".case-list");

      this.caseListMargin =
        (window.innerWidth / 10) * this.caselistNumber.length;
    }

    if (this.showMore) {
      this.showMore.addEventListener("click", event => this.onClick(event));
    }
  }

  onClick(event) {
    event.preventDefault();

    let innerHeight = this.caseInner.offsetHeight + this.caseListMargin + "px";

    if (this.caseOuter.classList.contains("active")) {
      this.caseOuter.style.height = "0";
      this.showMoreContainer.classList.remove("active");
    } else {
      this.caseOuter.style.height = innerHeight;
      this.showMoreContainer.classList.add("active");
    }
  }
}
