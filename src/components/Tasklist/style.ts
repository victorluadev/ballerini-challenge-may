import styled from "styled-components";
import { CONSTANTS } from "../../constants";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const TasklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  min-height: 382px;
  max-height: 382px;
  overflow-y: scroll;
  gap: 16px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #3F3F46; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555; 
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-top: 24px;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background: ${props => props.theme.inputBackground};
  color: ${props=> props.theme.inputTextColor};

  &::placeholder{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${props=> props.theme.inputTextColor};
  }
`;

export const InputButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background: ${CONSTANTS.COLORS.green};
  color: ${CONSTANTS.COLORS.zinc50};
  cursor: pointer;

  &:active {
    opacity: 0.75;
  }

  &:hover {
    transform: scale(1.10);
  }
`;