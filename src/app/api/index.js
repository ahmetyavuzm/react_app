// src/app/api/index.js

import contactHandler from './contact/route';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default contactHandler;
