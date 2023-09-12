import React from 'react';
import { IPostCard } from '../../post.date';
import styled from 'styled-components';
import DefaultCard from '../postcard/defaultpostcard';
import MidleCard from '../postcard/midlepostcard';
import SmallCard from '../postcard/smallpostcard';

type PostListProps = {
  postCard: IPostCard[];
};

export const PostList: React.FC<PostListProps> = (props: PostListProps) => {
  return (
    <CardWrapper>
      <LeftPostWrapper>
        <DefaultCard post={props.postCard[3]}></DefaultCard>
        <MidleCard post={props.postCard[1]}></MidleCard>
        <MidleCard post={props.postCard[2]}></MidleCard>
        <MidleCard post={props.postCard[2]}></MidleCard>
        <MidleCard post={props.postCard[3]}></MidleCard>
      </LeftPostWrapper>
      <RightPostWrapper>
        <SmallCard post={props.postCard[3]}></SmallCard>
        <SmallCard post={props.postCard[2]}></SmallCard>
        <SmallCard post={props.postCard[1]}></SmallCard>
        <SmallCard post={props.postCard[3]}></SmallCard>
        <SmallCard post={props.postCard[1]}></SmallCard>
        <SmallCard post={props.postCard[3]}></SmallCard>
        <SmallCard post={props.postCard[1]}></SmallCard>
      </RightPostWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  background-color: lightgray;
  margin: 0 15px;
`;

const LeftPostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 780px;
`;

const RightPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
