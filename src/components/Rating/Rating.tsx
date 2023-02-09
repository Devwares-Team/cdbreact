import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import CDBTooltip from '../Popper'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

import PropTypes from 'prop-types'

interface Props {
  containerClassName?: string
  type?: string,
  CDBBtn?: any,
  CDBPopoverBody?: any,
  data?: any
  CDBPopoverHeader?: any,
  feedback?: boolean
  fillClassName?: string
  fillColors?: [boolean, string]
  getValue?: Function
  iconClassName?: string
  iconFaces?: boolean
  iconRegular?: boolean
  iconSize?: string
  submitHandler?: Function
  tag?: any
  tooltip?: any
  choosed?: any
}

const Rating = (props: Props) => {
  const {
    tag: Tag,
    containerClassName,
    iconClassName,
    iconFaces,
    iconSize,
    iconRegular,
    fillClassName,
    fillColors,
    tooltip,
    CDBBtn,
    CDBPopoverBody,
    CDBPopoverHeader,
    type,
    getValue,
    feedback,
    submitHandler,
    ...commonAttributes
  } = props

  const [data, setData] = useState<any>([])
  const [hovered, setHovered] = useState(null)
  const [choosed, setChoosed] = useState<{
    title: string
    index: null | number
  }>({
    title: '',
    index: null
  })
  const [feedbackValue, setFeedbackValue] = useState('')
  const [openedForm, setOpenedForm] = useState(null)

  const onDocumentClick = (e) => {
    if (!e.target.closest('.popover')) {
      setOpenedForm(null)
    }
  }

  useEffect(() => {
    window.addEventListener('click', onDocumentClick)
    return () => window.removeEventListener('click', onDocumentClick)
  }, [])

  useEffect(() => {
    setData(props.data)
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.data])

  useEffect(() => {
    const choosedIndex = data.findIndex((item) => item.choosed)

    if (choosedIndex !== -1) {
      setChoosed({ title: data[choosedIndex].tooltip, index: choosedIndex })
    }
  }, [data])

  useEffect(() => {
    if (props.getValue) {
      let { title, index } = choosed
      index = index !== null ? index + 1 : index

      props.getValue({ title, value: index })
    }
  }, [choosed, props])

  const handleMouseEnter = (_, index) => {
    setHovered(index)
  }

  const handleMouseLeave = () => {
    setHovered(null)
  }

  const handleClick = (title, index, e) => {
    e.stopPropagation()
    if (title === choosed.title && index === choosed.index) {
      setChoosed({ title: '', index: null })
      feedback && setOpenedForm(null)
    } else {
      setChoosed({ title, index })
      feedback &&
        setTimeout(() => {
          setOpenedForm(index)
        }, 1)
    }
  }

  const onCloseHanlder = () => {
    setFeedbackValue('')
    setOpenedForm(null)
  }

  const feedbackValueHandler = (e) => {
    setFeedbackValue(e.target.value)
  }

  const containerClasses = classNames(
    'mdb-rating',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    containerClassName
  )

  let renderedIcons = []

  if (data.length) {
    renderedIcons = data.map(
      (
        { icon = 'star', tooltip, far, size, choosed: _, ...itemAttributes },
        index
      ) => {
        const isChoosed = choosed.index !== null
        const isHovered = hovered !== null
        const isFormOpened = openedForm !== null
        const isFormActive = feedback && isFormOpened && openedForm === index

        let toFill = false

        if (isChoosed) {
          toFill = index <= choosed.index!

          if (isHovered && hovered > choosed.index!) {
            toFill = index <= hovered
          }
        } else if (isHovered) {
          toFill = index <= hovered
        }

        let fillColors: string = ''

        if (fillColors) {
          let current: number | null = null

          if (isChoosed) {
            current = choosed.index!
            if (isHovered) {
              current = hovered
            }
          } else if (isHovered) {
            current = hovered
          }

          const isCustom = Array.isArray(fillColors)

          const defaultFillColors = [
            'oneStar',
            'twoStars',
            'threeStars',
            'fourStars',
            'fiveStars'
          ]

          if (current !== null) {
            fillColors = isCustom
              ? fillColors[current]
              : defaultFillColors[current]
          }
        }

        let renderIcon = icon

        if (iconFaces) {
          const faces = ['angry', 'frown', 'meh', 'smile', 'laugh']
          renderIcon = 'meh-blank'

          if (isChoosed && index <= choosed.index!) {
            renderIcon = faces[choosed.index!]

            if (isHovered) {
              renderIcon = faces[hovered]
            }
          } else if (isHovered && index <= hovered) {
            renderIcon = faces[hovered]
          }
        }

        const iconClasses = classNames(
          iconRegular ? 'far' : false,
          icon ? `fa fa-${renderIcon}` : false,
          iconSize ? `fa-${size}` : false,
          'py-2 px-1 rate-popover',
          toFill && (fillColors ? fillColors : fillClassName),
          iconClassName
        )

        let tooltipContent = tooltip

        if (isFormActive) {
          tooltipContent = (
            <form
              onSubmit={(e) => {
                submitHandler(e, tooltip, openedForm + 1, feedbackValue)
                onCloseHanlder()
              }}
            >
              <CDBPopoverHeader>{tooltip}</CDBPopoverHeader>
              <CDBPopoverBody>
                <textarea

                  className='md-textarea form-control py-0'
                  value={feedbackValue}
                  onChange={feedbackValueHandler}
                // style={{ resize: 'none' }}
                />
                <div className='d-flex align-items-center justify-content-around mt-2'>
                  <CDBBtn type='submit' color='primary' size='sm'>
                    Submit!
                  </CDBBtn>
                  <button
                    onMouseDown={onCloseHanlder}
                    style={{
                      backgroundColor: '#fff',
                      border: 'none',
                      padding: '0.5rem 1.6rem'
                    }}
                  >
                    Close
                  </button>
                </div>
              </CDBPopoverBody>
            </form>
          )
        }

        return (
          <CDBTooltip
            key={tooltip}
            domElement
            placement='top'
            tag='span'
            popover={isFormActive}
            isVisible={isFormActive}
            clickable={isFormActive}
          >
            <span>
              <i
                style={{ cursor: 'pointer' }}
                {...commonAttributes}
                {...itemAttributes}
                className={iconClasses}
                data-index={index}
                data-original-title={tooltip}
                onMouseEnter={() => handleMouseEnter(tooltip, index)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleClick(tooltip, index, e)}
              ></i>
            </span>
            <div style={{ userSelect: 'none' }}>{tooltipContent}</div>
          </CDBTooltip>
        )
      }
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Tag data-test='rating' className={containerClasses}>
        {renderedIcons}
      </Tag>
    </ThemeProvider>
  )
}

Rating.propTypes = {
  containerClassName: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      choosed: PropTypes.bool,
      icon: PropTypes.string,
      tooltip: PropTypes.string
    })
  ),
  feedback: PropTypes.bool,
  fillClassName: PropTypes.string,
  fillColors: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  getValue: PropTypes.func,
  iconClassName: PropTypes.string,
  iconFaces: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  submitHandler: PropTypes.func,
  tag: PropTypes.string
}

Rating.defaultProps = {
  containerClassName: '',
  data: [
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok'
    },
    {
      tooltip: 'Good'
    },
    {
      tooltip: 'Excellent'
    }
  ],
  feedback: false,
  fillClassName: 'fiveStars',
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div',
  submitHandler: (e) => e.preventDefault()
}

export default Rating
export { Rating as CDBRating }
