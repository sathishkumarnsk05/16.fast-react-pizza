import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 p-4 uppercase">
      <Link to="/" className="tracking-widest">
        Fast react pizaa
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
