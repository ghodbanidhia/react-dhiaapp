import React from "react";

function MyComponent() {
  const showMessage = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>React Function Example</h1>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default MyComponent;
