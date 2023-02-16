import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActivitySectionComponent } from './home-activity-section.component';

describe('HomeActivitySectionComponent', () => {
  let component: HomeActivitySectionComponent;
  let fixture: ComponentFixture<HomeActivitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeActivitySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeActivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
