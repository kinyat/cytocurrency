import React from 'react'
import { StyledBaseLayout } from './style'

class BaseLayout extends React.PureComponent {
  render () {
    return (
      <StyledBaseLayout className='off-canvas-wrapper'>
        <div className='off-canvas-content'>
          <div className='grid-x'>
            <div className='cell'>
              {this.props.children}
            </div>
          </div>
        </div>
      </StyledBaseLayout>
    )
  }
}

export {
  BaseLayout
}
