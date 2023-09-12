import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input: React.FC<Props> = ({ labelText, error, ...restProps }) => {
  return (
    <Label>
      <div>{labelText}</div>
      <InputWrapper $borderColor={error ? 'red' : undefined} {...restProps} />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  font-weight: 500;
  width: 100%;
  line-height: 30px;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  box-sizing: border-box;
  border: 1px solid ${({ $borderColor }) => $borderColor || 'black'};
  border-radius: 2px;
  padding: 5px;
  width: 100%;
  font-size: 14px;
  background-color: #ffffff;
  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#CCCCCCCC'};
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
`;
