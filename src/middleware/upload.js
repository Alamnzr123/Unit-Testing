//import multer

const multer = require('multer');
// import path
const path = require('path');

// untuk management file
const multerUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();

        const fileName = Date.now() + '' + ext;
        cb(null, fileName);
    }
    }),

    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        console.log(ext);
        if(ext === '.jpg' || ext === '.png') {
            cb(null, true)
        }else{
            const error = {
                message: 'File must be jpg or png'
            }
            cb(error, false);
        }
    }
})

//untuk middleware
const upload = (req, res, next) => {
    const multerSingle = multerUpload.single('gambar')
    multerSingle(req, res, (err) => {
        if(err){
            res.json({
                message: 'err',
                error: err
            })
        }else{
            next()
        }
    });
}

module.exports = upload;