import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageComponent } from './add-package.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddPackageComponent', () => {
  let component: AddPackageComponent;
  let fixture: ComponentFixture<AddPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPackageComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
