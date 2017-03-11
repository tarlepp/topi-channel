import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './footer.component';

describe('Component: /layout/footer/footer.component.ts', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    return TestBed
      .configureTestingModule({
        declarations: [
          FooterComponent,
        ],
        imports: [
          SharedModule,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
