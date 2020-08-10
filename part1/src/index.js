import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [value, setValue] = useState(10);

  const hello = () => {
    const handler = () => console.log("hello world");
    return handler;
  };
  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
