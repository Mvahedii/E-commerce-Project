import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSection } from '../../Redux/Directory/DirectorySelectors'

import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'

const Directory = ({ section }) => (
  <div className='directory'>
    {
      section.map(item => (
        <MenuItem
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          size={item.size}
        />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  section: selectSection
})

export default connect(mapStateToProps)(Directory);