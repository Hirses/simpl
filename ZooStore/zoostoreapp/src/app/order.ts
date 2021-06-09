export class Order {
  public id: number = 0;
  public petName: string = '';
  public quantity: number = 0;
  public shipDate: Date = new Date();
  public status: string = 'placed';
  public complete: boolean = false;
}
