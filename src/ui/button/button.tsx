import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary';
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  disabled,
  onClick,
}) => {
  return (
    <ButtonWrapper
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </ButtonWrapper>
  );
};

const css = String.raw;

const ButtonWrapper = styled.button<{ $variant: 'primary' | 'secondary' }>`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  
  padding: 10px 150px;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return css`
          border: 1px solid white;
          background: #2231AA;
          color: white;
        `;
      }
      default:
        return '';
    }
  }}

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }
`;
