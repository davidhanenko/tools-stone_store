module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    breakpoints: {
      large: 1000,
      medium: 750,
      small: 500,
      xsmall: 320,
    },
    actionOptions: {
      upload: {
        transformation: {
            "width": 1920,
            "dpr": "auto",
            "crop": "fill"
          },
        fetch_format: 'auto',
        quality: 'auto:good',
        resource_type: 'auto',
        folder: 'A2Z',
      },
      delete: {},
    },
  },
});
