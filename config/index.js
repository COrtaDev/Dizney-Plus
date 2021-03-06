module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  access_id: process.env.AWS_S3_ACCESS_ID,
  secret: process.env.AWS_S3_SECRET,
  bucket: process.env.S3_BUCKET_NAME
};
