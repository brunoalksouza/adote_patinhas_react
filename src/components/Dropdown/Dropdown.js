import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Icon = () => {
  return <MdOutlineKeyboardArrowDown color="fff" />;
};

function Dropdown({ placeHolder, options, isSearchable, brStatesId }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchRef = useRef();

  const id = selectedValue ? selectedValue.value : null;

  const onSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    setFilteredOptions(getOptions());
  }, [options, searchValue]);

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    setSearchValue("");
    setShowMenu(false);
    console.log(brStatesId);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.label === option.value;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-input" onClick={handleInputClick}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className="dropdown-search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
