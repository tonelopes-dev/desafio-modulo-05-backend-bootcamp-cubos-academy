const aws = require("aws-sdk");

const endpoint = new aws.Endpoint(process.env.AWS_ENDPOINT_BACKBLAZE);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_APP_KEY,
  },
});

const uploadImagem = async (path, buffer, mimetype) => {
  const imagem = await s3
    .upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return {
    path: imagem.Key,
    url: `https://${process.env.AWS_BUCKET_NAME}.${process.env.AWS_ENDPOINT_BACKBLAZE}/${imagem.Key}`,
  };
};

const excluirImagem = async (path) => {
  await s3
    .deleteObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: path,
    })
    .promise();
};

module.exports = {
  uploadImagem,
  excluirImagem,
};

