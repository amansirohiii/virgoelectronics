import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: red;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 90%;
bottom: 80px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: red;
@media screen and (max-width: 768px) {
    left: 80%;
`
