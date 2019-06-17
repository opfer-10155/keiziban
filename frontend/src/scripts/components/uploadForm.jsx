import React from 'react'
import axios from 'axios'

const base = {
  baseURL: 'http://localhost:3000/image'
}

export default class UploadPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: null,
      subject: 'aaa',
      year: 0,
      quarter: 0,
      teacher_name: '',
      test_time: 0
    }
  }

  render () {
    return (
      <div>
        <label htmlFor="file">アップロードするファイル
          <input type="file" accept="image/png" multiple="multiple" onChange={this.handleOnChangeFile} />
        </label>
        <label></label>
        <input type="text" onChange={this.handleOnChange('subject')} value={this.state.subject}></input>
        <input type="submit" value="アップロード" />
        <button onClick={this.handleSubmit}> 投稿 </button>
      </div>
    )
  }

  handleSubmit = (e) => {
    console.log(this.state.subject)
    const file = this.state.file
    this.sendFile(file)
      .then()
      .catch((err) => { throw err })
  }

  handleOnChangeFile = (e) => {
    const file = e.target.files[0]
    this.setState({ file })
  }

  handleOnChange = (propatyName) => {
    return (event) => {
      const value = event.target.value
      const newState = {}
      newState[propatyName] = value
      this.setState(newState)
    }
  }

  sendFile = (file) => {
    const url = 'http://localhost:3000/api/images'
    return axios.post(url, file)
  }

  sendInfo = (file_id) => {
    const body = {
      subject: this.state.subject

    }
  }
}
