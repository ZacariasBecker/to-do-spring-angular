import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNoteComponent } from './task-note.component';

describe('TaskNoteComponent', () => {
  let component: TaskNoteComponent;
  let fixture: ComponentFixture<TaskNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
