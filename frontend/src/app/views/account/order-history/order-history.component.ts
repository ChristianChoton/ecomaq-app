import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Order } from "../../../core/models/order.model";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "account-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"],
})


export class OrderHistoryComponent implements OnInit {
  displayedColumns: string[] = [
    "orderid",
    "date",
    "subtotal",
    "taxes",
    "shipper",
    "total"
  ];

  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getOrders().subscribe({
      next: (orders: Order[]) => {
        const transformed = orders.map(order => ({
          orderid: order.id,
          date: order.date,
          subtotal: order.subtotal,
          taxes: order.tax,
          shipper: order.shipper,
          total: order.total
        }));

        this.dataSource.data = transformed; 
      },
      error: (e) => console.error(e)
    });
  }
}
