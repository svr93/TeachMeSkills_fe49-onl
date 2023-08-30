import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignUpForm } from '#features/sign-up-form/sign-up-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SignUp: React.FC = () => {
  return (
    <MainTemplate
      header={
        <header style={{ width: '100%', height: '40px' }}>
          Header <FontAwesomeIcon icon="coffee" />
        </header>
      }
      backLink={<BackLink />}
      title={<Title>Sign Up</Title>}
      body={<SignUpForm />}
    />
  );
};
