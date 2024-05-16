import React, { useState, useRef, useEffect } from 'react';

const MultiSelectDropdown = ({
  options,
  isMulti = true,
  isSearchable = true,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  isRtl = false,
  closeMenuOnSelect = false,
  components,
  styles,
  placeholder = 'Select options...',
  onChange,
  ...rest
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (option) => {
    let newSelectedOptions;
    if (isMulti) {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];
    } else {
      newSelectedOptions = [option];
    }
    setSelectedOptions(newSelectedOptions);
    if (onChange) {
      onChange(newSelectedOptions);
    }
  };

  const handleClear = () => {
    setSelectedOptions([]);
    if (onChange) {
      onChange([]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const DropdownContainer = ({ children }) => (
    <div className="dropdown-container" style={styles.container} {...rest}>
      {children}
    </div>
  );

  const DropdownOption = ({ option, isSelected, onClick }) => (
    <div
      className={`dropdown-option ${isSelected ? 'selected' : ''}`}
      style={styles.option}
      onClick={() => onClick(option)}
    >
      {option.label}
    </div>
  );

  const DropdownSearch = ({ value, onChange }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="dropdown-search"
      style={styles.search}
    />
  );

  const DropdownClear = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="dropdown-clear"
      style={styles.clear}
    >
      Clear
    </button>
  );

  const renderDropdownOptions = () => (
    <div className="dropdown-options" style={styles.options}>
      {filteredOptions.map((option) => (
        <DropdownOption
          key={option.value}
          option={option}
          isSelected={selectedOptions.includes(option)}
          onClick={handleChange}
        />
      ))}
    </div>
  );

  return (
    <DropdownContainer>
      <div className="dropdown-selected" style={styles.selected}>
        {selectedOptions.map((option) => (
          <span key={option.value} className="selected-option" style={styles.selectedOption}>
            {option.label}
          </span>
        ))}
      </div>
      {isSearchable && <DropdownSearch value={searchTerm} onChange={handleSearch} />}
      {isClearable && selectedOptions.length > 0 && (
        <DropdownClear onClick={handleClear} />
      )}
      {isOpen && renderDropdownOptions()}
    </DropdownContainer>
  );
};

export default MultiSelectDropdown;