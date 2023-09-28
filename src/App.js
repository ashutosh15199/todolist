import "./App.css";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveItems from "./Components/RemoveItems";

function App() {
  const [items, setItems] = useState("");
  const [InputList, setInputList] = useState([]);
  const addItems = (items) => {
    setItems(items.target.value);
  };

  const addEvent = () => {
    setInputList((oldInputList) => {
      return [...oldInputList, items];
    });
    setItems("");
  };
  const remove = (id) => {
    console.log("Deleted");
    setInputList((oldInputList) => {
      return oldInputList.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="app">
      <div className="bg-blue-100 p-44">
        <div className="rounded mx-auto max-w-[750px] min-h-[500px] shadow-2xl bg-gray-100">
          <h1 className="p-4 my-10 font-bold bg-red-300 text-center">
            ToDo List
          </h1>
          <input
            className="m-10 p-1 w-[530px] text-center"
            type="text"
            value={items}
            name="items"
            placeholder="Add Items"
            onChange={addItems}
          />
        
          <button
            className="border w-10 h-10 bg-red-300 hover:bg-green-200"
            type="btn"
            onClick={() => addEvent()}
          >
            <AddCircleIcon />
          </button>
          <div>
            <ol>
              {/* <li >{items}</li> */}
              {InputList.map((itemVal, index) => {
                return (
                  <RemoveItems
                    key={index}
                    id={index}
                    text={itemVal}
                    onSelect={remove}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
