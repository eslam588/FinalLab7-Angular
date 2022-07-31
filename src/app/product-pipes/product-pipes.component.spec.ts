import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPipesComponent } from './product-pipes.component';

describe('ProductPipesComponent', () => {
  let component: ProductPipesComponent;
  let fixture: ComponentFixture<ProductPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
