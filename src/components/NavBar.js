import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="NavBar">
        <>
            <a className="LogoDiv" style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/")}>
                <img src="../Images/Logo.png" style={{height: 52, paddingBottom: 16}} />
                <h1>My Store</h1>
            </a>
            <div className="LinkDiv">
            <a style={{ cursor: "pointer",  textDecoration: "underline"  }}
            onClick={() => navigate("/ProductPage/")}>Products </a>
            <a href="#">Discounts </a>
            <a href="#">Log-in </a>
            <a href="#">Sign-in </a>
            <a style={{ cursor: "pointer",  textDecoration: "underline"  }}
            onClick={() => navigate("/ShoppingCart/")}><FontAwesomeIcon icon={faShoppingCart} style={{fontSize: 24}}/></a>
            </div>
        </>
      </nav>
    </>
  );
}

export default NavBar;