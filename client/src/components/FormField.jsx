import React from "react";

const FormField =(props)=> (
  <div>
    <div className="flex items-center gap-4 mb-2">
      <label htmlFor={props.name}>{props.labelName}</label>
      {props.isSurpriseMe && (
        <button
          type="button"
          onClick={props.handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise Me
        </button>
      )}
    </div>
    <input
      type={props.type}
      id={props.name}
      name={props.name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      required 
    />
  </div>
);

export default FormField;