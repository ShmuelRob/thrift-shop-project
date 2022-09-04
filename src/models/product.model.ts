import Phone from "./phone.type";

class Product {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    phoneNumber: Phone;

    constructor(name: string, description: string, imageUrl: string, price: number, phoneNumber: Phone) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.phoneNumber = phoneNumber;
    }
}

export default Product;
