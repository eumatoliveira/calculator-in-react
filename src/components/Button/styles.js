import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  flex: 1;
  padding: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #31363f;
  color: #e0e0e0;
  border: 1px solid #282c34;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a505a;
  }

  ${({ operation }) => operation && css`
    background-color: #61dafb;
    color: #20232a;
    &:hover {
      background-color: #82e3ff;
    }
  `}

  ${({ double }) => double && css`
    flex-basis: 50%;
    flex-grow: 2;
  `}

  ${({ triple }) => triple && css`
    flex-basis: 75%;
    flex-grow: 3;
    background-color: #f05a5a;
    color: white;
    &:hover {
      background-color: #ff7b77;
    }
  `}
`;