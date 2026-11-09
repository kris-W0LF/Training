import {getProduct,getProductCount} from "./../services/productService";

function ProductList(){
    const product=getProduct();
    const count =getProductCount();

    return(
      <div>
        <h1>Product list</h1>
        <h3>Total Product:{count}</h3>

        {product.map((item) => (
    <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
    </div>
))}
      </div>
    );

}
export default ProductList;