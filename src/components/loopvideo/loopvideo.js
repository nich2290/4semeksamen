import { EventBus, EventTypes } from "../../consts/const-event-types";
import Player from "@vimeo/player";

export default class LoopVideo {
  constructor(element) {
    this.el = element;

    this.init();
  }

  init() {
    this.videoID = this.el.dataset.videoid;

    const player = new Player("loopvideo-" + this.videoID, {
      id: this.videoID,
      loop: 1,
      transparent: 1,
      background: 1,
      muted: 1
    });

    player.on("play", function() {
      //console.log("played the video!");
    });
  }
}
