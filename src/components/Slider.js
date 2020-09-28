/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'
import Title from './Title';

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = props => {
  const { slides, titles } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
   
    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)


    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []

    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

  return (
      <div>
        <div css={SliderCSS}>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * _slides.length}
        >
          {_slides.map((_slide, i) => (
            <Slide width={getWidth()} key={_slide + i} content={_slide} />
          ))}
        </SliderContent>

        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />

        <Dots slides={slides} activeSlide={activeSlide} />
      </div>
      <div>
            <Title titleText={titles[activeSlide]}/> 
      </div>
      </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 70vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider