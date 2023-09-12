import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import styled from 'styled-components';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  return (
    <form>
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <ForgotPasswordButton type="button">
        Forgot password?
      </ForgotPasswordButton>
      <Button variant="primary" onClick={() => null}>
        Sign In
      </Button>
      <SignUpWarning>
        Don't have an account? <LinkToSignUp href="#">Sign Up</LinkToSignUp>
      </SignUpWarning>
    </form>
  );
};

const SignUpWarning = styled.div`
width: 100%
text-aling: center;
font-size: 10px;
color: gray`;

const LinkToSignUp = styled.a`
  cursor: pointer;
  color: #6495ed;
`;

// Мешает место для Error под каждым Input
const ForgotPasswordButton = styled.button`
  all: unset;
  padding: 0;
  font-size: 10px;
  color: gray;
`;
