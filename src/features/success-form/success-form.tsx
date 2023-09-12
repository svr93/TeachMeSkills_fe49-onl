import { Button } from '#ui/button';
import styled from 'styled-components';

export const SignUpSuccessForm: React.FC = () => {
  return (
    <div>
      <SuccsesMessage>
        <span> Email confirmed.</span>
        <p>Your voobshche neponyatno napisano</p>
      </SuccsesMessage>
      <Button variant="primary" onClick={() => null}>
        Go to Home
      </Button>
    </div>
  );
};

const SuccsesMessage = styled.div`
  font-size: 12px;
  line-height: 0.75;
  color: gray;
  padding: 10px 0;
  margin-bottom: 30px;
`;
