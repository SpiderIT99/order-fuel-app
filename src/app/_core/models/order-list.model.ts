import { AddressDelivery } from "./address-delivery.model";
import { Fuel } from "./fuel.model";

export class OrderList {
    fuel: Fuel = new Fuel;
    addressDelivery: AddressDelivery = new AddressDelivery;
    dateOfOrder:string = '';
    phoneNumber: string = '';
    email: string = '';
    count: number = 0;
    description: string = '';
    _id: string = '';
    __v:number = 0;
}