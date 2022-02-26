// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

function Cart(props) {
  const { shake } = props;
  const ref = useRef();

  useEffect(() => {
    shake
      ? ref.current.classList.add("shake")
      : ref.current.classList.remove("shake");
  }, [shake]);

  return (
    <div className="cart-container" ref={ref}>
      {/* <FontAwesomeIcon className="cart" icon={faShoppingCart} /> */}
      <span><i className="shopping-cart fa fa-shopping-cart"></i></span>

    </div>
  );
}

export default Cart;
