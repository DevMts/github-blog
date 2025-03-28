import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
  width: 100%;


`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 100%;

  margin-top: 3.75rem;

  div{
    display:  flex;
    justify-content: space-between;

     span:first-child{
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
    }

    span:last-child{
      font-size: .875rem;
      color: ${props => props.theme["base-span"]};
    }
  }
  input{
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    padding: .75rem  1rem;
    color: ${props => props.theme["base-text"]};

    &::placeholder{
      color: ${props => props.theme["base-label"]};
    }

  }
`;
