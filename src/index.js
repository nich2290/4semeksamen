/*
 * For ES6+ features:
 * Either import '@babel/polyfill' here, or
 * use https://cdn.polyfill.io/v2/polyfill.min.js (default for this project)
 */

import "./index.css";
import { EventBus, EventTypes } from "./consts/const-event-types";

/*
To add new components, import them here and add them to the 'components'-array below.
Add an appropriate selectorName for use in DOM (fx: <div data-component="header"></div>):
*/
import App from "./components/app/app";
import Header from "./components/header/header";
import ExampleComponent from "./components/example-component/example-component";
import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import Module from "./components/module/module";
import ModuleImage from "./components/module/moduleimage";
import LoopVideo from "./components/loopvideo/loopvideo";
import BodyMovin from "./components/bodymovin/bodymovin";
import Video from "./components/video/video";
import CaseList from "./components/case/caselist";
import Primary from "./components/primary/primary";
import Parallax from "./components/parallax/parallax";
import Footer from "./components/footer/footer";
import People from "./components/people/people";
import ContactForm from "./components/contact/contact";
import InformalContact from "./components/contact/informalcontact";
import FormalContact from "./components/contact/formalcontact";
import CreateTicket from "./components/create-ticket/create-ticket";
import AiCarousel from "./components/ai/ai-carousel1";
import AiTypes from "./components/ai/ai-types-carousel";
import ToggleModule from "./components/ai/ai-toggle";
import BodyMovin2 from "./components/bodymovin/bodymovin2";
import BodyMovin3 from "./components/bodymovin/bodymovin3";

const components = [
  { Class: App, selectorName: "app" },
  { Class: Header, selectorName: "header" },
  { Class: ExampleComponent, selectorName: "example-component" },
  { Class: Hero, selectorName: "hero" },
  { Class: Section, selectorName: "section" },
  { Class: Module, selectorName: "module" },
  { Class: ModuleImage, selectorName: "moduleimage" },
  { Class: LoopVideo, selectorName: "loopvideo" },
  { Class: BodyMovin, selectorName: "bodymovin" },
  { Class: Video, selectorName: "video" },
  { Class: CaseList, selectorName: "caselist" },
  { Class: Primary, selectorName: "primary" },
  { Class: Parallax, selectorName: "parallax" },
  { Class: Footer, selectorName: "footer" },
  { Class: People, selectorName: "people" },
  { Class: ContactForm, selectorName: "contactform" },
  { Class: InformalContact, selectorName: "informalContact" },
  { Class: FormalContact, selectorName: "formalContact" },
  { Class: CreateTicket, selectorName: "create-ticket" },
  { Class: AiCarousel, selectorName: "ai-carousel" },
  { Class: AiTypes, selectorName: "ai-types" },
  { Class: ToggleModule, selectorName: "ai-toggle" },
  { Class: BodyMovin2, selectorName: "bodymovin2" },
  { Class: BodyMovin3, selectorName: "bodymovin3" }
];

/*
 * ComponentInstantiator traverses the DOM-tree and looks for [data-component='] attributes.
 */
class ComponentInstantiator {
  constructor() {
    this.createComponents();
    this.dispatchReady();
    return this;
  }

  createComponents() {
    this.componentsInstantiated = {};

    components.map(component => {
      const nodes = [];
      // select all DOM-nodes with the data-component attribute:
      const nodeItems = [
        ...document.querySelectorAll(
          "[data-component='" + component.selectorName + "']"
        )
      ];

      nodeItems.map(nodeItem => {
        // instantiate component with nodeItem as param:
        nodes.push(new component.Class(nodeItem));
      });

      // add to componentsList object:
      if (nodes.length)
        this.componentsInstantiated[component.selectorName] = nodes;
    });
  }

  dispatchReady() {
    const event = new CustomEvent(EventTypes.ALL_COMPONENTS_READY);
    EventBus.dispatchEvent(event);
  }

  getComponents(selectorName) {
    return selectorName
      ? this.componentsInstantiated[selectorName]
      : this.componentsInstantiated;
  }
}

/* Make your App accessible via window.App */
window.App = new ComponentInstantiator();

/* Access components list */
//console.log("components on this page", window.App.getComponents());
