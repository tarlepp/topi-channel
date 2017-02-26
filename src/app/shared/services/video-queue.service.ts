import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { VideoItemInterface } from '../../models/video-item.interface';

@Injectable()
export class VideoQueueService {
  public activeVideo: ReplaySubject<VideoItemInterface> = new ReplaySubject(1);

  /**
   * Method to change current active video to another.
   *
   * @param {VideoItemInterface}  video
   * @returns {ReplaySubject<VideoItemInterface>}
   */
  public changeActiveVideo(video: VideoItemInterface) {
    this.activeVideo.next(video);

    return this.activeVideo;
  }
}
