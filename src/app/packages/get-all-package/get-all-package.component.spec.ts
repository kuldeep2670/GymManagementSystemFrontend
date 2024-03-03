import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPackageComponent } from './get-all-package.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetAllPackageComponent', () => {
  let component: GetAllPackageComponent;
  let fixture: ComponentFixture<GetAllPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllPackageComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
