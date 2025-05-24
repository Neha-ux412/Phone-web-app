import styled from '@emotion/styled';

const RadioWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #10B981;
  margin-bottom: 8px;
  font-size: 14px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 24px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #10B981;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  
  &:checked {
    background: #10B981;
    border: 2px solid #10B981;
    box-shadow: inset 0 0 0 3px white;
  }
`;

const RadioGroup = ({ label, options, name, value, onChange }) => (
  <RadioWrapper>
    {label && <Label>{label}</Label>}
    <div style={{ display: 'flex' }}>
      {options.map((option) => (
        <RadioOption key={option.value}>
          <RadioInput
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          {option.label}
        </RadioOption>
      ))}
    </div>
  </RadioWrapper>
);

export default RadioGroup;