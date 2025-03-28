import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

export const PostContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
`;
export const MarkdownContainer = styled.section`
  padding: 2rem 2.5rem;
  width: 100%;

  img{
    max-width: 100%;
    height: auto;
  }
  a{
    color: ${props => props.theme["blue"]};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover{
      border-bottom-color: ${props => props.theme.blue};
    }
  }
  article{
  }
  `;

export const Code = styled(SyntaxHighlighter)`
 word-wrap: break-word;`;

export const Table = styled.table`
width: auto;
border-collapse: collapse;
margin-bottom: 20px;

tr {
  &:nth-child(even) {
    background-color:rgba(249, 249, 249, 0);
  }

  &:hover {
    background-color:rgba(233, 233, 233, 0.14);
  }
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color:rgba(244, 244, 244, 0);
  font-weight: bold;
}

td {
  word-wrap: break-word;
}
`;
