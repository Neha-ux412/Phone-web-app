import styled from '@emotion/styled';

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
    }
  }
  
  &.secondary {
    background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
    color: #059669;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);
    
    &:hover {
      background: linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.2);
    }
  }
`;

export default Button;