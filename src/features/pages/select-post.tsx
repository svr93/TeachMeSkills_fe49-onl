import styled from 'styled-components';
import { PostCard } from '../../post.date';
import ContentCard from '../postcard/post-content';
import { Header } from '../header/header';
import { BackLink } from '../backlLink/back-link';



export const SelectPostCard: React.FC = () => {
  return (<>
    <Header/>
    <BackLink/>
    <MainTemplateWrapper>
      <ContentWithPaddings>
        <Main>
          <BodyContainer>
            <ContentCard post={PostCard[0]} />
          </BodyContainer>
          <PostDelimiter />
          <PagePagination >
            <ArrowLeftWrapper>
              <ArrowIconLeft>
                <i className="fa-solid fa-arrow-left-long"></i>
              </ArrowIconLeft>
              <ArrowLeftPagination>
                <PrevTextSpan>Prev</PrevTextSpan>
                <PrevPostNameSpan>
                  10 Things to Know About Salvador Dalí
                </PrevPostNameSpan>
              </ArrowLeftPagination>
            </ArrowLeftWrapper>
            <ArrowRightWrapper>
              <ArrowRightPagination>
                <PrevTextSpan>Next</PrevTextSpan>
                <PrevPostNameSpan>
                  8 Beautiful Villas Belonging to Artists You Need to See
                </PrevPostNameSpan>
              </ArrowRightPagination>
              <ArrowIconRigth>
                <i className="fa-solid fa-arrow-right-long"></i>
              </ArrowIconRigth>
            </ArrowRightWrapper>
          </PagePagination>
        </Main>

        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
    </MainTemplateWrapper>
    </>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWithPaddings = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;


const BodyContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  margin: auto;
`;

const PagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 50px 0;
`;

const ArrowLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowRightPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ArrowLeftPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PrevTextSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  
`;

const PrevPostNameSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary-color);
`;

const ArrowIconLeft = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;
const ArrowIconRigth = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

const PostDelimiter = styled.hr`
  width: 90%;
  margin: auto;
  margin-top: 30px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 90%;
  margin: auto;
`;

const Year = styled.div`
margin-left: 55px;

`;
