import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "30px"}}/>
            <span>10</span>
        </div>
    )
}


export default CartWidgetComponent;