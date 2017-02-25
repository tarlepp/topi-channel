import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config } from '../../config/config';

@Injectable()
export class YoutubeApiService {
  private baseUrl = 'https://www.googleapis.com/youtube/v3/search';

  public constructor(private http: Http) {}

  public query(query: string) {
    return this.http
      .get(`${this.baseUrl}?q=${query}&part=snippet&key=${Config.API.KEY}`)
      .map((res: Response) => res.json())
      .map(json => json.items);
  }

  public getChannelVideos(channelId: string) {
    return this.http
      .get(`${this.baseUrl}?order=date&part=snippet&channelId=${channelId}&type=video&maxResults=50&key=${Config.API.KEY}`)
      .map((res: Response) => res.json())
      .map(json => json.items);
  }
}
