import { Component, OnInit, Input } from '@angular/core';

import { VideoItemInterface } from '../../models/video-item.interface';
import { VideoQueueService } from '../../shared/services/';

@Component({
  selector: 'app-video-queue-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent implements OnInit {
  @Input() video: VideoItemInterface;

  private activeVideo: VideoItemInterface;

  /**
   * Constructor of the class
   *
   * @param {VideoQueueService} videoQueueService
   */
  public constructor(private videoQueueService: VideoQueueService) { }

  // On init we subscribe for active video
  public ngOnInit() {
    this.videoQueueService.activeVideo$.subscribe(video => {
      this.activeVideo = video;
    });
  }

  // Method to determine if current video is active or not
  public isActive() {
    return this.video === this.activeVideo;
  }

  // Method to set current video active.
  public activateVideo() {
    this.videoQueueService.changeActiveVideo(this.video);
  }
}
