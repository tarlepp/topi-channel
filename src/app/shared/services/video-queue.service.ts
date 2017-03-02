import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VideoItemInterface } from '../../models/video-item.interface';

@Injectable()
export class VideoQueueService {
  public video$: ReplaySubject<VideoItemInterface> = new ReplaySubject(1);
  public videos$: BehaviorSubject<VideoItemInterface[]> = new BehaviorSubject([]);
  private video: VideoItemInterface;
  private videos: Array<VideoItemInterface> = [];

  /**
   * Method to change current active video to another.
   *
   * @param {VideoItemInterface}  video
   * @returns {ReplaySubject<VideoItemInterface>}
   */
  public changeVideo(video: VideoItemInterface) {
    this.video = video;
    this.video$.next(this.video);

    return this.video$;
  }

  /**
   * Method to add new video to queue.
   *
   * @param {VideoItemInterface}  video
   * @returns {BehaviorSubject<VideoItemInterface[]>}
   */
  public add(video: VideoItemInterface): BehaviorSubject<VideoItemInterface[]> {
    // Video already on the list, so just change it to active one
    if (this.videos.indexOf(video) !== -1) {
      this.changeVideo(video);

      return this.videos$;
    }

    // Add new video to queue
    this.videos.push(video);
    this.videos$.next(this.videos);

    // And finally set that last video to active one
    this.changeVideo(this.videos[this.videos.length - 1]);

    return this.videos$;
  }
}
