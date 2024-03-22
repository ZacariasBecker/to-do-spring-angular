import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBookComponent } from './task-book.component';

describe('TaskBookComponent', () => {
  let component: TaskBookComponent;
  let fixture: ComponentFixture<TaskBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
