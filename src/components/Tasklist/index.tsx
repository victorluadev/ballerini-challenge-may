import { useState } from "react";
import uuid from 'react-uuid';
import {
  InputButton,
  InputContainer,
  InputText,
  ListWrapper,
  TasklistContainer,
} from "./style";
import Task from "./components/Task";
import { useTranslation } from "react-i18next";

const Tasklist = () => {
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [error, setError] = useState<string>();

  const handleKeyboardEvent = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter") {
      addTask(name);
      setName("");
    }
  }

  const addTask = (task: string) => {
    name.length >= 3 ? setTasks((oldArray) => [...oldArray, task]) : setError("A tarefa deve ter ao menos 3 caracteres");
  }

  return (
    <ListWrapper>
      <TasklistContainer>
        {tasks.map((task, index) => (
          <Task key={index} id={uuid()} taskname={task} />
        ))}
      </TasklistContainer>
      <InputContainer>
        <InputText
          value={name}
          placeholder={t('inputPlaceholder') as string}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => handleKeyboardEvent(e)}
        />
        <InputButton onClick={() => addTask(name)}>{t('inputButton')}</InputButton>
      </InputContainer>
    </ListWrapper>
  );
};

export default Tasklist;
