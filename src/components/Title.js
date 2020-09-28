/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'



const Title = ({titleText}) => (
  <div
    css={css`
      position: absolute;
      bottom: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing:5px;
      font-size: 30px;
      font-weight: bold;
      color: #191970;
    `}
  >
    {titleText}
  </div>
)

export default Title