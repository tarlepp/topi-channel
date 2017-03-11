import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoQueueComponent } from './video-queue.component';
import { SharedModule } from '../shared/shared.module';

describe('VideoQueueComponent', () => {
  let component: VideoQueueComponent;
  let fixture: ComponentFixture<VideoQueueComponent>;

  beforeEach(async(() => {
    return TestBed
      .configureTestingModule({
        declarations: [
          VideoQueueComponent,
        ],
        imports: [
          SharedModule,
        ],
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
