import { EventBus, EventTypes } from "../../consts/const-event-types";
import Player from "@vimeo/player";

export default class Video {
  constructor(element) {
    this.el = element;
    this.onClick = this.onClick.bind(this);
    this.loadVideo = this.loadVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.observeOnScroll = this.observeOnScroll.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.init();
  }

  init() {
    this.videoID = this.el.dataset.videoid;
    this.videoContainer = this.el.querySelector(".video");
    this.playvideo = this.el.querySelector(".video-play");
    this.body = document.querySelector("body");
    this.html = document.querySelector("html");
    this.player = "";
    this.loadVideo(this.el);

    this.playvideo.addEventListener("click", event =>
      this.onClick(event, this.el)
    );

    this.observeOnScroll();
  }

  loadVideo(video) {
    var videoContainer = "video-" + this.videoID;
    var options = {
      id: this.videoID,
      loop: 0,
      transparent: 1,
      background: 0,
      muted: 0
    };

    this.player = new Player(videoContainer, options);
  }

  onClick(e, video) {
    this.el.classList.add("active-video");
    this.playVideo();
  }

  playVideo() {
    this.player.setVolume(1);
    this.player.play();
  }

  pauseVideo() {
    this.player.pause();
  }

  observeOnScroll() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio < 0.5) {
            this.pauseVideo();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    observer.observe(this.videoContainer);
  }
}
