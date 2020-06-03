export default class ToggleModule {
  constructor(element) {
    this.el = element;
    this.themebuttons = this.el.querySelectorAll("[data-themebutton]");
    this.themes = this.el.querySelectorAll("[data-theme]");
    this.themetoggler = this.themetoggler.bind(this);
    this.init();
  }

  init() {
    if (this.themebuttons.length > 0) {
      this.themebuttons.forEach(button => {
        button.addEventListener("click", event => {
          let themenumber = button.dataset.themebutton;
          this.themetoggler(themenumber);
        });
      });
    }
  }
  themetoggler(themenumber) {
    this.themebuttons.forEach(button => {
      if (button.dataset.themebutton == themenumber) {
        button.classList.add("active-button");
      } else {
        button.classList.remove("active-button");
      }
    });

    this.themes.forEach(theme => {
      if (theme.dataset.theme == themenumber) {
        theme.style.display = "block";

        setTimeout(function() {
          theme.classList.add("active-theme");
        }, 200);
      } else {
        theme.classList.remove("active-theme");

        setTimeout(function() {
          theme.style.display = "none";
        }, 300);
      }
    });
  }
}
