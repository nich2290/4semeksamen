import { EventBus, EventTypes } from "../../consts/const-event-types";

export default class BodyMovin2 {
  constructor(element) {
    this.el = element;

    this.init();
  }

  init() {
    var anim;
    this.anim1 = this.el.querySelector(".image-container1");
    this.jsonElement = this.el.querySelector(".image-container1");
    this.bodyPath = this.jsonElement.dataset.json;

    var animation = {
      container: this.anim1,
      renderer: "svg",
      loop: false,
      autoplay: false /*MAKE SURE THIS IS FALSE*/,
      rendererSettings: {
        progressiveLoad: false,
        viewBoxOnly: true
      },
      path: this.bodyPath,
      name: "myAnimation"
    };
    anim = lottie.loadAnimation(animation);

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
          $(".image-container1").css("opacity", 0); // for making animation invisible after scrolling past 30% of original vh
        }
      },
      offset: "-70%"
    });

    // SCROLLING UP
    var waypoint = new Waypoint({
      element: this.anim1,
      handler: function(direction) {
        if (direction === "up") {
          $(".image-container1").css("opacity", 1); // fpr making animation visible again triggered at 5% of vh from the top
          anim.goToAndPlay(1, true);
        }
      },
      offset: "-50%"
    });
  }
}
