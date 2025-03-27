import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  display: flex;;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
`
export const Card = styled.article`
  width: auto;
  max-width: 26rem;
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;

  div{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2{
      color: ${props => props.theme["base-title"]};
      font-size: 1.25rem;
      font-weight: bold;
      width: fit-content;
      max-width: 15rem;
    }
    span{
      color: ${props => props.theme["base-span"]};
      font-size: .875rem;
      width: fit-content;
    }
  }


  p{
    overflow: hidden; /* Oculta o conteúdo que ultrapassar */
   	text-overflow: ellipsis; /* Adiciona reticências (...) */
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Define o número máximo de linhas antes do corte */
    -webkit-box-orient: vertical;
    color: ${props => props.theme["base-text"]};
  }
`