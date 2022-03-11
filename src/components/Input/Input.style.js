import styled, { css } from 'styled-components'
import colors from '../../theme/colors'
import tinycolor from 'tinycolor2'

export const Component = styled.div`
  .bg {
    ${({ color }) =>
      color &&
      css`
        background: ${colors[`${color.toString() + `100`}`]} !important;
      `}
  }
  &.cdb-form.input-group label {
    top: 0;
    margin-bottom: 0;
  }
  &.cdb-form.input-group .input-group-text {
    background-color: #e0e0e0;
  }
  &.cdb-form.input-group .input-group-text.md-addon {
    font-weight: 500;
    background-color: transparent;
    border: none;
  }
  &.cdb-form.input-group .form-control {
    padding: 0.375rem 0.75rem;
    margin: 0;
  }
  &.cdb-form {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  &.cdb-form input:not([type]),
  &.cdb-form input[type='text']:not(.browser-default),
  &.cdb-form input[type='password']:not(.browser-default),
  &.cdb-form input[type='email']:not(.browser-default),
  &.cdb-form input[type='url']:not(.browser-default),
  &.cdb-form input[type='time']:not(.browser-default),
  &.cdb-form input[type='date']:not(.browser-default),
  &.cdb-form input[type='datetime']:not(.browser-default),
  &.cdb-form input[type='datetime-local']:not(.browser-default),
  &.cdb-form input[type='tel']:not(.browser-default),
  &.cdb-form input[type='number']:not(.browser-default),
  &.cdb-form input[type='search']:not(.browser-default),
  &.cdb-form input[type='phone']:not(.browser-default),
  &.cdb-form input[type='search-md'],
  &.cdb-form textarea.md-textarea {
    box-sizing: content-box;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    font-size: ${({ size }) => size && `${size}px`};
    ${({ color }) =>
      color &&
      css`
        border-bottom: 1px solid ${tinycolor(colors[`${color}`]).lighten(10)};
      `}
    border-radius: 4px;
    outline: none;
    box-shadow: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  &.cdb-form input:not([type]):focus:not([readonly]),
  &.cdb-form input[type='text']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='password']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='email']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='url']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='time']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='date']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='datetime']:not(.browser-default):focus:not([readonly]),
  &.cdb-form
    input[type='datetime-local']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='tel']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='number']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='search']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='phone']:not(.browser-default):focus:not([readonly]),
  &.cdb-form input[type='search-md']:focus:not([readonly]),
  &.cdb-form textarea.md-textarea:focus:not([readonly]) {
    ${({ color }) =>
      color &&
      css`
        border-bottom: 1px solid ${colors[`${color}`]};
        box-shadow: 0 1px 0 0 ${colors[`${color}`]};
      `}
  }
  &.cdb-form input:not([type]):focus:not([readonly]) + label,
  &.cdb-form
    input[type='text']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='password']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='email']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='url']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='time']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='date']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='datetime']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='tel']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='number']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='search']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form
    input[type='phone']:not(.browser-default):focus:not([readonly])
    + label,
  &.cdb-form input[type='search-md']:focus:not([readonly]) + label,
  &.cdb-form textarea.md-textarea:focus:not([readonly]) + label {
    color: #4285f4;
  }
  &.cdb-form input:not([type]) + label::after,
  &.cdb-form input[type='text']:not(.browser-default) + label::after,
  &.cdb-form input[type='password']:not(.browser-default) + label::after,
  &.cdb-form input[type='email']:not(.browser-default) + label::after,
  &.cdb-form input[type='url']:not(.browser-default) + label::after,
  &.cdb-form input[type='time']:not(.browser-default) + label::after,
  &.cdb-form input[type='date']:not(.browser-default) + label::after,
  &.cdb-form input[type='datetime']:not(.browser-default) + label::after,
  &.cdb-form input[type='datetime-local']:not(.browser-default) + label::after,
  &.cdb-form input[type='tel']:not(.browser-default) + label::after,
  &.cdb-form input[type='number']:not(.browser-default) + label::after,
  &.cdb-form input[type='search']:not(.browser-default) + label::after,
  &.cdb-form input[type='phone']:not(.browser-default) + label::after,
  &.cdb-form input[type='search-md'] + label::after,
  &.cdb-form textarea.md-textarea + label::after {
    position: absolute;
    top: 65px;
    display: block;
    content: '';
    opacity: 0;
    transition: 0.2s opacity ease-out, 0.2s color ease-out;
  }
  &.cdb-form input:not([type]).valid,
  &.cdb-form input:not([type]):focus.valid,
  &.cdb-form input[type='text']:not(.browser-default).valid,
  &.cdb-form input[type='text']:not(.browser-default):focus.valid,
  &.cdb-form input[type='password']:not(.browser-default).valid,
  &.cdb-form input[type='password']:not(.browser-default):focus.valid,
  &.cdb-form input[type='email']:not(.browser-default).valid,
  &.cdb-form input[type='email']:not(.browser-default):focus.valid,
  &.cdb-form input[type='url']:not(.browser-default).valid,
  &.cdb-form input[type='url']:not(.browser-default):focus.valid,
  &.cdb-form input[type='time']:not(.browser-default).valid,
  &.cdb-form input[type='time']:not(.browser-default):focus.valid,
  &.cdb-form input[type='date']:not(.browser-default).valid,
  &.cdb-form input[type='date']:not(.browser-default):focus.valid,
  &.cdb-form input[type='datetime']:not(.browser-default).valid,
  &.cdb-form input[type='datetime']:not(.browser-default):focus.valid,
  &.cdb-form input[type='datetime-local']:not(.browser-default).valid,
  &.cdb-form input[type='datetime-local']:not(.browser-default):focus.valid,
  &.cdb-form input[type='tel']:not(.browser-default).valid,
  &.cdb-form input[type='tel']:not(.browser-default):focus.valid,
  &.cdb-form input[type='number']:not(.browser-default).valid,
  &.cdb-form input[type='number']:not(.browser-default):focus.valid,
  &.cdb-form input[type='search']:not(.browser-default).valid,
  &.cdb-form input[type='search']:not(.browser-default):focus.valid,
  &.cdb-form input[type='phone']:not(.browser-default).valid,
  &.cdb-form input[type='phone']:not(.browser-default):focus.valid,
  &.cdb-form input[type='search-md'].valid,
  &.cdb-form input[type='search-md']:focus.valid,
  &.cdb-form textarea.md-textarea.valid,
  &.cdb-form textarea.md-textarea:focus.valid {
    border-bottom: 1px solid #00c851;
    box-shadow: 0 1px 0 0 #00c851;
  }
  &.cdb-form input:not([type]).valid + label:after,
  &.cdb-form input:not([type]):focus.valid + label:after,
  &.cdb-form input[type='text']:not(.browser-default).valid + label:after,
  &.cdb-form input[type='text']:not(.browser-default):focus.valid + label:after,
  &.cdb-form input[type='password']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='email']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='url']:not(.browser-default).valid + label:after,
  &.cdb-form input[type='url']:not(.browser-default):focus.valid + label:after,
  &.cdb-form input[type='time']:not(.browser-default).valid + label:after,
  &.cdb-form input[type='time']:not(.browser-default):focus.valid + label:after,
  &.cdb-form input[type='date']:not(.browser-default).valid + label:after,
  &.cdb-form input[type='date']:not(.browser-default):focus.valid + label:after,
  &.cdb-form input[type='datetime']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='tel']:not(.browser-default).valid + label:after,
  &.cdb-form input[type='tel']:not(.browser-default):focus.valid + label:after,
  &.cdb-form input[type='number']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='search']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='phone']:not(.browser-default).valid + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default):focus.valid
    + label:after,
  &.cdb-form input[type='search-md'].valid + label:after,
  &.cdb-form input[type='search-md']:focus.valid + label:after,
  &.cdb-form textarea.md-textarea.valid + label:after,
  &.cdb-form textarea.md-textarea:focus.valid + label:after {
    color: #00c851;
    content: attr(data-success);
    opacity: 1;
  }
  &.cdb-form input:not([type]).invalid,
  &.cdb-form input:not([type]):focus.invalid,
  &.cdb-form input[type='text']:not(.browser-default).invalid,
  &.cdb-form input[type='text']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='password']:not(.browser-default).invalid,
  &.cdb-form input[type='password']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='email']:not(.browser-default).invalid,
  &.cdb-form input[type='email']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='url']:not(.browser-default).invalid,
  &.cdb-form input[type='url']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='time']:not(.browser-default).invalid,
  &.cdb-form input[type='time']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='date']:not(.browser-default).invalid,
  &.cdb-form input[type='date']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='datetime']:not(.browser-default).invalid,
  &.cdb-form input[type='datetime']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='datetime-local']:not(.browser-default).invalid,
  &.cdb-form input[type='datetime-local']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='tel']:not(.browser-default).invalid,
  &.cdb-form input[type='tel']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='number']:not(.browser-default).invalid,
  &.cdb-form input[type='number']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='search']:not(.browser-default).invalid,
  &.cdb-form input[type='search']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='phone']:not(.browser-default).invalid,
  &.cdb-form input[type='phone']:not(.browser-default):focus.invalid,
  &.cdb-form input[type='search-md'].invalid,
  &.cdb-form input[type='search-md']:focus.invalid,
  &.cdb-form textarea.md-textarea.invalid,
  &.cdb-form textarea.md-textarea:focus.invalid {
    border-bottom: 1px solid #f44336;
    box-shadow: 0 1px 0 0 #f44336;
  }
  &.cdb-form input:not([type]).invalid + label:after,
  &.cdb-form input:not([type]):focus.invalid + label:after,
  &.cdb-form input[type='text']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='password']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='email']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='url']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='time']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='date']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='datetime']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='tel']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='number']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='search']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='phone']:not(.browser-default).invalid + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default):focus.invalid
    + label:after,
  &.cdb-form input[type='search-md'].invalid + label:after,
  &.cdb-form input[type='search-md']:focus.invalid + label:after,
  &.cdb-form textarea.md-textarea.invalid + label:after,
  &.cdb-form textarea.md-textarea:focus.invalid + label:after {
    color: #f44336;
    content: attr(data-error);
    opacity: 1;
  }
  &.cdb-form input:not([type]).form-control.valid + label:after,
  &.cdb-form input:not([type]).form-control:focus.valid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control:focus.valid
    + label:after,
  &.cdb-form input[type='search-md'].form-control.valid + label:after,
  &.cdb-form input[type='search-md'].form-control:focus.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control:focus.valid + label:after {
    top: 4.1rem;
  }
  &.cdb-form input:not([type]).form-control.invalid + label:after,
  &.cdb-form input:not([type]).form-control:focus.invalid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control:focus.invalid
    + label:after,
  &.cdb-form input[type='search-md'].form-control.invalid + label:after,
  &.cdb-form input[type='search-md'].form-control:focus.invalid + label:after,
  &.cdb-form textarea.md-textarea.form-control.invalid + label:after,
  &.cdb-form textarea.md-textarea.form-control:focus.invalid + label:after {
    top: 4rem;
  }
  &.cdb-form input:not([type]).form-control-lg.valid + label:after,
  &.cdb-form input:not([type]).form-control-lg:focus.valid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-lg.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-lg:focus.valid
    + label:after,
  &.cdb-form input[type='search-md'].form-control-lg.valid + label:after,
  &.cdb-form input[type='search-md'].form-control-lg:focus.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control-lg.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
    top: 4.6rem;
  }
  &.cdb-form input:not([type]).form-control-lg.invalid + label:after,
  &.cdb-form input:not([type]).form-control-lg:focus.invalid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-lg.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-lg:focus.invalid
    + label:after,
  &.cdb-form input[type='search-md'].form-control-lg.invalid + label:after,
  &.cdb-form
    input[type='search-md'].form-control-lg:focus.invalid
    + label:after,
  &.cdb-form textarea.md-textarea.form-control-lg.invalid + label:after,
  &.cdb-form textarea.md-textarea.form-control-lg:focus.invalid + label:after {
    top: 4.6rem;
  }
  &.cdb-form input:not([type]).form-control-sm.valid + label:after,
  &.cdb-form input:not([type]).form-control-sm:focus.valid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-sm.valid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-sm:focus.valid
    + label:after,
  &.cdb-form input[type='search-md'].form-control-sm.valid + label:after,
  &.cdb-form input[type='search-md'].form-control-sm:focus.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control-sm.valid + label:after,
  &.cdb-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
    top: 3.7rem;
  }
  &.cdb-form input:not([type]).form-control-sm.invalid + label:after,
  &.cdb-form input:not([type]).form-control-sm:focus.invalid + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='text']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='password']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='email']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='url']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='time']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='date']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='datetime']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='datetime-local']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='tel']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='number']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='search']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-sm.invalid
    + label:after,
  &.cdb-form
    input[type='phone']:not(.browser-default).form-control-sm:focus.invalid
    + label:after,
  &.cdb-form input[type='search-md'].form-control-sm.invalid + label:after,
  &.cdb-form
    input[type='search-md'].form-control-sm:focus.invalid
    + label:after,
  &.cdb-form textarea.md-textarea.form-control-sm.invalid + label:after,
  &.cdb-form textarea.md-textarea.form-control-sm:focus.invalid + label:after {
    top: 3.6rem;
  }
  &.cdb-form > input[type='date']:not(.browser-default) + label {
    transform: translateY(-27px) scale(0.8);
    transform-origin: 0 0;
  }
  &.cdb-form
    > input[type]:-webkit-autofill:not(.browser-default):not([type='search'])
    + label,
  &.cdb-form > input[type='time']:not(.browser-default) + label {
    font-size: 0.8rem;
    transform: translateY(-25px);
    transform-origin: 0 0;
  }
  &.cdb-form .was-validated input[type='text']:valid + label {
    color: #00c851 !important;
  }
  &.cdb-form .was-validated input[type='text']:invalid + label {
    color: #f44336 !important;
  }
  &.cdb-form .was-validated .form-control:valid:focus {
    box-shadow: 0 1px 0 0 #00c851 !important;
  }
  &.cdb-form .was-validated .form-control:valid {
    border-color: #00c851 !important;
  }
  &.cdb-form .was-validated .form-control:invalid:focus {
    box-shadow: 0 1px 0 0 #f44336 !important;
  }
  &.cdb-form .was-validated .form-control:invalid {
    border-color: #f44336 !important;
  }
  &.cdb-form .form-control {
    height: auto;
    padding: 0.6rem 0 0.4rem 0;
    margin: 0 0 0.5rem 0;
    background-color: transparent;
  }
  &.cdb-form .form-control:focus {
    box-shadow: none;
  }
  &.cdb-form .form-control:disabled,
  &.cdb-form .form-control[readonly] {
    background-color: transparent;
    border-bottom: 1px solid #bdbdbd;
  }
  &.cdb-form .form-control.is-valid {
    border-color: #00c851;
  }
  &.cdb-form .form-control.is-valid:focus {
    border-color: #00c851 !important;
    box-shadow: 0 1px 0 0 #00c851 !important;
  }
  &.cdb-form .form-control.is-invalid {
    border-color: #f44336;
  }
  &.cdb-form .form-control.is-invalid:focus {
    border-color: #f44336 !important;
    box-shadow: 0 1px 0 0 #f44336 !important;
  }
  &.cdb-form .form-control.is-valid,
  &.cdb-form .form-control.is-invalid {
    background-position: center right !important;
  }
  &.cdb-form .validate {
    margin-bottom: 2.5rem;
  }
  &.cdb-form label.active {
    font-weight: 700;
  }
  &.cdb-form .prefix {
    top: 0.25rem;
    font-size: 1.75rem;
  }
  &.cdb-form .prefix ~ input,
  &.cdb-form .prefix ~ textarea {
    width: calc(100% - 2.5rem);
    margin-left: 2.5rem;
  }
  &.cdb-form .prefix ~ label {
    margin-left: 2.5rem;
  }
  &.cdb-form .prefix ~ .form-text {
    margin-left: 2.6rem;
  }
  &.cdb-form label {
    position: absolute;
    top: 50%;
    left: 0;
    font-size: 1rem;
    color: #757575;
    cursor: text;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transform: translateY(-50%);
    transform-origin: 0% 100%;
    font-size: ${(props) => props.size && `${props.size}px`} !important;
  }
  &.cdb-form label.active {
    // transform: translateY(-14px);
  }
  &.cdb-form .prefix {
    position: absolute;
    transition: color 0.2s;
  }
  &.cdb-form .prefix.active {
    color: #4285f4;
  }
  &.cdb-form textarea.md-textarea {
    padding: 0;
    overflow-y: hidden;
  }
  &.cdb-form textarea.md-textarea + label {
    top: -0.6rem;
  }
  &.cdb-form textarea.md-textarea-auto {
    padding: 0;
    padding-top: 1.5rem;
  }
  &.cdb-form textarea.md-textarea-auto + label {
    top: 0;
  }
  &.cdb-form.md-outline {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  &.cdb-form.md-outline input[type='text'],
  &.cdb-form.md-outline input[type='password'],
  &.cdb-form.md-outline input[type='email'],
  &.cdb-form.md-outline input[type='url'],
  &.cdb-form.md-outline input[type='time'],
  &.cdb-form.md-outline input[type='date'],
  &.cdb-form.md-outline input[type='datetime-local'],
  &.cdb-form.md-outline input[type='tel'],
  &.cdb-form.md-outline input[type='number'],
  &.cdb-form.md-outline input[type='search-md'],
  &.cdb-form.md-outline input[type='search'],
  &.cdb-form.md-outline textarea.md-textarea {
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid #dadce0;
    border-radius: 4px;
    outline: none;
    box-shadow: none;
    transition: all 0.3s;
  }
  &.cdb-form.md-outline input[type='text']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='password']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='email']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='url']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='time']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='date']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='datetime-local']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='tel']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='number']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='search-md']:focus:not([readonly]),
  &.cdb-form.md-outline input[type='search']:focus:not([readonly]),
  &.cdb-form.md-outline textarea.md-textarea:focus:not([readonly]) {
    ${({ color }) =>
      color &&
      css`
        border-color: ${colors[`${color}`]};
        box-shadow: inset 0 0 0 1px ${colors[`${color}`]};
      `}
  }
  &.cdb-form.md-outline input[type='text']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='password']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='email']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='url']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='time']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='date']:focus:not([readonly]) + label,
  &.cdb-form.md-outline
    input[type='datetime-local']:focus:not([readonly])
    + label,
  &.cdb-form.md-outline input[type='tel']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='number']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='search-md']:focus:not([readonly]) + label,
  &.cdb-form.md-outline input[type='search']:focus:not([readonly]) + label,
  &.cdb-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
    // color: #4285f4;
    ${({ color }) =>
      color &&
      css`
        color: ${colors[`${color}`]};
      `}
  }
  &.cdb-form.md-outline input[type='text'].valid,
  &.cdb-form.md-outline input[type='text']:focus.valid,
  &.cdb-form.md-outline input[type='password'].valid,
  &.cdb-form.md-outline input[type='password']:focus.valid,
  &.cdb-form.md-outline input[type='email'].valid,
  &.cdb-form.md-outline input[type='email']:focus.valid,
  &.cdb-form.md-outline input[type='url'].valid,
  &.cdb-form.md-outline input[type='url']:focus.valid,
  &.cdb-form.md-outline input[type='time'].valid,
  &.cdb-form.md-outline input[type='time']:focus.valid,
  &.cdb-form.md-outline input[type='date'].valid,
  &.cdb-form.md-outline input[type='date']:focus.valid,
  &.cdb-form.md-outline input[type='datetime-local'].valid,
  &.cdb-form.md-outline input[type='datetime-local']:focus.valid,
  &.cdb-form.md-outline input[type='tel'].valid,
  &.cdb-form.md-outline input[type='tel']:focus.valid,
  &.cdb-form.md-outline input[type='number'].valid,
  &.cdb-form.md-outline input[type='number']:focus.valid,
  &.cdb-form.md-outline input[type='search-md'].valid,
  &.cdb-form.md-outline input[type='search-md']:focus.valid,
  &.cdb-form.md-outline input[type='search'].valid,
  &.cdb-form.md-outline input[type='search']:focus.valid,
  &.cdb-form.md-outline textarea.md-textarea.valid,
  &.cdb-form.md-outline textarea.md-textarea:focus.valid {
    border-color: #00c851;
    box-shadow: inset 0 0 0 1px #00c851;
  }
  &.cdb-form.md-outline input[type='text']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='text'].valid + label:after,
  &.cdb-form.md-outline input[type='text']:focus.valid + label:after,
  &.cdb-form.md-outline
    input[type='password']:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline input[type='password'].valid + label:after,
  &.cdb-form.md-outline input[type='password']:focus.valid + label:after,
  &.cdb-form.md-outline input[type='email']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='email'].valid + label:after,
  &.cdb-form.md-outline input[type='email']:focus.valid + label:after,
  &.cdb-form.md-outline input[type='url']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='url'].valid + label:after,
  &.cdb-form.md-outline input[type='url']:focus.valid + label:after,
  &.cdb-form.md-outline input[type='time']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='time'].valid + label:after,
  &.cdb-form.md-outline input[type='time']:focus.valid + label:after,
  &.cdb-form.md-outline input[type='date']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='date'].valid + label:after,
  &.cdb-form.md-outline input[type='date']:focus.valid + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local']:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline input[type='datetime-local'].valid + label:after,
  &.cdb-form.md-outline input[type='datetime-local']:focus.valid + label:after,
  &.cdb-form.md-outline input[type='tel']:focus:not([readonly]).valid + label,
  &.cdb-form.md-outline input[type='tel'].valid + label:after,
  &.cdb-form.md-outline input[type='tel']:focus.valid + label:after,
  &.cdb-form.md-outline
    input[type='number']:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline input[type='number'].valid + label:after,
  &.cdb-form.md-outline input[type='number']:focus.valid + label:after,
  &.cdb-form.md-outline
    input[type='search-md']:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline input[type='search-md'].valid + label:after,
  &.cdb-form.md-outline input[type='search-md']:focus.valid + label:after,
  &.cdb-form.md-outline
    input[type='search']:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline input[type='search'].valid + label:after,
  &.cdb-form.md-outline input[type='search']:focus.valid + label:after,
  &.cdb-form.md-outline
    textarea.md-textarea:focus:not([readonly]).valid
    + label,
  &.cdb-form.md-outline textarea.md-textarea.valid + label:after,
  &.cdb-form.md-outline textarea.md-textarea:focus.valid + label:after {
    color: #00c851;
    content: attr(data-success);
    opacity: 1;
  }
  &.cdb-form.md-outline input[type='text'].invalid,
  &.cdb-form.md-outline input[type='text']:focus.invalid,
  &.cdb-form.md-outline input[type='password'].invalid,
  &.cdb-form.md-outline input[type='password']:focus.invalid,
  &.cdb-form.md-outline input[type='email'].invalid,
  &.cdb-form.md-outline input[type='email']:focus.invalid,
  &.cdb-form.md-outline input[type='url'].invalid,
  &.cdb-form.md-outline input[type='url']:focus.invalid,
  &.cdb-form.md-outline input[type='time'].invalid,
  &.cdb-form.md-outline input[type='time']:focus.invalid,
  &.cdb-form.md-outline input[type='date'].invalid,
  &.cdb-form.md-outline input[type='date']:focus.invalid,
  &.cdb-form.md-outline input[type='datetime-local'].invalid,
  &.cdb-form.md-outline input[type='datetime-local']:focus.invalid,
  &.cdb-form.md-outline input[type='tel'].invalid,
  &.cdb-form.md-outline input[type='tel']:focus.invalid,
  &.cdb-form.md-outline input[type='number'].invalid,
  &.cdb-form.md-outline input[type='number']:focus.invalid,
  &.cdb-form.md-outline input[type='search-md'].invalid,
  &.cdb-form.md-outline input[type='search-md']:focus.invalid,
  &.cdb-form.md-outline input[type='search'].invalid,
  &.cdb-form.md-outline input[type='search']:focus.invalid,
  &.cdb-form.md-outline textarea.md-textarea.invalid,
  &.cdb-form.md-outline textarea.md-textarea:focus.invalid {
    border-color: #f44336;
    box-shadow: inset 0 0 0 1px #f44336;
  }
  &.cdb-form.md-outline
    input[type='text']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='text'].invalid + label:after,
  &.cdb-form.md-outline input[type='text']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='password']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='password'].invalid + label:after,
  &.cdb-form.md-outline input[type='password']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='email']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='email'].invalid + label:after,
  &.cdb-form.md-outline input[type='email']:focus.invalid + label:after,
  &.cdb-form.md-outline input[type='url']:focus:not([readonly]).invalid + label,
  &.cdb-form.md-outline input[type='url'].invalid + label:after,
  &.cdb-form.md-outline input[type='url']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='time']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='time'].invalid + label:after,
  &.cdb-form.md-outline input[type='time']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='date']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='date'].invalid + label:after,
  &.cdb-form.md-outline input[type='date']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='datetime-local'].invalid + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local']:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='tel']:focus:not([readonly]).invalid + label,
  &.cdb-form.md-outline input[type='tel'].invalid + label:after,
  &.cdb-form.md-outline input[type='tel']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='number']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='number'].invalid + label:after,
  &.cdb-form.md-outline input[type='number']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='search-md']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='search-md'].invalid + label:after,
  &.cdb-form.md-outline input[type='search-md']:focus.invalid + label:after,
  &.cdb-form.md-outline
    input[type='search']:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline input[type='search'].invalid + label:after,
  &.cdb-form.md-outline input[type='search']:focus.invalid + label:after,
  &.cdb-form.md-outline
    textarea.md-textarea:focus:not([readonly]).invalid
    + label,
  &.cdb-form.md-outline textarea.md-textarea.invalid + label:after,
  &.cdb-form.md-outline textarea.md-textarea:focus.invalid + label:after {
    color: #f44336;
    content: attr(data-error);
    opacity: 1;
  }
  &.cdb-form.md-outline input[type='text'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='text'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='password'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='password'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='email'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='email'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='url'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='url'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='time'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='time'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='date'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='date'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local'].form-control.valid
    + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='tel'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='tel'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='number'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='number'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline
    input[type='search-md'].form-control.valid
    + label:after,
  &.cdb-form.md-outline
    input[type='search-md'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline input[type='search'].form-control.valid + label:after,
  &.cdb-form.md-outline
    input[type='search'].form-control:focus.valid
    + label:after,
  &.cdb-form.md-outline textarea.md-textarea.form-control.valid + label:after,
  &.cdb-form.md-outline
    textarea.md-textarea.form-control:focus.valid
    + label:after {
    position: absolute;
    top: 4rem;
    left: 0;
  }
  &.cdb-form.md-outline input[type='text'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='text'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='password'].form-control.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='password'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='email'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='email'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='url'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='url'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='time'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='time'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='date'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='date'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local'].form-control.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='datetime-local'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='tel'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='tel'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='number'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='number'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='search-md'].form-control.invalid
    + label:after,
  &.cdb-form.md-outline
    input[type='search-md'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline input[type='search'].form-control.invalid + label:after,
  &.cdb-form.md-outline
    input[type='search'].form-control:focus.invalid
    + label:after,
  &.cdb-form.md-outline textarea.md-textarea.form-control.invalid + label:after,
  &.cdb-form.md-outline
    textarea.md-textarea.form-control:focus.invalid
    + label:after {
    position: absolute;
    top: 4rem;
    left: 0;
  }
  &.cdb-form.md-outline
    > input[type]:-webkit-autofill:not(.browser-default):not([type='search'])
    + label,
  &.cdb-form.md-outline > input[type='time']:not(.browser-default) + label {
    // background: #fff;
    ${({ color }) =>
      color &&
      css`
        background: ${colors[`${color.toString() + `100`}`]} !important;
      `}
    transform: translateY(-9px) scale(0.8);
    transform-origin: 0 0;
  }
  &.cdb-form.md-outline
    > input[type]:-webkit-autofill:not(.browser-default):not([type='search'])
    + label.active,
  &.cdb-form.md-outline
    > input[type='time']:not(.browser-default)
    + label.active {
    transform: translateY(-9px) scale(0.8);
    transform-origin: 0 0;
  }
  @-webkit-keyframes autofill {
    to {
      color: #495057;
      background: transparent;
    }
  }
  @keyframes autofill {
    to {
      color: #495057;
      background: transparent;
    }
  }
  &.cdb-form.md-outline input:-webkit-autofill {
    -webkit-animation-name: autofill;
    animation-name: autofill;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  &.cdb-form.md-outline .form-control {
    padding: 4px 10px;
  }
  &.cdb-form.md-outline label {
    position: absolute;
    top: 50%;
    left: 0;
    padding-left: 10px;
    font-size: 1rem;
    color: #757575;
    cursor: text;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transform: translateY(-50%);
    transform-origin: 0% 100%;
  }
  &.cdb-form.md-outline label.active {
    font-weight: 700;
    // background: #fff;
  }
  &.cdb-form.md-outline .prefix {
    position: absolute;
    top: 0.6rem;
    font-size: 20px;
    transition: color 0.2s;
  }
  &.cdb-form.md-outline .prefix:focus {
    color: #4285f4;
  }
  &.cdb-form.md-outline .prefix ~ input,
  &.cdb-form.md-outline .prefix ~ textarea {
    width: calc(100% - 2rem);
    margin-left: 2rem;
  }
  &.cdb-form.md-outline .prefix ~ label {
    margin-left: 2rem;
  }
  &.cdb-form.md-outline .prefix ~ .form-text {
    margin-left: 2.1rem;
  }
  &.cdb-form.md-outline .character-counter {
    margin-top: -0.5rem;
  }
  &.cdb-form.md-bg input[type='text'],
  &.cdb-form.md-bg input[type='password'],
  &.cdb-form.md-bg input[type='email'],
  &.cdb-form.md-bg input[type='url'],
  &.cdb-form.md-bg input[type='time'],
  &.cdb-form.md-bg input[type='date'],
  &.cdb-form.md-bg input[type='datetime-local'],
  &.cdb-form.md-bg input[type='tel'],
  &.cdb-form.md-bg input[type='number'],
  &.cdb-form.md-bg input[type='search-md'],
  &.cdb-form.md-bg input[type='search'],
  &.cdb-form.md-bg textarea.md-textarea {
    box-sizing: border-box;
    padding: 10px 5px;
    background: #f5f5f5 no-repeat;
    background-image: linear-gradient(to bottom, #4285f4, #4285f4),
      linear-gradient(to bottom, #ced4da, #ced4da);
    background-position: 50% 100%, 50% 100%;
    background-size: 0 2px, 100% 1px;
    border: 0;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  }
  &.cdb-form.md-bg input[type='text']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='password']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='email']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='url']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='time']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='date']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='datetime-local']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='tel']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='number']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='search-md']:focus:not([readonly]),
  &.cdb-form.md-bg input[type='search']:focus:not([readonly]),
  &.cdb-form.md-bg textarea.md-textarea:focus:not([readonly]) {
    border-bottom: none;
    box-shadow: none;
  }
  &.cdb-form.md-bg input[type='text']:focus,
  &.cdb-form.md-bg input[type='password']:focus,
  &.cdb-form.md-bg input[type='email']:focus,
  &.cdb-form.md-bg input[type='url']:focus,
  &.cdb-form.md-bg input[type='time']:focus,
  &.cdb-form.md-bg input[type='date']:focus,
  &.cdb-form.md-bg input[type='datetime-local']:focus,
  &.cdb-form.md-bg input[type='tel']:focus,
  &.cdb-form.md-bg input[type='number']:focus,
  &.cdb-form.md-bg input[type='search-md']:focus,
  &.cdb-form.md-bg input[type='search']:focus,
  &.cdb-form.md-bg textarea.md-textarea:focus {
    background-color: #dcdcdc;
    background-size: 100% 2px, 100% 1px;
    outline: none;
  }
  &.cdb-form.md-bg > input[type='date']:not(.browser-default) + label {
    transform: translateY(-12px) scale(0.8);
    transform-origin: 0 0;
  }
  &.cdb-form.md-bg
    > input[type]:-webkit-autofill:not(.browser-default):not([type='search'])
    + label,
  &.cdb-form.md-bg > input[type='time']:not(.browser-default) + label {
    font-size: 0.8rem;
    transform: translateY(-12px);
    transform-origin: 0 0;
  }
  &.cdb-form.md-bg .form-control {
    padding: 1.1rem 0.7rem 0.4rem !important;
  }
  &.cdb-form.md-bg label {
    top: 0;
    padding-left: 0.7rem;
    font-size: 1rem;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transform: translateY(13px);
    transform-origin: 0% 100%;
  }
  &.cdb-form.md-bg label.active {
    padding-left: 0.75rem;
    font-weight: 500;
    transform: translateY(-3px) scale(0.8);
  }
  &.cdb-form .form-control.is-invalid,
  .was-validated &.cdb-form .form-control:invalid {
    padding-right: 0;
  }
  &.cdb-form .form-control.is-valid,
  .was-validated &.cdb-form .form-control:valid {
    padding-right: 0;
  }
  .needs-validation &.cdb-form label {
    left: 0.3rem;
  }
  .custom-file-input:lang(es) ~ .custom-file-label::after {
    content: 'Elegir';
  }
  .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
    content: 'Wybierz';
  }
  .custom-file-input:lang(fr) ~ .custom-file-label::after {
    content: 'Choisir';
  }
  .custom-file-input:lang(in) ~ .custom-file-label::after {
    content: 'Pilih';
  }
  .custom-file-input:lang(zh) ~ .custom-file-label::after {
    content: '選擇';
  }
  .custom-file-input:lang(de) ~ .custom-file-label::after {
    content: 'Wählen';
  }
  .custom-file-input:lang(ru) ~ .custom-file-label::after {
    content: 'Выбрать';
  }
  &.cdb-form > label {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.cdb-form .form-control {
    box-sizing: border-box !important;
  }
  &.cdb-form .input-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.2s;
    color: rgba(0, 0, 0, 0.87);
    pointer-events: none;
  }
  &.cdb-form .input-prefix.active {
    color: #4285f4;
  }
  &.cdb-form.input-with-pre-icon label {
    left: 36px;
    right: initial;
  }
  &.cdb-form.input-with-pre-icon .input-prefix {
    left: 16px;
    right: initial;
  }
  &.cdb-form.input-with-pre-icon .form-control {
    padding-left: 2.7rem !important;
  }
  &.cdb-form.input-with-post-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.cdb-form.input-with-post-icon .form-control {
    padding-right: 2.7rem !important;
  }
  &.cdb-form.input-with-post-icon.input-with-pre-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.cdb-form.input-with-post-icon.input-with-pre-icon
    .input-prefix:first-of-type {
    left: 16px;
    right: initial;
  }
  &.cdb-form.input-with-post-icon.input-with-pre-icon .form-control {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
`
