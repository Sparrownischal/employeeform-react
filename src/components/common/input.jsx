import React from "react";

const Input = ({ type, label, name }) => {
  return (
    <div class="form-group mt-2">
      <div class="row">
        <div class="col">
          <label for={name}>
            {label}: <i class="text-danger">*</i>
          </label>
        </div>
        <div class="col">
          <input
            type={type}
            name={name}
            id={name}
            class="form-control"
           
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
