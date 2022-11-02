const multer = require("multer");
storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
exports.upload = multer({ storage: storage, limits: { fileSize: 500000 } });
