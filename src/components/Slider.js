/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'


const Slider = () => {
  return <div css={SliderCSS}>Slider</div>
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider