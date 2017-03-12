import { Component, OnInit } from '@angular/core';
import { VideoItemInterface } from '../models/video-item.interface';
import { PlayerService, VideoQueueService } from '../shared/services/';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
  public video: VideoItemInterface;
  public minimized = false;
  private ready = false;

  /**
   * Constructor of the class.
   *
   * @param {PlayerService}     playerService
   * @param {VideoQueueService} videoQueue
   */
  public constructor(
    public playerService: PlayerService,
    private videoQueue: VideoQueueService
  ) { }

  /**
   * On component init we need to do following:
   *  1) subscribe to 'VideoQueueService.activeVideo$' observable
   *    - This will load active video to YouTube player IF player is ready
   *  2) subscribe to 'PlayerService.ready$' observable
   *    - This will set ready bit to true when YouTube player is ready to rock'n'roll
   *    - If player is ready and there is active video it will tell player to load it
   *
   * store current user and make a subscription for token changes so that we
   * get user value to update within login / logout states.
   */
  public ngOnInit(): void {
    this.videoQueue.video$.subscribe(video => {
      this.video = video;

      if (this.ready) {
        this.playerService.getPlayer().loadVideoById(this.video.id.videoId);
      }
    });

    this.playerService.ready$.subscribe(ready => {
      this.ready = ready;

      if (ready && this.video) {
        this.playerService.getPlayer().loadVideoById(this.video.id.videoId);
      }
    });

    this.playerService.minimized$.subscribe(minimized => {
      this.minimized = minimized;
    });
  }

  public minimizePlayer(): void {
    this.playerService.changeMinimizeState(true);
  }

  public maximizePlayer(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.minimized) {
      this.playerService.changeMinimizeState(false);
    }
  }
}
