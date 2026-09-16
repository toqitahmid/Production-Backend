import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
<<<<<<< HEAD
    
=======
>>>>>>> 8ff9ef6ba6179f863da8f4059662152605a9a50f
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})