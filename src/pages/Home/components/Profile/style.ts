import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 100%;
  padding: 2rem 2.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    > div:first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      strong {
        color: ${(props) => props.theme["base-title"]};
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.3;
      }

      a {
        color: ${(props) => props.theme["blue"]};
        font-size: 0.75rem;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        border-bottom:1px solid transparent;

        &:hover{
          border-bottom-color:${(props) => props.theme.blue};
        }
      }
    }
  }
`;
export const Dates = styled.div`
      margin-top: 1rem;
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
          color: ${(props) => props.theme["base-subtitle"]};
        }

        svg {
          color: ${(props) => props.theme["base-label"]};
          font-size: 1.25rem;
        }

        
      }
`
