import { useItemStore } from "../store/ItemStore";
import { AddItem } from "./AddItem";
export const DisplayItem = () => {
  const items = useItemStore((state) => state.items);
  return (
    <div className = "card">
      <div className = "card-title"> Display the items in Inventory </div>
      <AddItem/>
      <table>
        <thead>
          <tr>
            <th>Item No </th>
            <th>Item Name </th>
            <th>Quantity </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}