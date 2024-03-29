import React, { createContext, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Component as StyledComponent } from './Stepper.style'
import StepperContent from './StepperContent'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

export type StepperContextType =  {
  direction?: string,
  mainColor?: string,
  width?: number,
  height?: number,
  stepSize?: number,
  children?: React.ReactNode | any,
  content?: any[],
  active?: number,
  setActive?: React.Dispatch<React.SetStateAction<number>>,
  showTooltip?: boolean,
  showTitle?: boolean,
  showIndex?: boolean,
  lastChildId?: number
}  

interface Props {
  direction: string,
  currentStepNumber: number,
  steps: any[],
  stepSize?: number,
  mainColor?: string,
  goTo?: Function,
  showTooltip?: boolean,
  showTitle?: boolean
  showIndex?: boolean
  children?: any
}

export const StepperContext = createContext<StepperContextType>({})

const Stepper = (props: Props) => {
  const {
    direction,
    children,
    mainColor,
    stepSize,
    showTooltip,
    showTitle,
    showIndex,
    ...attributes
  } = props
  const containerRef = useRef<any>(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [content, setContent] = useState<any>([])
  const [active, setActive] = useState(1)
  const [lastChildId, setLastChildId] = useState(-1)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(containerRef.current.offsetWidth)
      setHeight(containerRef.current.offsetHeight)
    })
  }, [])
  useEffect(() => {
    const contentArray: any[] = []
    children.forEach((child, index) => {
      contentArray.push({ node: child.props.component, id: index + 1 })
    })
    setContent(contentArray)
  }, [])

  useEffect(() => {
    if (!children) return 

    const _lastChild = children[children?.length - 1]

    if (_lastChild) {
      setLastChildId(_lastChild?.props?.id)
    }
  }, [children])

  return (
    <ThemeProvider theme={theme}>
      <StepperContext.Provider
        value={{
          direction,
          mainColor,
          width,
          height,
          stepSize,
          children,
          content,
          active,
          setActive,
          showTooltip,
          showTitle,
          showIndex,
          lastChildId,
        }}
      >
        <StyledComponent
          direction={direction}
          {...attributes}
          background={mainColor}
          ref={containerRef}
        >
          <div className='step-row-2'>
            <div className='step-content'>
              {children.map((item) => {
                return item
              })}
            </div>
          </div>
          <StepperContent />
        </StyledComponent>
      </StepperContext.Provider>
    </ThemeProvider>
  )
}
Stepper.defaultProps = {
  direction: 'horizontal',
  currentStepNumber: 1,
  mainColor: theme.colors.dark900,
  stepSize: 45,
  showTooltip: true,
  showTitle: true
}
Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepSize: PropTypes.number,
  mainColor: PropTypes.string,
  goTo: PropTypes.func,
  showTooltip: PropTypes.bool,
  showTitle: PropTypes.bool
}
export default Stepper

export { Stepper as CDBStepper }
