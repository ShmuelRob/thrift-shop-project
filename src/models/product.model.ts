import Phone from "./phone.type";

class Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    city: string;
    // phoneNumber: Phone;
    datePublished: Date;

    constructor(id: number, name: string, description: string, imageUrl: string, price: number, city: string, phoneNumber: Phone, datePublished: Date) {
        this.id = id
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price; 
        this.city = city;
        // this.phoneNumber = phoneNumber;
        this.datePublished = datePublished;
    }
}

export default Product;
