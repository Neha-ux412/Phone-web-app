import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #6B7280;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/account');
  };

  return (
    <Container>
      <Title>Signin to your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          required
        />
        <Button className="primary" type="submit" style={{ marginTop: 16 }}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;