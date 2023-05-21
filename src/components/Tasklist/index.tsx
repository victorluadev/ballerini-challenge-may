import { InputButton, InputContainer, InputText, ListWrapper, TasklistContainer } from "./style";

const Tasklist = () => {
  return (
    <ListWrapper>
      <TasklistContainer/>
      <InputContainer>
        <InputText placeholder="Nova Tarefa"/>
        <InputButton>Adicionar</InputButton> 
      </InputContainer>
    </ListWrapper>
  )
}

export default Tasklist;