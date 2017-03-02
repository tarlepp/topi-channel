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
   * @param {VideoQueueService} videoQueueService
   */
  public constructor(private videoQueueService: VideoQueueService) { }

  // Method to add current video to queue
  public add() {
    this.videoQueueService.add(this.video);
  }
}
