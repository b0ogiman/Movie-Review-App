import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaMoviesComponent } from './drama-movies.component';

describe('DramaMoviesComponent', () => {
  let component: DramaMoviesComponent;
  let fixture: ComponentFixture<DramaMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DramaMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DramaMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
