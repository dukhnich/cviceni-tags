import "./style.css";
import { TagData } from "../../model";

export const Tag: React.FC<TagData> = ({ text, importance }) => {
  const percent =
    (importance < 0 ? 0 : importance > 100 ? 100 : importance);
  const min = 3;
  return (
    <div className={`tag${percent < min ? " tag--small" : ""}`}>
      <span
        className="tag__importance"
        style={{ filter: `saturate(${percent < min ? 1 : percent}%)` }}
      ></span>
      <div className="tag__text">{text}</div>
    </div>
  );
};

export default Tag;
