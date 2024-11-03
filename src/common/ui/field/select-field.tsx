import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { FieldBase } from "./field-base";

type TOption = {
  label: string;
  value: string | number;
};

type TSelectFieldProps = {
  label?: string;
  value: string | number;
  helpText?: string;
  options: TOption[];
  onChange: (value: string | number) => void;
  error?: string | null;
};

export const SelectField = ({
  label,
  value,
  options,
  helpText,
  onChange,
  error,
}: TSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedOption = options.find((opt) => opt.value === value);
    setSelectedLabel(selectedOption ? selectedOption.label : "");
  }, [value, options]);

  const handleOptionClick = (option: TOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <FieldBase label={label} helpText={helpText} errorMessage={error}>
      <DropdownContainer ref={dropdownRef}>
        <DropdownHeader
          onClick={() => setIsOpen((prev) => !prev)}
          $isError={!!error}
        >
          {selectedLabel}
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </FieldBase>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownHeader = styled.div<{ $isError: boolean }>`
  height: 20px;
  padding: 20px 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.$isError ? "red" : "#ddd")};
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 180px;
  overflow-y: auto;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  background-color: white;

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: white;
  }
`;
