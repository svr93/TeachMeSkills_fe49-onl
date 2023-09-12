
import { MainTemplate } from "#ui/templates/main-template";
import { Title } from "#ui/title/title";
import { BackLink } from "../backlLink/back-link";
import { SuccessForm } from "../success-form/success-form";

export const Success: React.FC = () => {
    return (
      <MainTemplate
        header={<header></header>}
        backLink={<BackLink />}
        title={<Title>success</Title>}
        body={<SuccessForm />}
      />
    );
  };