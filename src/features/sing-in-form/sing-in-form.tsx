import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import styled from 'styled-components';
import { LinkForm } from '#ui/link/link-form';

export const SignInForm: React.FC = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitForm, setSubmitForm] = useState<boolean>(false);

  return (
    <FormWrapper>
      
      <Input
        type="email"
        labelText="Email"
        value={email}
        placeholder="Your email"
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={!email && submitForm ? `Email shoudn't be empty` : undefined}
      />
      <Input
        type="password"
        labelText="Password"
        placeholder="Your password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      
    
      <Button variant="primary" onClick={() => setSubmitForm(true)}>
        Sign In
      </Button>
      <div style={{marginTop: '15px' , textAlign: 'center'}}>
        <span>Already have an account? </span>
        <LinkForm> sign in</LinkForm>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`

  border: 1px solid #dadada;
  margin-bottom: 30px;
  padding: 10px 30px;
`;
