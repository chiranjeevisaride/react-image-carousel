/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'



const Title = ({ slides}) => (
  <div
    css={css`
      position: absolute;
      top: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
)

export default Dots