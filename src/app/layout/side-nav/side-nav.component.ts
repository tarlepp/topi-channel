import { Component, OnInit } from '@angular/core';

import { VideoQueueService } from '../../shared/services/';
import { VideoItemInterface } from '../../models/video-item.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})

export class SideNavComponent implements OnInit {
  public video: VideoItemInterface;
  private player: YT.Player;
  private ytEvent: YT.PlayerState;

  /**
   * Constructor of the class.
   *
   * @param {VideoQueueService} videoQueue
   */
  constructor(private videoQueue: VideoQueueService) { }

  /**
   * On component init we need to store current user and make a subscription for token changes so that we
   * get user value to update within login / logout states.
   */
  public ngOnInit(): void {
    this.videoQueue.activeVideo$.subscribe(video => {
      this.video = video;

      if (this.player) {
        this.player.loadVideoById(video.id.videoId);
      }
    });
  }

  savePlayer(player: YT.Player) {
    this.player = player;

    this.playVideo();
  }

  /**
   * Possible values are:
   * -1 – unstarted
   *  0 – ended
   *  1 – playing
   *  2 – paused
   *  3 – buffering
   *  5 – video cued
   *
   * @param event
   */
  onStateChange(event) {
    this.ytEvent = event.data;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
