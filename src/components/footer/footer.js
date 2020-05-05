import * as basicScroll from "basicscroll";

export default class Footer {
  constructor(element) {
    this.el = element;
    this.init();
  }

  init() {
    this.footer = document.querySelector("footer");
    this.logoText = this.el.querySelector(".logotext");

    if (this.logoText) {
      let logoTextContent = this.logoText.innerHTML;
      logoTextContent = logoTextContent.replace("ø", "€");
      this.logoText.innerHTML = logoTextContent;
      this.logoText.classList.add("active");
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        //console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0) {
          const instanceFooter = basicScroll.create({
            elem: this.el,
            from: "top-bottom",
            to: "bottom-bottom",
            props: {
              "--opas": {
                from: 0.01,
                to: 0.99
              }
            }
          });

          instanceFooter.start();
        }
      });
    });

    this.observer.observe(this.footer);
  }
}
