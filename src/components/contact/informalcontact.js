export default class InformalContact {
  constructor(element) {
    this.el = element;
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKey = this.onKey.bind(this);

    this.init();
  }

  init() {
    this.Name = this.el.querySelector("[data-inputname]");
    this.Email = this.el.querySelector("[data-inputemail]");

    this.submitButton = this.el.querySelector(".formal-submit");
    this.inputs = this.el.querySelectorAll(".informalInput");

    if (this.inputs) {
      this.inputs.forEach(input => {
        input.addEventListener("focus", event => this.onFocus(event, input));
        input.addEventListener("blur", event => this.onBlur(event, input));
        input.addEventListener("change", event => this.onKey(event));
      });
    }

    this.Name.addEventListener("keydown", event => this.onKey(event));
    this.Email.addEventListener("keydown", event => this.onKey(event));

    // if (this.containers) {
    //   this.containers.forEach(container => {
    //     container.addEventListener("click", event => {
    //       console.log(event.target);
    //       container.classList.add("is-focus");
    //     });
    //   });
    // }
  }

  onKey(event) {
    if (this.Name.value.length > 0 && this.Email.value.length > 0) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  onFocus(event, input) {
    input.closest(".formal-input").classList.add("is-focus");
  }

  onBlur(event, input) {
    if (!event.srcElement.value.length > 0) {
      input.closest(".formal-input").classList.remove("is-focus");
    }
  }
}
