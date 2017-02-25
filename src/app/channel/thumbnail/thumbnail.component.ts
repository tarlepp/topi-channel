import { Component, Input } from '@angular/core';
import { VideoItemInterface } from '../../models/video-item.interface';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent {
  @Input() video: VideoItemInterface;

  constructor() { }
}
