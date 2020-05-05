import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class ModuleImage {
  constructor(element) {
    this.el = element;
    this.zoomObject = this.zoomObject.bind(this);
    this.init();
  }

  init() {
    this.zoomObject(this.el);

    this.image = this.el.querySelector("[data-url]");
    if (this.image) {
      this.Url = this.image.dataset.url;
      this.SrcSet = this.image.dataset.srcset;
      var options = {
        rootMargin: "0px",
        threshold: [0, 0.3, 0.5, 1]
      };
      this.observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio >= 0.3) {
          this.image.src = this.Url;
          if (this.image.dataset.srcset) {
            this.image.srcset = this.SrcSet;
          }
        }
      }, options);

      this.observer.observe(this.el);
    }
  }

  zoomObject(element) {
    var options = {
      rootMargin: "0px",
      threshold: [0, 0.75, 0.8, 1]
    };
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio >= this.threshold()) {
        element.classList.remove("zoom");
      }
      if (entries[0].intersectionRatio == 0) {
        element.classList.add("zoom");
      }
    }, options);

    this.observer.observe(this.el);
  }

  threshold() {
    return 0.5;
  }

  zoomThreshold() {
    return 0.8;
  }
}
