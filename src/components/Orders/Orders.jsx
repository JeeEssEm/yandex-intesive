import { useSelector } from "react-redux";
import { Order } from "../Order/Order";

export const Orders = ({ bookIds }) => {
  return (
    <div>
      <h2>Ваш заказ</h2>
      {bookIds.map((id) => (
        <Order bookId={id} key={id} />
      ))}
    </div>
  );
};
