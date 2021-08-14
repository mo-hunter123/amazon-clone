import products from "../controllers/product.controller"


export const app = () => {
    //create a new product 
    app.post("/products", products.create); 

    //find a special product 
    app.get("/products/:productId", products.findById); 

    //get all products 
    app.get("/products", products.getAll);
}