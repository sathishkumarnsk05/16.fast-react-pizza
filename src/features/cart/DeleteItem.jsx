import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function hanldeDeleteCartItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={() => hanldeDeleteCartItem(pizzaId)}>
      Delete
    </Button>
  );
}

export default DeleteItem;
