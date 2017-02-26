import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VideoItemInterface } from '../../models/video-item.interface';

@Injectable()
export class VideoQueueService {
  public activeVideo$: ReplaySubject<VideoItemInterface> = new ReplaySubject(1);
  public videos$: BehaviorSubject<VideoItemInterface[]> = new BehaviorSubject([]);

  private videos: Array<VideoItemInterface> = [];

  /**
   * Method to change current active video to another.
   *
   * @param {VideoItemInterface}  video
   * @returns {ReplaySubject<VideoItemInterface>}
   */
  public changeActiveVideo(video: VideoItemInterface) {
    this.activeVideo$.next(video);

    return this.activeVideo$;
  }

  /**
   * Method to attach new video to queue.
   *
   * @param {VideoItemInterface}  video
   * @returns {BehaviorSubject<VideoItemInterface[]>}
   */
  public add(video: VideoItemInterface) {
    this.videos.push(video);
    this.videos$.next(this.videos);

    return this.videos$;
  }
}
