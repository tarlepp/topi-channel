import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player.component';
import { PlayerService } from '../shared/services/player.service';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    return TestBed
      .configureTestingModule({
        declarations: [
          PlayerComponent,
        ],
        imports: [
          SharedModule,
          YoutubePlayerModule,
        ],
        providers: [
          PlayerService,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
