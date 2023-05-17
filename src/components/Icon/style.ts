import styled from "styled-components";

interface IIcon {
  isClickable: boolean;
}

export const IconBody = styled.button<IIcon>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  padding: 0;
  background-color: ${props => props.theme.icon};
  cursor: ${props => props.isClickable ? 'pointer': 'default'};

  ${props => props.isClickable && 
    `:hover{
      transform: scale(1.15);
      transition: transform 5ms linear;
    };`
  }

`;

export const IconImg = styled.img`
  padding: 8px;
`;