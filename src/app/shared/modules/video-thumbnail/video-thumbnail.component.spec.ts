import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { VideoThumbnailComponent } from './video-thumbnail.component';
import { VideoQueueService } from '../../services/video-queue.service';

describe('VideoThumbnailComponent', () => {
  let component: VideoThumbnailComponent;
  let fixture: ComponentFixture<VideoThumbnailComponent>;

  beforeEach(async(() => {
    return TestBed
      .configureTestingModule({
        declarations: [
          VideoThumbnailComponent,
        ],
        imports: [
          CommonModule,
          FlexLayoutModule,
          MaterialModule,
          MomentModule,
        ],
        providers: [
          VideoQueueService,
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
