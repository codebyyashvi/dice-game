import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice, rollDice}) => {
  
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .dice{
      cursor: pointer;
      img{
        height: 230px;
        width: 240px;
      }
    }
    p{
      font-size: 24px;
    }
`