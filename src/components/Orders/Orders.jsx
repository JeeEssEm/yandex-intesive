import { useSelector } from "react-redux";
import { Order } from "../Order/Order";

export const Orders = ({ bookIds }) => {
  // const books = useSelector((state) => {

  // })

  return (
    <div>
      {bookIds.map((id) => (
        <Order bookId={id} key={id} />
      ))}
    </div>
  );
};
