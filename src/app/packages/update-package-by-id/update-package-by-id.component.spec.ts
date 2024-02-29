import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageByIdComponent } from './update-package-by-id.component';

describe('UpdatePackageByIdComponent', () => {
  let component: UpdatePackageByIdComponent;
  let fixture: ComponentFixture<UpdatePackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePackageByIdComponent]
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
