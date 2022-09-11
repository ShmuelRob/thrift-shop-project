import Phone from "./phone.type";

class Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    city: string;
    phoneNumber: Phone;
    publishDate: Date;

    constructor(id: number, name: string, description: string, imageUrl: string, price: number, city: string, phoneNumber: Phone, publishDate: Date) {
        this.id = id
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.publishDate = publishDate;
    }
}

export default Product;
