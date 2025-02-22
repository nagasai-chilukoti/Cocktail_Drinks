import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);  // State should be an array of items
  const [text, setText] = useState("");  // State for the text input

  const changeHandle = (e) => {
    setText(e.target.value);  // Update the text state when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      text: text,
      id: new Date().getTime(),  // Unique id based on the timestamp
    };
    setList([...list, newItem]);  // Add new item to the list
    setText("");  // Clear the input field after submission
  };

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));  // Delete item based on id
  };

  const handleEdit = (id) => {
    const newText = prompt("Edit the item:");  // Prompt user for new text
    if (newText) {
      setList(list.map(item => item.id === id ? { ...item, text: newText } : item));  // Update the text of the item
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="list"
          value={text}
          placeholder="Type any message"
          onChange={changeHandle}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleEdit(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
