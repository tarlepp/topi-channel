import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ChannelComponent } from './channel.component';
import { SharedModule } from '../shared/shared.module';

describe('Component: /about/about.component.ts', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;

  beforeEach(async(() => {
    return TestBed
      .configureTestingModule({
        declarations: [
          ChannelComponent,
        ],
        imports: [
          SharedModule,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
