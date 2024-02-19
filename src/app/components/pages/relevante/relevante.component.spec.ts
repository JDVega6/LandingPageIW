import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevanteComponent } from './relevante.component';

describe('RelevanteComponent', () => {
  let component: RelevanteComponent;
  let fixture: ComponentFixture<RelevanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelevanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
