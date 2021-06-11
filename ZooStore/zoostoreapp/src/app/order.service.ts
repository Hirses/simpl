import {Injectable} from "@angular/core";
import {Order} from "./order";

@Injectable()
export class OrderService {
  private orders: Order[] = [];
  private counter: number = 1;

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

  public deleteOrder(elem: Order): void {
    this.orders = this.orders.filter((order: Order) => order !== elem);
  }

  private getCounter(): number {
    return this.counter++
  }

  public getId(): number {
    return this.getCounter()
  }

  public changeOrder(order: Order, changedOrder: Order): void {
    this.orders[this.orders.findIndex((element: Order) => element.id === order.id)] = changedOrder;
  }

}
