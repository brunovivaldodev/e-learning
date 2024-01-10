export function destructureObject(obj: any) {
  const [
    {
      fieldname: urlFieldName,
      originalname: urlOriginalName,
      encoding: urlEncoding,
      mimetype: urlMimetype,
      destination: urlDestination,
      filename: urlFilename,
      path: urlPath,
      size: urlSize,
    },
  ] = obj.thumbnail;

  const [
    {
      fieldname: coverUrlFieldName,
      originalname: coverUrlOriginalName,
      encoding: coverUrlEncoding,
      mimetype: coverUrlMimetype,
      destination: coverUrlDestination,
      filename: coverUrlFilename,
      path: coverUrlPath,
      size: coverUrlSize,
    },
  ] = obj.trailer;

  return {
    thumbnail: {
      fieldname: urlFieldName,
      originalname: urlOriginalName,
      encoding: urlEncoding,
      mimetype: urlMimetype,
      destination: urlDestination,
      filename: urlFilename,
      path: urlPath,
      size: urlSize,
    },
    trailer: {
      fieldname: coverUrlFieldName,
      originalname: coverUrlOriginalName,
      encoding: coverUrlEncoding,
      mimetype: coverUrlMimetype,
      destination: coverUrlDestination,
      filename: coverUrlFilename,
      path: coverUrlPath,
      size: coverUrlSize,
    },
  };
}
