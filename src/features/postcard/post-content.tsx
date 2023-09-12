import React, { useState } from 'react';
import { IPostCard } from '../../post.date';
import styled from 'styled-components';

type ContentCardProps = {
  post: IPostCard;
};

export const ContentCard: React.FC<ContentCardProps> = ({ post }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isDislike, setIsDislike] = useState<boolean>(false);

  const [isSaved, setIsSaved] = useState<boolean>(false);

  function like() {
    setIsLike(!isLike);
    setIsDislike(false);
  }

  function dislike() {
    setIsDislike(!isDislike);
    setIsLike(false);
  }

  return (
    <>
      <ContentCardWrapper key={post.id}>
        <ContentCardTopWrapper>
          <ContentCardImgWrapper>
            <img src={post.image} alt="#"></img>
          </ContentCardImgWrapper>
          <ContentCardDateWrapper>{post.date}</ContentCardDateWrapper>
          <ContentCardTextWrapper>{post.text}</ContentCardTextWrapper>
        </ContentCardTopWrapper>
        <ContentCardIconWrapper>
          <ContentCardLeftIconWrapper>
            <ContentCardIconLike onClick={like}>
              {isLike ? (
                <i className="fa-solid fa-thumbs-up fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-up fa-xl"></i>
              )}
            </ContentCardIconLike>

            <ContentCardIconDislike onClick={dislike}>
              {isDislike ? (
                <i className="fa-solid fa-thumbs-down fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-down fa-xl"></i>
              )}
            </ContentCardIconDislike>
          </ContentCardLeftIconWrapper>
          <ContentCardRightIconWrapper>
            <ContentCardIconSave onClick={() => setIsSaved(!isSaved)}>
              {isSaved ? (
                <i className="fa-solid fa-bookmark fa-xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark fa-xl"></i>
              )}
              <ContentSaveSpan>Add to favorites</ContentSaveSpan>
            </ContentCardIconSave>
          </ContentCardRightIconWrapper>
        </ContentCardIconWrapper>
      </ContentCardWrapper>
    </>
  );
};

export default ContentCard;

const ContentCardWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
`;

const ContentCardTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  margin-bottom: 30px;
`;

const ContentCardDateWrapper = styled.div`
  width: 350px;
  margin-top: 15px;
  font-weight: 400;
  color: grey;
`;
const ContentCardTextWrapper = styled.h2`
  display: flex;
  width: 95%;
  margin: auto;
`;

const ContentCardImgWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 100%;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ContentCardIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const ContentCardLeftIconWrapper = styled.div`
  display: flex;
  width: 100px;
`;

const ContentCardRightIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
`;

const ContentCardIconLike = styled.div`
  margin-left: 40px;
  border: 1px solid lightgray;
  padding: 10px 15px;
  background-color: lightgray;
  border-radius: 4px;
  cursor: pointer;
`;

const ContentCardIconDislike = styled.div`
  margin-left: 15px;
  border: 1px solid lightgray;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: lightgray;
  cursor: pointer;
`;

const ContentCardIconSave = styled.button`
  cursor: pointer;
  border: 1px solid lightgray;
  padding: 10px 15px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const ContentSaveSpan = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 600;
  margin-left: 10px;
`;
