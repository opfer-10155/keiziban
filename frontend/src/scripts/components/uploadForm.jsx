import React from 'react'
import axios from 'axios'

export default class UploadPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: null,
      subject: 'aaa',
      year: 0,
      quarter: 0,
      teacher_name: '',
      test_time: 0,
      imageURL: '',
      downloadURL: ''
    }
  }

  render () {
    return (
      <div>
        <label htmlFor="file">アップロードするファイル</label>
        <input type="file" accept="image/png" name="file" onChange={this.handleOnChangeFile} />
        <label></label>
        <input type="text" onChange={this.handleOnChange('subject')} value={this.state.subject}></input>
        <input type="submit" value="アップロード" />
        <button onClick={this.handleSubmit}> 投稿 </button>
        <button onClick={this.getImage}> 画像を見る </button>
        <a id="download" href={this.state.imageURL} download="download-filename.png">
          <img src={this.state.imageURL}></img>
        </a>
      </div>
    )
  }

  getImage = () => {
    const url = 'https://httpbin.org/image/png'
    const config = {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'image/png'
      }
    }
    axios(url, config)
      .then((res) => {
        console.log(res)
        const blob = new Blob([res.data], { type: 'image/png' })
        const URL = window.URL || window.webkitURL
        const imageURL = URL.createObjectURL(blob)
        this.setState({ imageURL })
      })
  }

  handleSubmit = (e) => {
    console.log(this.state.subject)
    const file = this.state.file
    this.sendImage(file)
      .then((response) => { console.log(response.data) })
      .catch((err) => { console.error(err) })
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

  sendImage = (file) => {
    const url = 'http://localhost:3000/api/images'
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    const data = new FormData()
    data.append('file', file)
    console.log(file)
    return axios.post(url, data, { headers })
  }
}
