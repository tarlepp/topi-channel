import { Component, OnInit } from '@angular/core';
import { VideoQueueService } from '../shared/services/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { VideoItemInterface } from '../models/video-item.interface';

@Component({
  selector: 'app-video-queue',
  templateUrl: './video-queue.component.html',
  styleUrls: ['./video-queue.component.scss']
})

export class VideoQueueComponent implements OnInit {
  public videos$: BehaviorSubject<VideoItemInterface[]>;

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
