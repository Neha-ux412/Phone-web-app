import styled from '@emotion/styled';

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #10B981;
  margin-bottom: 8px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #D1FAE5;
  border-radius: 8px;
  font-size: 16px;
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const Input = ({ label, ...props }) => (
  <InputWrapper>
    {label && <Label>{label}</Label>}
    <StyledInput {...props} />
  </InputWrapper>
);

export default Input;