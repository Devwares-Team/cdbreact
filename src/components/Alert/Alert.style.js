import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.div`
    ${colorStyle}
    border-radius: 0px;
    align-items:center;
    justify-content:space-between;
    min-width:500px;
`;
export const Button = styled.button`
	color:inherit;
	border:none;
	background-color:transparent;
    right: 0px;
    position: absolute;
    padding: 0px 1.2em;
	:focus { outline:none;	}
`;
