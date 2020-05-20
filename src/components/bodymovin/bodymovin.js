import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class BodyMovin {
  constructor(element) {
    this.el = element;

    this.init();
  }

  init() {
    var anim;
    this.anim1 = this.el.querySelector(".image-container");
    this.jsonElement = this.el.querySelector(".image-container");
    this.bodyPath = this.jsonElement.dataset.json;

    var animation = {
      container: this.anim1,
      renderer: "svg",
      loop: false,
      autoplay: false /*MAKE SURE THIS IS FALSE*/,
      rendererSettings: {
        progressiveLoad: false
      },
      path: this.bodyPath,
      name: "myAnimation"
    };
    anim = lottie.loadAnimation(animation);
    console.log(animation);

    // SCROLLING DOWN
    var waypoint = new Waypoint({
      element: this.anim1,
      handler: function(direction) {
        if (direction === "down") {
          anim.goToAndPlay(1, true);
        }
      },
      offset: "70%"
    });

    // SCROLLING DOWN
    var waypoint = new Waypoint({
      element: this.anim1,
      handler: function(direction) {
        if (direction === "down") {
          $(".image-container").css("opacity", 0);
        }
      },
      offset: "-70%"
    });

    // SCROLLING UP
    var waypoint = new Waypoint({
      element: this.anim1,
      handler: function(direction) {
        if (direction === "up") {
          $(".image-container").css("opacity", 1);
          anim.goToAndPlay(1, true);
        }
      },
      offset: "-50%"
    });
  }
}
