import users from "../../json/mockdata-users.json";
import { EventBus, EventTypes } from "../../consts/const-event-types";

/*
Use App.js for global functionality
*/

export default class App {
  constructor(element) {
    // save a reference of your component-element so you can access it from your methods:
    this.el = element;

    // bind your methods to 'this' when calling them from event-listeners:
    this.onAppReady = this.onAppReady.bind(this);

    this.init();
  }

  init() {
    // Use init-method to store DOM-references and setup initial event-listeners:
    if (this.el)
      this.someElement = this.el.querySelector("[data-example-js-selector]");

    // You could listen for all components to be instantiated to make sure events between components are captured:
    EventBus.addEventListener(EventTypes.ALL_COMPONENTS_READY, this.onAppReady);
  }

  onAppReady(event) {
    //console.log(event.type);

    // create your own event-types for component-to-component communication (fx. this event will be picked up by Header.js component):
    const eventData = { detail: new Date().toJSON() };
    const ev = new CustomEvent(EventTypes.MY_CUSTOM_EVENT, eventData);
    EventBus.dispatchEvent(ev);

    // this.exampleES6Features()
    // this.exampleRenderSomeContent()
  }
}
