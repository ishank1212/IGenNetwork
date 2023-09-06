import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = (props) => (
  <div className="r ounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={props.photo}
      alt={props.prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#111629] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{props.prompt}</p>
      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-green-700 w-7 h-7 rounded-full object-cover flex justify-center items-center text-white text-xs font-bold">{props.name[0]}</div>
          <p className="text-white text-sm">{props.name}</p>
        </div>
        <button
        className="outline-none bg-transparent border-none"
        type="button"
        onClick={()=> downloadImage(props._id, props.photo)}>
          <img
          src = {download}
          alt= "download"
          className="w-6 h-6 object-contain invert"
          ></img>
        </button>
      </div> 
    </div>
  </div>
);

export default Card;
