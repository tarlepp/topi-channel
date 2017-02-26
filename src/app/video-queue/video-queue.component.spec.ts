import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoQueueComponent } from './video-queue.component';

describe('VideoQueueComponent', () => {
  let component: VideoQueueComponent;
  let fixture: ComponentFixture<VideoQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
