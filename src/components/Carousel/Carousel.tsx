import React, { Fragment, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CarouselControl from './CarouselControl'
import CarouselIndicator from './CarouselIndicator'
import CarouselIndicators from './CarouselIndicators'
import { Tag } from './Carousel.style'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../theme'

interface Props {

  length: number,
  activeItem: number,
  children: React.ReactNode,
  className: string,
  interval: [number, boolean],
  mobileGesture: boolean,
  multiItem: boolean,
  onHoverStop: boolean,
  showControls: boolean,
  showIndicators: boolean,
  slide: boolean,
  tag:  string,
  testimonial: boolean,
  thumbnails: boolean,
}

const Carousel = (props: Props) => {
  const {
    length,
    activeItem,
    children,
    className,
    interval,
    mobileGesture,
    multiItem,
    onHoverStop,
    showControls,
    showIndicators,
    slide,
    tag,
    testimonial,
    thumbnails,
    ...attributes
  } = props

  type StateType = {
    activeItem: number,
    initialLength: number
    srcArray: string[]
    swipeAvailable: boolean
    initialX: any
    initialY: any
  }

  const [state, setState] = useState<StateType>({
    activeItem: activeItem,
    initialLength: length,
    srcArray: [],
    swipeAvailable: true,
    initialX: null,
    initialY: null
  })
  const [cycleInterval, setCycleInterval] = useState<NodeJS.Timer>()

  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { interval, thumbnails, length } = props
    if (typeof interval === "boolean" && interval === false) {
      return
    }
    typeof interval === "number" && setCycleInterval(setInterval(next, interval))

    // get images src atr
    if (thumbnails) {
      const CarouselItemsArray = carouselRef.current!.querySelectorAll(
        '.carousel-item img'
      )

      const srcArray = Array.prototype.map.call(
        CarouselItemsArray,
        (item: { src: any }) => item.src
      )
      setState({ ...state, srcArray })
    }

    setState({ ...state, initialLength: length })

    return () => {
      const { interval } = props
      if (typeof interval === "boolean" && interval === false) {
        return
      }
      clearCycleIntervalHandler()
    }
  }, [])

  useEffect(() => {
    const { length } = props
    const initialLength = length

    if (state.initialLength !== length) {
      setState({ ...state, initialLength })
    }
  }, [state])

  const clearCycleIntervalHandler = () => clearInterval(cycleInterval)

  const swipeAvailableHandler = () =>
    setState({ ...state, swipeAvailable: true })

  const restartInterval = () => {
    const { interval } = props

    if (typeof interval === "number") {
      clearCycleIntervalHandler()
      setCycleInterval(setInterval(next, interval))
    }
  }

  const next = () => {
    const { activeItem, initialLength } = state
    const nextIndex = activeItem + 1
    const nextItem = nextIndex > initialLength ? 1 : nextIndex

    goToIndex(nextItem)
  }

  const prev = () => {
    const { activeItem, initialLength } = state
    const prevIndex = activeItem - 1
    const prevItem = prevIndex < 1 ? initialLength : prevIndex

    goToIndex(prevItem)
  }

  const goToIndex = (item: number) => {
    setState({
      ...state,
      activeItem: item
    })

    restartInterval()
  }

  const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const { mobileGesture } = props
    if (mobileGesture !== false) {
      setState({
        ...state,
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY
      })
    }
  }

  const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    setState({
      ...state,
      swipeAvailable: false
    })

    const { initialX, initialY } = state

    if (initialX === null || initialY === null) {
      return
    }

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY

    const diffX = initialX - currentX
    const diffY = initialY - currentY

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        next()
      } else {
        prev()
      }
    }

    setState({
      ...state,
      initialX: null,
      initialY: null
    })
  }

  // const getChildContext = () => {
  //   const { activeItem, initialLength } = state
  //   const { slide } = props
  //   return {
  //     activeItem,
  //     length: initialLength,
  //     slide
  //   }
  // }

  const { initialLength, srcArray, swipeAvailable } = state
  const ariaLabel = 'carousel'

  const classes = classNames(
    'carousel',
    multiItem ? 'carousel-multi-item' : 'carousel-fade',
    thumbnails ? 'carousel-thumbnails' : '',
    testimonial ? 'testimonial-carousel' : '',
    className
  )

  const CarouselIndicatorsArray: React.ReactNode[] = []
  for (let i = 1; i <= initialLength; i++) {
    const { activeItem } = state
    CarouselIndicatorsArray.push(
      <CarouselIndicator
        img={thumbnails ? srcArray[i - 1] : ""}
        key={i}
        active={activeItem === i}
        onClick={(_e) => goToIndex(i)}
      />
    )
  }

  const isMultiItem = !!multiItem
  const isTestimonial = !!testimonial

  return (
    <ThemeProvider theme={theme}>
      <Tag
        data-test='carousel'
       ref={carouselRef}
        {...attributes}
        className={classes}
        aria-label={ariaLabel}
        onTouchStart={startTouch}
        onTouchMove={swipeAvailable ? moveTouch : undefined}
         onTouchEnd={swipeAvailableHandler}
         onMouseEnter={onHoverStop ? clearCycleIntervalHandler : undefined}
         onMouseLeave={onHoverStop ? restartInterval : undefined}
        as={(tag as unknown) as undefined}
      >
        {showControls && multiItem && (
          <div className='controls-top'>
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              iconLeft
              className='btn-floating'
              direction='prev'
              // role='button'
              onClick={prev}         />
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              iconRight
              className='btn-floating'
              direction='next'
              // role='button'
              onClick={next}
            />
          </div>
        )}
        {children}
        {showControls && !multiItem && (
          <Fragment>
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              direction='prev'
              // role='button'
              onClick={prev}
            />
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              direction='next'
              // role='button'
              onClick={next} />
          </Fragment>
        )}
        {showIndicators && (
          <CarouselIndicators>{CarouselIndicatorsArray}</CarouselIndicators>
        )}
      </Tag>
    </ThemeProvider>
  )
}

Carousel.propTypes = {
  activeItem: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  length: PropTypes.number,
  mobileGesture: PropTypes.bool,
  multiItem: PropTypes.bool,
  onHoverStop: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool,
  thumbnails: PropTypes.bool,

}

Carousel.defaultProps = {
  interval: 6000,
  mobileGesture: true,
  onHoverStop: true,
  showControls: true,
  showIndicators: true,
  tag: 'div'
}

Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
}

export default Carousel
export { Carousel as CDBCarousel }