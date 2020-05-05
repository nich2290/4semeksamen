export default class FormalContact {
  constructor(element) {
    this.el = element;
    // this.onFocus = this.onFocus.bind(this);
    // this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKey = this.onKey.bind(this);
    this.init();
  }

  init() {
    this.Name = this.el.querySelector("[data-inputname]");
    this.Email = this.el.querySelector("[data-inputemail]");
    this.Role = this.el.querySelector("[data-inputrole]");
    this.Topic = this.el.querySelector("[data-inputtopic]");
    this.submitButton = this.el.querySelector(".informal-submit");
    //this.inputs = this.el.querySelectorAll(".informalInput");

    this.Name.addEventListener("keydown", event => this.onKey(event));
    this.Email.addEventListener("keydown", event => this.onKey(event));

    this.Name.addEventListener("change", event => this.onChange(event));
    this.Email.addEventListener("change", event => this.onChange(event));
  }

  onKey(event) {
    if (this.Name.value.length > 0 && this.Email.value.length > 0) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  onChange(event) {
    if (this.Name.value.length > 0 && this.Email.value.length > 0) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  /*
  onFocus(event, input) {
    input.closest(".formal-input").classList.add("is-focus");
  }

  onBlur(event, input) {
    if (!event.srcElement.value.length > 0) {
      input.closest(".formal-input").classList.remove("is-focus");
    }
  }
  */
}
