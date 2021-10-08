import { Link } from "react-router-dom";
import {
  homeIcon,
  laptopIcon,
  tabletIcon,
  phoneIcon,
  etcIcon,
  saleIcon,
  cartIcon,
} from "../static/img";

function Icon({ name, icon, destination }) {
  return (
    <Link
      // onClick={() => history.push(destination)}
      to={destination}
      className="icon-container"
    >
      <img className="icon" src={icon} alt="nav-symbol"></img>

      <label className="icon-label">{name}</label>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Icon destination="/" name="Trang chủ" icon={homeIcon}></Icon>
        </li>

        <li>
          <Icon destination="/phone" name="Điện thoại" icon={phoneIcon}></Icon>
        </li>

        <li>
          <Icon destination="/tablet" name="Tablet" icon={tabletIcon}></Icon>
        </li>

        <li>
          <Icon destination="/laptop" name="Laptop" icon={laptopIcon}></Icon>
        </li>

        <li>
          <Icon destination="/etc" name="Linh kiện" icon={etcIcon}></Icon>
        </li>

        <li>
          <Icon destination="/sale" name="Sự kiện" icon={saleIcon}></Icon>
        </li>

        <li className="cart">
          <Icon destination="/checkout" name="Giỏ hàng" icon={cartIcon}></Icon>
        </li>
      </ul>
    </nav>
  );
}
