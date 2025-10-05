import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCarousel } from './skill-carousel';

describe('SkillCarousel', () => {
  let component: SkillCarousel;
  let fixture: ComponentFixture<SkillCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
