import { Component, OnInit } from '@angular/core';

import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { VideoThumbnailType } from '../shared/modules/video-thumbnail/video-thumbnail-type.enum';

@Component({
  selector: 'app-channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.scss']
})

export class ChannelComponent implements OnInit {
  public videos$;
  public videoThumbnailType = VideoThumbnailType;

  /**
   * Constructor of the class
   *
   * @param {YoutubeApiService} service
   */
  public constructor(private service: YoutubeApiService) { }

  /**
   * OnInit lifecycle hook
   */
  public ngOnInit(): void {
    this.videos$ = this.service.getChannelVideos('UC7JbtrBVDj_XuGrtiUo8msA');
  }
}
