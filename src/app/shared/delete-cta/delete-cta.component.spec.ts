import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCtaComponent } from './delete-cta.component';

describe('DeleteCtaComponent', () => {
  let component: DeleteCtaComponent;
  let fixture: ComponentFixture<DeleteCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
