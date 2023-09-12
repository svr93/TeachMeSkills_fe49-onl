import React from 'react';
import { Button } from '#ui/button';
import styled from 'styled-components';

export const SuccessForm: React.FC = () => {
  return (
    <FormWrapper>
      <SpanWrapper>
        <span>Email confirmed.</span>
        <span>Your registration is now completed.</span>
      </SpanWrapper>
      <Button variant="primary" onClick={() => null}>
      Go to home
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  border: 1px solid #dadada;
  margin-bottom: 30px;
  padding: 10px 30px;
  margin-bottom: 220px;
`;

const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
