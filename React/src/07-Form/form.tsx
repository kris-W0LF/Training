import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Hello " + name);
      }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;