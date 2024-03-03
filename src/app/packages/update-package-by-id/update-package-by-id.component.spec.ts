import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageByIdComponent } from './update-package-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdatePackageByIdComponent', () => {
  let component: UpdatePackageByIdComponent;
  let fixture: ComponentFixture<UpdatePackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePackageByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePackageByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
