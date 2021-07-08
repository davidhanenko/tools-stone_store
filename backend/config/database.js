module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'a2z'),
        username: env('DATABASE_USERNAME', 'david'),
        password: env('DATABASE_PASSWORD', 'qqqwww123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
