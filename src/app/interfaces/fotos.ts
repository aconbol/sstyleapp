export type Fotos = {
  id?: string;
  cliente: string;
  username: string;
  archivo: string;
  timestamp?: string;
  file?: S3Object;
  description?: string;
};

export type S3Object = {
  bucket: string;
  region: string;
  key: string;
};
