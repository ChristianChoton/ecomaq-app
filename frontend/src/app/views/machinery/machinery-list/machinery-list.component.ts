import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.scss']
})
export class MachineryListComponent implements OnInit{
  pageTitle: string = "Machinery";
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    this.route.queryParams.forEach((param) =>
      this.getProductList(param["category"])
    );
  }

  private getProductList(category: string) {
    if (category) {
      this.http
        .getProductsByCategory(category)
        .subscribe((r) => (this.products = r));
      return;
    }

    this.http.getProductsByCategoryType('machinery').subscribe((r) => (this.products = r));
  }
}
