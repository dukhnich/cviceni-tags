import { useState } from "react";
import "./App.css";
import { tagsCloud } from "./data";
import { TagData } from "./model";
import Tag from "./components/Tag";

function App() {
  const [tags, setTags] = useState<string[]>(tagsCloud);
  const [newTag, setNewTag] = useState<string>("");

  const formattedTags: TagData[] = tags.map((text) => {
    const importance =
      (tags.filter((t) => t === text).length / tags.length) * 100;
    return { text, importance };
  });
  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTag(e.target.value);
  };
  const handlerClick = () => {
    if (!newTag) {
      return;
    }
    setTags([...tags, newTag]);
    setNewTag("");
  };

  return (
    <>
      <h1 className="title">DnD Tag Cloud</h1>
      <div className="add">
        <label className="add__label">
          New Tag
          <input
            type="text"
            className="add__input"
            value={newTag}
            onChange={handlerChange}
          />
        </label>
        <button
          className="add__button"
          onClick={handlerClick}
          disabled={!newTag}
        >
          Add
        </button>
      </div>
      <div className="tags">
        {formattedTags.map((tag, i) => (
          <Tag key={i} {...tag} />
        ))}
      </div>
    </>
  );
}

export default App;
