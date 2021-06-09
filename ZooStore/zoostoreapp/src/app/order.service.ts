import {Injectable} from "@angular/core";
import {Order} from "./order";

@Injectable()
export class OrderService {
  public orders: Order[] = [];

  public addOrder(order: Order): void {
    try {
      this.orders.push(order);
    } catch (err) {
      console.log(err)
    }
  }

  public getOrders() {
    return this.orders;
  }

  public deleteOrder(id: number): void {
    this.orders = this.orders.filter((order) => order.id !== id);
  }

}
