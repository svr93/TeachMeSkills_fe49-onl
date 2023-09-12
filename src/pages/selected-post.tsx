import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  image?: string;
  text: string;
  date: string;
  lesson_num: string;
  title: string;
  author: string;
};

export const SelectedPost: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };
  const [count, setCount] = useState(0);
  // ADD HEADER
  return (
    <SelectedPostWrapper>
      <BigCardWrapper key={id}>
        <CardMainArea>
          <DateContainer>{formatDate(date)}</DateContainer>
          <TitleWrapper>{title}</TitleWrapper>

          <ImgWrapperDiv>
            <ImgWrapper alt="image" src={image}></ImgWrapper>
          </ImgWrapperDiv>
          <CardTextArea>
            <TextWrapper>{text}</TextWrapper>
          </CardTextArea>
        </CardMainArea>
        <InteractArea>
          <LikesArea>
            <LikesButton type="button" onClick={() => setCount(count + 1)}>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/windows/32/facebook-like.png"
                alt="like"
              />
            </LikesButton>
            <LikesCounter>{count}</LikesCounter>
          </LikesArea>

          <SaveButton>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
              alt="save"
            />
            Add to favorite
          </SaveButton>
        </InteractArea>
      </BigCardWrapper>
      <PrevNextArea>
        <PrevButton>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/circled-chevron-left.png"
            alt="circled-chevron-left"
          />
          <PrevTextArea>
            <PrevButtonTitle>Prev</PrevButtonTitle>
            <PrevButtonDescrition>
              Something about previous post
            </PrevButtonDescrition>
          </PrevTextArea>
        </PrevButton>
        <NextButton>
          <NextTextArea>
            <NextButtonTitle>Next</NextButtonTitle>
            <NextButtonDescrition>
              Something about next post
            </NextButtonDescrition>
          </NextTextArea>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png"
            alt="circled-chevron-right"
          />
        </NextButton>
      </PrevNextArea>
      <Footer>
        <FooterDelimiter />
        <Year>{new Date().getFullYear()}</Year>
      </Footer>
    </SelectedPostWrapper>
  );
};
const SelectedPostWrapper = styled.div`
  background-color: #dcdcdc;
`;
const BigCardWrapper = styled.div`
  padding: 15px;
  max-width: 100%;

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 20px auto;
    width: 95%;
    height: 1px;
    background-color: gray;
  }
`;

const CardMainArea = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  max-width: 450px;
`;

const DateContainer = styled.span`
  color: gray;
  margin-bottom: 10px;
  width: 100%;
  font-size: 12px;
`;

const TitleWrapper = styled.h2`
  all: unset;
  font-size: 32px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextWrapper = styled.span`
  color: gray;
  font-size: 12px;
  line-height: 1.5;
`;

const ImgWrapperDiv = styled.div`
  max-height: 300px;
  max-width: 450px;
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InteractArea = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  padding: 0 40px;
`;

const LikesArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c0c0c0;
  border-radius: 4px;
  padding: 5px;
  gap: 5px;
`;
const LikesButton = styled.button`
  all: unset;
  cursor: pointer;
`;
const LikesCounter = styled.span`
  margin-right: 15px;
  font-size: 30px;
`;

const SaveButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c0c0c0;
  border-radius: 4px;
  padding: 5px;
  gap: 5px;
`;
const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #dcdcdc;
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;

const PrevNextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

const PrevButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevTextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const PrevButtonTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 3;
`;

const PrevButtonDescrition = styled.span`
  font-size: 14px;
  color: gray;
  line-height: 3;
`;

const NextButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NextTextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: right;
`;

const NextButtonTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 3;
  text-align: right;
`;

const NextButtonDescrition = styled.span`
  font-size: 14px;
  color: gray;
  line-height: 3;
`;
