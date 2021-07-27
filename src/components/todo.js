import React from 'react'
import Button from '@atlaskit/button'
import styled, {css} from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
import Checkdelete from '@atlaskit/icon/glyph/trash'
const ButtonStyled = styled(Button)`
margin-top: 5px;
text-align: left;
&,
&:hover {
  ${(p) =>
    p.isCompleted &&
    css`
      text-decoration: line-through;
    `}
}
&:hover {
  .check-icon {
    display: inline-block;
  }
}
.check-icon {
  display: none;
  &:hover {
    background-color: #e2e2e2;
    border-radius: 3px;
  }
}
`;
export default function Todo({todo,onCheckBtn,onCheckDel}) {
    return (
        <>
           <ButtonStyled 
           shouldFitContainer
            isCompleted={todo.isCompleted}
           iconAfter={
           <span className="check-icon" onClick={()=> onCheckBtn(todo.id)}> <CheckIcon primaryColor="#0018f9"/></span>
        }
        
        iconBefore={
            todo.isCompleted && (
           <span className="check-icon" onClick={()=> onCheckDel(todo.id)}> <Checkdelete primaryColor="#FF0000"/></span>
           )
        }

            >
            {todo.name}
           </ButtonStyled> 
        </>
    )
}
