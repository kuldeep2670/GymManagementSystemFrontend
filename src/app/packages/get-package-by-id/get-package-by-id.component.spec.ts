import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackageByIdComponent } from './get-package-by-id.component';

describe('GetPackageByIdComponent', () => {
  let component: GetPackageByIdComponent;
  let fixture: ComponentFixture<GetPackageByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPackageByIdComponent]
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
