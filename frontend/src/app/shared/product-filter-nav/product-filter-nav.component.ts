import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "product-filter-nav",
  templateUrl: "./product-filter-nav.component.html",
  styleUrls: ["./product-filter-nav.component.scss"],
})
export class ProductFilterNavComponent {
  priceRange = { min: 0, max: 80000 };

  filters = {
    name: "",
    price: [0, 80000],
    rating: 0,
  };

  @Output() filtersEmiter = new EventEmitter<any>();
  @Output() cancelFilters = new EventEmitter<any>();

  resetFilters() {
    this.filters = {
      name: "",
      price: [this.priceRange.min, this.priceRange.max],
      rating: 0,
    };
    this.cancelFilters.emit();
  }

  applyFilters = () => this.filtersEmiter.emit(this.filters); 
}
