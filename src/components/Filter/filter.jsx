// import React, { Component } from "react";
// import css from './filter.module.css';

const Filter = (input, onChange) => {
  return (
            <>
          <input
              type="text"
              value={input}
              onChange={onChange}
          />
            </>
        )  
};


export default Filter;
