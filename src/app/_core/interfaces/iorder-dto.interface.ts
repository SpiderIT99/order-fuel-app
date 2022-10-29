export interface IOrderDTO {
    fuel: {
        name: string,
        price: number,
        unit: string,
        src: string,
    }
    addressDelivery: {
        city: string,
        postalCode: string,
        street: string,
        buildingNumber: string,
    }
    phoneNumber: string,
    email: string,
    count: number,
    description: string,
}