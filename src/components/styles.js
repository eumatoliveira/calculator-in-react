import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
    height: 60px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
`;

export const InputContainer = styled.input`
  width: 100%;
    height: 60px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
`;

export const Container = styled.div`
  width: 300px;
    padding: 20px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;