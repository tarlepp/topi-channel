import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VideoQueueService } from '../shared/services/';
import { VideoItemInterface } from '../models/video-item.interface';
import { VideoThumbnailType } from '../shared/modules/video-thumbnail/video-thumbnail-type.enum';

@Component({
  selector: 'app-video-queue',
  templateUrl: './video-queue.component.html',
  styleUrls: ['./video-queue.component.scss']
})

export class VideoQueueComponent implements OnInit {
  public videos$: BehaviorSubject<VideoItemInterface[]>;
  public videoThumbnailType = VideoThumbnailType;

  /**
   * Constructor of the class.
   *
   * @param {VideoQueueService} videoQueueService
   */
  constructor(private videoQueueService: VideoQueueService) { }

  // On init store videos observable
  ngOnInit() {
    this.videos$ = this.videoQueueService.videos$;
  }
}
