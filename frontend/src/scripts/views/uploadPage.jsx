import React from 'react'
import FileUploadForm from '../components/uploadForm'

export default class UploadPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <FileUploadForm />
      </div>
    )
  }
}
