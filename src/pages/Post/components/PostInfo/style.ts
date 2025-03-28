import styled from "styled-components";

export const PostInfoContainer = styled.section`
  padding: 2rem 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  strong{
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1.3;
    color: ${props => props.theme["base-title"]};
    margin-bottom: .5rem ;
  }


 >div:first-child{

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 1.25rem;



      a {
        color: ${props => props.theme["blue"]};
        font-size: 0.75rem;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        border-bottom:1px solid transparent;

        &:hover{
          border-bottom-color:${props => props.theme.blue};
        }
      } }

`;
export const Dates = styled.div`
      margin-top: .5rem;
      display: flex;
      flex-direction: row; 
      gap: 1.5rem;
      align-items: center;
      justify-content: flex-start;

     div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        justify-content: flex-start;

        span{
          color: ${props => props.theme["base-subtitle"]};
        }

        svg {
          color: ${props => props.theme["base-label"]};
          font-size: 1.25rem;
        }

        
      }
`;
