import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const RemoveItems = (props) => {
  return (
    <div>
      <li className="ml-11 font-bold">
        {props.text}
        <button
          className="border w-10 h-10 bg-red-300 hover:bg-green-200"
          type="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <HighlightOffIcon />
        </button>
      </li>
     
      <div></div>
    </div>
  );
};

export default RemoveItems;
