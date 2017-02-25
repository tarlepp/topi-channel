import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../shared/services/youtube-api.service';

@Component({
  selector: 'app-channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.scss']
})

export class ChannelComponent implements OnInit {
  public videos$;

  constructor(private service: YoutubeApiService) { }

  ngOnInit(): void {
    this.videos$ = this.service.getChannelVideos('UC7JbtrBVDj_XuGrtiUo8msA');
  }
}
