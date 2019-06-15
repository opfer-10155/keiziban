import React from 'react'

export default class UploadPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: null
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="for">アップロードするファイル</label>
          <input type="file" accept="image/png" />
          <input type="submit" value="アップロード" />
        </form>
      </div>
    )
  }

  handleSubmit = (e) => {
    const file = this.state.file
    this.sendFile(file)
  }

  handleOnChangeFile = (e) => {
    const file = e.target.files[0]
    this.setState({ file })
  }

  sendFile = (file) => {
    const url = 'localhost:3000/image'
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'image/png'
      },
      body: file
    }
    return fetch(url, request)
  }
}
