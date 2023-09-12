import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignUpSuccessForm } from '#features/success-form/success-form';

export const SignUpSuccess: React.FC = () => {
  return (
    <MainTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      title={<Title>Sign Up</Title>}
      body={<SignUpSuccessForm />}
    />
  );
};
