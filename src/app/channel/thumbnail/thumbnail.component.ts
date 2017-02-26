import { Component, Input } from '@angular/core';
import { VideoItemInterface } from '../../models/video-item.interface';
import { VideoQueueService } from '../../shared/services/';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent {
  @Input() video: VideoItemInterface;

  /**
   * Constructor of the class
   *
   * @param {VideoQueueService} videoQueue
   */
  public constructor(private videoQueue: VideoQueueService) { }

  /**
   * Method to play selected video.
   *
   * @param {VideoItemInterface}  video
   */
  public playVideo(video: VideoItemInterface) {
    this.videoQueue.changeActiveVideo(video);
  }
}
