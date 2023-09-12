import { MainTemplate } from "#ui/templates/main-template";
import { Title } from "#ui/title/title";
import { BackLink } from "../backlLink/back-link";
import { SignUpForm } from "../sing-up-form/sing-up.form";

export const SignUp: React.FC = () => {
    return (
      <MainTemplate
        header={<header></header>}
        backLink={<BackLink />}
        title={<Title>Sign Up</Title>}
        body={<SignUpForm />}
      />
    );
  };