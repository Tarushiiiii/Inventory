import { useState } from "react";
import { useItemStore } from "../store/ItemStore";

export const AddItem = () => {
  const addItem = useItemStore((state) => state.addItem);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!name || quantity < 1) {
      setError("Error Incurred!");
      return;
    }
    setError("");
    addItem(name, quantity);
    setName("");
    setQuantity(1);
  };

  return (
    <div>
      <div className="add-item-row">
        <input
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleAdd}>Add</button>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};