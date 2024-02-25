import { useState } from "react";

export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        className="w-full"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      ></input>{" "}
      <br />
      <input
        id="desc"
        className="w-full"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      ></input>{" "}
      <br />
      <button
        className="bg-slate-300 w-full text-black rounded-lg"
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          // axios
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Announcment added");
          });
        }}
      >
        Add an Announcement
      </button>
    </div>
  );
}
