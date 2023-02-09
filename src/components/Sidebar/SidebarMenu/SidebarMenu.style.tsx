import styled from "styled-components";

export const MenuNav = styled.nav`
    padding-top: 10px;
    padding-bottom: 10px;
`;

interface Props {
    textColor: string
    backgroundColor: string
}

export const MenuUl = styled.ul<Props>`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        color: ${(props) => props.textColor};
        text-decoration:none;
    }
    .activeClicked {
      >li{
            background: ${(props) => props.textColor};
            color: ${(props) => props.backgroundColor};
        }
    }
    
`;

