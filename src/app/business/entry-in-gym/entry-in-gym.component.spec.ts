import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryInGymComponent } from './entry-in-gym.component';

describe('EntryInGymComponent', () => {
  let component: EntryInGymComponent;
  let fixture: ComponentFixture<EntryInGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryInGymComponent]
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
