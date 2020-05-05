import { getUrlParameter } from "../../services/service-utils";

export default class CreateTicket {
  constructor(element) {
    this.el = element;
    this.urlParams = new URLSearchParams(window.location.search);
    this.ticketForm = this.el.querySelector(".ticket-form");
    this.ticketReciept = this.el.querySelector(".ticket-reciept");
    this.titleField = this.el.querySelector("#title");
    this.descriptionField = this.el.querySelector("#description");
    this.urlField = this.el.querySelector("#url");
    this.isBug = this.el.querySelector("#bug");
    this.token = this.ticketForm.dataset.token;
    this.button = this.el.querySelector("button");
    this.postComment = this.postComment.bind(this);
    this.init();
  }

  init() {
    this.button.addEventListener("click", event => {
      this.postComment();
    });
    console.log("this.ticketForm.dataset.token: ", this.ticketForm);
  }

  postComment() {
    let projectid =
      getUrlParameter("projectid").length > 0
        ? Number.parseInt(getUrlParameter("projectid"))
        : 91095;

    let body = {
      title: this.titleField.value,
      description:
        this.descriptionField.value +
        "<br/> <strong>Link:</strong> " +
        this.urlField.value,
      project_id: projectid,
      bug: this.isBug.checked
    };

    console.log("body: ", body);

    fetch("https://stromlin-api.test.headnet.dk/v1/forecast/cards/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdHJvbWxpbiIsImlhdCI6MTU3OTc5MTE2NiwiZXhwIjoxNjExMzI3Njg5LCJhdWQiOiJ1cm46Zm9vIiwic3ViIjoiZGRAYWQuZGsiLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.3ekT2RoZ6xR_Jb8m7pKiFUN70Zf1GeG-tfJi4MZxhMA"
      },
      body: JSON.stringify(body)
    })
      .then(result => {
        if (!result.ok) {
          throw result;
        }
        console.log("result: ", result);
        this.ticketForm.style.display = "none";
        this.ticketReciept.classList.add("active");
      })
      .catch(error => {});
  }
}
