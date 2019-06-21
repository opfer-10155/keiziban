
var express = require('express')
var router = express.Router()
// const fs = require('fs')
// const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 保存したいパス
    console.log(file.fieldname)
    cb(null, '/tmp/image')
  },
  filename: function (req, file, cb) {
    // アップロードしたときのファイル名で保存
    cb(null, file.originalname)
    console.log(file.fieldname)
  }
})
const upload = multer({ storage: storage })

router.post('/', upload.single('file'), (req, res, next) => {
  // お好きな処理をここに
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.json({ 'result': 'success!' })
})

// function saveImage (req) {
//   return new Promise((resolve, reject) => {
//     const path = '../public/images' + req.body.filename
//     fs.writeFile(path, req.body, (err) => {
//       if (err) reject(err)
//       else resolve()
//     })
//   })
// }

module.exports = router
