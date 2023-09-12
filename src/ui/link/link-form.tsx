import React from "react";
import styled from "styled-components";


type Props = {
    children: string;
}

export const LinkForm: React.FC<Props> = ({children}) => {

    return (
        <LinkSingUpWrapper>{children}</LinkSingUpWrapper>

    )
}

const LinkSingUpWrapper = styled.a`
color: #2231AA;
text-transform: capitalize;
cursor: pointer;
`;