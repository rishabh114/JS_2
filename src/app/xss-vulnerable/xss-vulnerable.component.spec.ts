import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssVulnerableComponent } from './xss-vulnerable.component';

describe('XssVulnerableComponent', () => {
  let component: XssVulnerableComponent;
  let fixture: ComponentFixture<XssVulnerableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XssVulnerableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XssVulnerableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
