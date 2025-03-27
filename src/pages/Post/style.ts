import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const PostContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
`
export const MarkdownContainer = styled.section`
  padding: 2rem 2.5rem;
  width: 100%;

  img{
    max-width: 100%;
    height: auto;
  }
  a{
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover{
      border-bottom-color: ${(props) => props.theme.blue};
    }
  }
  article{
  }
  `

export const Code = styled(SyntaxHighlighter)`
background: ${(props) => props.theme.blue};
  background: inherit; /* Mantém o fundo do tema */
`;
