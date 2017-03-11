import { Component, Input, OnInit } from '@angular/core';

import { VideoItemInterface } from '../../../models/video-item.interface';
import { VideoQueueService } from '../../../shared/services/';
import { VideoThumbnailType } from './video-thumbnail-type.enum';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: 'video-thumbnail.component.html',
  styleUrls: ['video-thumbnail.component.scss']
})

export class VideoThumbnailComponent implements OnInit {
  @Input() video: VideoItemInterface;
  @Input() type: VideoThumbnailType;

  public videoThumbnailType = VideoThumbnailType;
  private activeVideo: VideoItemInterface;

  /**
   * Constructor of the class
   *
   * @param {VideoQueueService} videoQueueService
   */
  public constructor(private videoQueueService: VideoQueueService) { }

  // On init we subscribe for active video
  public ngOnInit() {
    this.videoQueueService.video$.subscribe(video => {
      this.activeVideo = video;
    });

    console.log(this.type);
  }

  // Method to add current video to queue
  public add() {
    this.videoQueueService.add(this.video);
  }

  // Method to determine if current video is active or not
  public isActive() {
    return this.video === this.activeVideo;
  }

  // Method to set current video active.
  public activateVideo() {
    this.videoQueueService.changeVideo(this.video);
  }
}
