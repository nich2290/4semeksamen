import { EventBus, EventTypes } from "../../consts/const-event-types";
import * as basicScroll from "basicscroll";

export default class Module {
  constructor(element) {
    this.el = element;

    this.init();
  }

  init() {
    this.content = this.el.querySelector(".module-content");

    const sections = document.querySelectorAll(".module");

    const config = {
      threshold: [0, 0.1, 0.25, 1]
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (
          entry.intersectionRatio > 0.25 ||
          entry.boundingClientRect.height >= window.innerHeight
        ) {
          entry.target.classList.add("module-inview");
          if (this.content) {
            const instance = basicScroll.create({
              elem: this.content,
              from: "middle-bottom",
              to: "middle-middle",
              timing: "linear",
              inside: (instance, percentage, props) => {},

              direct: true,
              props: {
                "--mx": {
                  from: "-20px",
                  to: "0px"
                }
              }
            });

            instance.start();
          }
        } else {
          entry.target.classList.remove("module-inview");
        }
      });
    }, config);

    sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
