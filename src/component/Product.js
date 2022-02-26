import { useRef } from "react";

function Product(props) {
  const { productName, productUrl, productPrice, onProductAdd } = props;/*passing product details as props   */
  const ref = useRef();

  const handleClick = () => { // if Add to cart btn is clicked then animantion will comes 
    ref.current.classList.add("send-to-cart"); // Add animation class into the element
    setTimeout(() => {
      ref.current.classList.remove("send-to-cart"); 
      onProductAdd();
    }, 1000);
  };


  return (
    <div className="product">
      <div className="item">
        <span ref={ref} className="cart-item"></span>
        {/* <span>{productName}</span> */}
        {/* <img src="http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" alt="item" /> */}
        <img src={productUrl} alt="item" />
             <h2>{productName}</h2>

            <p>Price: <em>{productPrice}</em>
            </p>
      </div>
      <button className="add-to-cart" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
