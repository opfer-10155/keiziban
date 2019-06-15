var express = require('express')
var router = express.Router()
const fs = require('fs')
// const path = require('path')

router.post('/', (req, res) => {
  saveImage(req)
    .then(() => res.send('created'))
    .catch((err) => alert(err))
})

function saveImage (req) {
  return new Promise((resolve, reject) => {
    const path = '../public/images'
    fs.writeFile(path, req.body, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = router
