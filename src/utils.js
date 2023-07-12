import { Faker, en } from "@faker-js/faker";

export const customFaker = new Faker({
    locale: [en]
});

const { commerce, image, database, string, internet, person, phone, datatype, lorem } = customFaker;

export const generateProduct = () => {

    return {
        _id: database.mongodbObjectId(),
        code: string.alphanumeric(10),
        title: commerce.productName(),
        price: parseFloat(commerce.price()),
        department: commerce.department(),
        stock: parseInt(string.numeric(2)),
        image: image.url(),
        description: commerce.productDescription()
    };

};

export const generateUser = () => {

    const numberOfProducts = Math.ceil(Math.random()*10);

    let products = [];

    for (let i = 0; i < numberOfProducts; i++){

        const product = generateProduct();

        products.push(product);

    };
    
    return {
        _id: database.mongodbObjectId(),
        first_name: person.firstName(),
        last_name: person.lastName(),
        phone: phone.number(),
        email: internet.email(),
        avatar: image.avatar(),
        role: datatype.boolean() ? "premium" : "user",
        job_title: person.jobTitle(),
        cart: products
    };

};