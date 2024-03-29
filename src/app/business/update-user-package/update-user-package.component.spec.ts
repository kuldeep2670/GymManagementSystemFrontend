import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPackageComponent } from './update-user-package.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateUserPackageComponent', () => {
  let component: UpdateUserPackageComponent;
  let fixture: ComponentFixture<UpdateUserPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserPackageComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateUserPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
