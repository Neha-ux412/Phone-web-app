import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';

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

const Register = () => {
  const navigate = useNavigate();
  const [agencyType, setAgencyType] = useState('yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/account');
  };

  return (
    <Container>
      <Title>Create your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          label="Full Name*"
          type="text"
          placeholder="Enter your Name"
          required
        />
        <Input
          label="Phone number*"
          type="tel"
          placeholder="Phone number"
          required
        />
        <Input
          label="Email address*"
          type="email"
          placeholder="Enter valid email address"
          required
        />
        <Input
          label="Password*"
          type="password"
          placeholder="Enter a valid 8 digits password"
          required
        />
        <Input
          label="Company name*"
          type="text"
          placeholder="Enter your company name"
          required
        />
        <RadioGroup
          label="Are you an Agency?*"
          name="agency"
          value={agencyType}
          onChange={setAgencyType}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
        />
        <Button className="primary" type="submit" style={{ marginTop: 16 }}>
          Create Account
        </Button>
      </Form>
    </Container>
  );
};

export default Register;