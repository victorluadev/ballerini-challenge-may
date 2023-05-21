import { useState } from "react";
import { TaskContainer, HideCheckbox, Taskname, StyledCheckbox, Icon } from "./style";

import Checkmark from '../../../../assets/checkmark.svg';

interface ITask {
  id: string;
  taskname: string;
}

const Task = ({ id, taskname }: ITask) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <TaskContainer>
      <HideCheckbox 
        id={`${id}`}
        checked={checked} 
        onClick={handleCheckboxChange} 
      />
      <label htmlFor={`${id}`}>
        <StyledCheckbox checked={checked}>
          {checked ? (<Icon src={Checkmark} />) : null}
        </StyledCheckbox>
      </label>
      <Taskname>{taskname}</Taskname>
    </TaskContainer>
  );
};

export default Task;
