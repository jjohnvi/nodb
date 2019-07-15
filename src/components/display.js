import React from "react";
import axios from "axios";

function Display(props) {
  return (
    <div>
      <p className="quotes" key={props.i}>
        {props.val.quote}
        <div className="button__class">
          <button
            className="right__buttons"
            onClick={() => {
              axios.post("/api/favorites", props.val);
            }}
          >
            Keep!
          </button>
          <button
            className="right__buttons"
            onClick={() => props.likeQuote(props.val.id)}
          >
            Like
          </button>
          {props.val.likes}
        </div>
      </p>
    </div>
  );
}

export default Display;
