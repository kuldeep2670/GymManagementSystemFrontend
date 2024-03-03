import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalUserPackageComponent } from './renewal-user-package.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('RenewalUserPackageComponent', () => {
  let component: RenewalUserPackageComponent;
  let fixture: ComponentFixture<RenewalUserPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenewalUserPackageComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenewalUserPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
