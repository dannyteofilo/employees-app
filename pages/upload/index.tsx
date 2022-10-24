import React from 'react'
import { Dashboard } from '../../templates/dashboard'
import { StyledUpload } from './upload.styles'

const Upload = () => {
  return (
    <Dashboard>
      <StyledUpload>
      <div className='title'><h1>
      Upload page</h1></div>
      <section className="content">
          <div className='drag-container'>
            <div className='upload'><i className="fa-solid fa-plus"></i> Upload</div>
          </div>
        </section>
      </StyledUpload>
    </Dashboard>
  )
}

export default Upload
