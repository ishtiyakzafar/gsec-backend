import multer from "multer"
import path from "path"

export const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { // setting destination of uploading
        if(file.fieldname === "report_file"){   // if uploading pdf or other file
            cb(null, "public/files")
        }
        else if(file.fieldname === "apply_file"){
            cb(null, "public/pdfs")
        }
        else if(file.fieldname === "consideration_image"){
            cb(null, "public/images")
        }
        else if(file.fieldname === "bannerfile"){
            cb(null, "public/images")
        }
        else{
            cb(null, "public/logo")
        }
    },
    filename: (req, file, cb) => {  // naming file
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}` )
    }
})

export const fileFilter = (req, file, cb) => {
    if(file.fieldname === "report_file" || file.fieldname === "apply_file"){
        if(file.mimetype === "application/pdf"){ // check file type to be pdf
            cb(null, true)
        }else{
            cb(null, false)
        }
    }else{
        if(
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        ){  // check file type to be png, jpeg, or jpg
            cb(null, true)
        }else{
            cb(null, false)
        }
    }
}