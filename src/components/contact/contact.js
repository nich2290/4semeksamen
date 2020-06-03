import anime from "animejs";
import { isDesktop, isMobile } from "../../services/service-utils";

export default class ContactForm {
  constructor(element) {
    this.el = element;
    this.onLinkClick = this.onLinkClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.postAjax = this.postAjax.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.init();
  }

  init() {
    this.formSelector = this.el.querySelector(".form-selector");
    this.formLinks = this.el.querySelectorAll(".formlink");
    this.formalLink = this.el.querySelector(".formlink-formal");
    this.informalLink = this.el.querySelector(".formlink-informal");
    this.forms = this.el.querySelectorAll(".form-container");
    this.formalFormContainer = this.el.querySelector(".form-formal");
    this.informalFormContainer = this.el.querySelector(".form-informal");
    this.formalForm = this.el.querySelector("#formal_contactform");
    this.informalForm = this.el.querySelector("#informal_contactform");
    this.formalButton = this.el.querySelector("#formalformbutton");
    this.informalButton = this.el.querySelector("#informalformbutton");
    this.informalReply = this.el.querySelector(
      "#informal_contactform_reciepttext"
    );
    this.formalReply = this.el.querySelector("#formal_contactform_reciepttext");

    this.setHeight();

    window.addEventListener("resize", this.setHeight);

    this.formalButton.addEventListener("click", event =>
      this.onSubmit(event, this.formalForm)
    );
    this.informalButton.addEventListener("click", event =>
      this.onSubmit(event, this.informalForm)
    );

    if (this.formLinks) {
      this.formLinks.forEach(link => {
        link.addEventListener("click", event => this.onLinkClick(event, link));
      });
    }
  }

  setHeight() {
    this.spacing = isDesktop() ? 130 : 48;
    this.formSpacing = isDesktop() ? 104 : 8;
    this.formalSpacing = isDesktop() ? 104 : 12;

    this.formalHeight = this.formalForm.offsetHeight;
    this.informalHeight = this.informalForm.offsetHeight;
    this.maxheight =
      this.formalHeight + this.formSpacing > this.informalHeight
        ? this.formalHeight + this.formSpacing
        : this.informalHeight;

    this.el.style.setProperty("height", this.maxheight + this.spacing + "px");

    //this.el.style.height = this.maxheight + "px";
    if (this.informalLink.classList.contains("is-active")) {
      this.informalFormContainer.style.height =
        this.informalHeight + 100 + "px";
    }
    if (this.formalLink.classList.contains("is-active")) {
      this.formalFormContainer.style.height =
        this.formalHeight + this.formalSpacing + 100 + "px";
    }
  }

  onLinkClick(event, link) {
    event.preventDefault();
    if (!link.classList.contains("is-active")) {
      this.formLinks.forEach(links => {
        links.classList.remove("is-active");
      });
      link.classList.add("is-active");
      this.forms.forEach(form => {
        form.classList.remove("is-active");
      });
      let formtype = link.dataset.form;

      var fl = anime.timeline({
        easing: "linear",
        duration: 200
      });

      if (formtype === "formal") {
        fl.add({
          targets: this.informalFormContainer,
          height: 0
        }).add({
          targets: this.formalFormContainer,
          height: this.formalHeight + this.formalSpacing + 100
        });
      } else {
        fl.add({
          targets: this.formalFormContainer,
          height: 0
        }).add({
          targets: this.informalFormContainer,
          height: this.informalHeight + 200
        });
      }
    }
  }

  onSubmit(event, form) {
    event.preventDefault();
    //console.log("submit");
    var data = {
      name: form.querySelector("#formalname").value,
      email: form.querySelector("#formalemail").value,
      role: form.querySelector("#formalrole").value,
      topic: form.querySelector("#formaltopic").value,
      toemail: form.querySelector("#formalinmail").value,
      subject: form.querySelector("#formalemailsubject").value,
      contact: form.querySelector("#formtype").value
    };

    $.ajax({
      type: "POST",
      data: data,
      url: "/umbraco/api/formapi/ContactFormSubmit",
      success: function(response) {},
      error: function(response) {}
    });

    //this.postAjax(postUrl, data, function(data) {
    //console.log(data);
    //});

    this.informalForm.classList.add("posted");
    this.formalForm.classList.add("posted");
    this.informalReply.classList.add("posted");
    this.formalReply.classList.add("posted");
    this.formSelector.classList.add("posted");
  }

  postAjax(url, data, success) {
    var params =
      typeof data == "string"
        ? data
        : Object.keys(data)
            .map(function(k) {
              return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            })
            .join("&");

    //var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3 && xhr.status == 200) {
        success(xhr.responseText);
      }
    };
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
    return xhr;
  }
}
