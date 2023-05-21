import styled from "styled-components";
import { CONSTANTS } from "../../../../constants";

interface ITask {
  checked: boolean;
}
export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const HideCheckbox = styled.input.attrs({type: 'checkbox'})`
  display: none;
`;

export const StyledCheckbox = styled.div<ITask>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;

  ${props => props.checked ? `
    border: 1px solid ${CONSTANTS.COLORS.green};
    background: ${CONSTANTS.COLORS.green};
  ` : `
    border: 1px solid ${props.theme.checkboxBorder};
    background: ${props.theme.checkboxBackground};
  `}
`;

export const Taskname = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.taskText};
`;

export const Icon = styled.img`

`;