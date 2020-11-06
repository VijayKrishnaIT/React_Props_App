import React from "react";

const arr = ["Angular", "React", "VueJS"];

const obj = { key1: "Angular", key2: "ReactJS", key3: "VueJS" };

import Test2 from "./Test2";

//presentation logic
//share the data to Test2
function Test1() {
  return (
    <React.Fragment>
      <Test2 key1={arr} key2={obj} />
    </React.Fragment>
  );
}

export default Test1;
