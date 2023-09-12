import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Header } from '../../features/header/header';

type Props = {
  header: React.ReactNode;
  backLink: ReactNode;
  title: ReactNode;
  body: ReactNode;
  children?: never;
};

export const MainTemplate: React.FC<Props> = ({
    header,
    backLink,
    title,
    body,
  }) => {
    return (
      <MainTemplateWrapper>
        {header}
        <ContentWithPaddings>
          <Main>
            <BackLinkContainer>{backLink}</BackLinkContainer>
            <TitleContainer>{title}</TitleContainer>
            <BodyContainer>{body}</BodyContainer>
          </Main>
          <Footer>
            <FooterDelimiter />
            <Year>{new Date().getFullYear()}</Year>
          </Footer>
        </ContentWithPaddings>
      </MainTemplateWrapper>
    );
  };
  
  const MainTemplateWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
   
  `;
  
  const ContentWithPaddings = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `;
  
  const Main = styled.main`
    width: 100%;
    flex-grow: 1;
  `;
  
  const BackLinkContainer = styled.div`
    width: 100%;
    height: 50px;
    text-align: start;
  `;
  
  const TitleContainer = styled.div`
    width: 100%;
    height: 75px;
    text-align: start;
  `;
  
  const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  
  const Footer = styled.footer`
    width: 100%;
    height: 50px;
    color: var(--text-secondary-color);
  `;
  
  const FooterDelimiter = styled.hr`
    width: 100%;
    
  `;
  
  const Year = styled.div`
  margin-top: 15px;
  color: grey;
  `;