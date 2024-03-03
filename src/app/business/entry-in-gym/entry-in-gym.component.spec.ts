import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryInGymComponent } from './entry-in-gym.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('EntryInGymComponent', () => {
  let component: EntryInGymComponent;
  let fixture: ComponentFixture<EntryInGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryInGymComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryInGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
