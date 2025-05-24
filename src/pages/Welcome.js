import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #6B7280;
  margin-bottom: 32px;
`;

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Welcome to PopX</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
      <Button
        className="primary"
        onClick={() => navigate('/register')}
        style={{ marginBottom: 16 }}
      >
        Create Account
      </Button>
      <Button
        className="secondary"
        onClick={() => navigate('/login')}
      >
        Already Registered? Login
      </Button>
    </Container>
  );
};

export default Welcome;