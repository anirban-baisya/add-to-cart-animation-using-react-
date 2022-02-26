import Product from "./Product";

function Products(props) {
  const { onProductAdd } = props;
  return (
    <div className="products-container">
      <Product onProductAdd={onProductAdd} productUrl= "http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" productName= "Product 1"  productPrice= '₹ 555 '/>
      <Product onProductAdd={onProductAdd} productUrl= "http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" productName= "Product 2"  productPrice= '₹ 455 '/>
      <Product onProductAdd={onProductAdd} productUrl= "http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" productName= "Product 3"  productPrice= '₹ 655 '/>

      
    </div>
  );
}

export default Products;
