import { useState } from "react";

const EditableText = ({ text, onSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  return editing ? (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(value);
        setEditing(false);
      }}
    >
      <input value={value} onChange={(ev) => setValue(ev.target.value)} />
    </form>
  ) : (
    <span onClick={() => setEditing(true)}>{text}</span>
  );
};

export default EditableText;
