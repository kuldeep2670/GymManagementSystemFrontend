import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPackageComponent } from './get-all-package.component';

describe('GetAllPackageComponent', () => {
  let component: GetAllPackageComponent;
  let fixture: ComponentFixture<GetAllPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllPackageComponent]
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
