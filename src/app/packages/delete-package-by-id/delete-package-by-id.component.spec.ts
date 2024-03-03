import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePackageByIdComponent } from './delete-package-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeletePackageByIdComponent', () => {
  let component: DeletePackageByIdComponent;
  let fixture: ComponentFixture<DeletePackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePackageByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePackageByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
