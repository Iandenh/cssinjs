import React, {PureComponent, PropTypes} from 'react'
import {animateScroll} from 'react-scroll'

import ParallaxScene from '../ParallaxScene'
import NotFound from '../NotFound'
import Content from '../../containers/Content'

import {map as navMap, home} from '../../utils/navigation'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Common application page rapresenting class
 */
class Page extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    params: PropTypes.object
  }

  componentWillMount() {
    animateScroll.scrollToTop()
  }

  render() {
    const {
      sheet: {classes},
      params
    } = this.props

    const name = params.page || home.name

    const page = navMap[name]

    if (!page) return <NotFound />

    return (
      <div className={classes.container}>
        {name === home.name ? <ParallaxScene /> : <span className={classes.hidden} />}
        <div className={classes.content} id="mainContent">
          <Content {...page} />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Page)
