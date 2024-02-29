import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePackageByIdComponent } from './delete-package-by-id.component';

describe('DeletePackageByIdComponent', () => {
  let component: DeletePackageByIdComponent;
  let fixture: ComponentFixture<DeletePackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePackageByIdComponent]
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
