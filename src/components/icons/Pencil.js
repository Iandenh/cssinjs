import React, {PropTypes} from 'react'
import cn from 'classnames'

import Icon from './Icon'

const Pencil = ({className}) => (
  <Icon>
    {({sheet: {classes}}) => (
      <svg
        className={cn(classes.icon, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 16"
      >
        <path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" />
      </svg>
    )}
  </Icon>
)

Pencil.propTypes = {
  className: PropTypes.string
}

Pencil.defaultProps = {
  className: ''
}

export default Pencil
