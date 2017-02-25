import { VideoItemSnippetThumbnailsInterface } from './video-item-snippet-thumbnails.interface';

export interface VideoItemSnippetInterface {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoItemSnippetThumbnailsInterface;
}
