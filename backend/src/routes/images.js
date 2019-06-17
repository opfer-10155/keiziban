
var express = require('express')
var router = express.Router()
// const fs = require('fs')
// const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 保存したいパス
    cb(null, '/var/image')
  },
  filename: function (req, file, cb) {
    // アップロードしたときのファイル名で保存
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post('/', upload.single('file'), (req, res, next) => {
  // POSTされた画像の情報をJSONで取得
  const reqFileJson = JSON.stringify(req.file)
  console.log(reqFileJson)
  // お好きな処理をここに

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
