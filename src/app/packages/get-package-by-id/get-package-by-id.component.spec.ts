import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackageByIdComponent } from './get-package-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetPackageByIdComponent', () => {
  let component: GetPackageByIdComponent;
  let fixture: ComponentFixture<GetPackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPackageByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPackageByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
