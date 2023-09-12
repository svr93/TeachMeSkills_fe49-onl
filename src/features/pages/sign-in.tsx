import { MainTemplate } from "#ui/templates/main-template";
import { Title } from "#ui/title/title";
import { BackLink } from "../backlLink/back-link";
import { SignInForm } from "../sing-in-form/sing-in-form";


export const SignIn: React.FC = () => {
    return (
      <MainTemplate
        header={<header></header>}
        backLink={<BackLink />}
        title={<Title>Sign In</Title>}
        body={<SignInForm />}
      />
    );
  };