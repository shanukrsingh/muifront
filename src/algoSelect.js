import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["nearest_neighbour", "bilinear", "bicubic"];
const defaultOption = options[0];

const reactDropDown = (props) => {
  return (
    <Dropdown
      options={options}
      onChange={props.handleDropDown}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default reactDropDown;
