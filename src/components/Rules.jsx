import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Clicck on dice image</p>
            <p>after clicking on dice if selected number is equal to duce numberyou will get same point as dice{" "}</p>
            <p>If you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`