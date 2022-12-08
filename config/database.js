module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdng7f6n6mpuqrrl56r0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_9mjx'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'fUzFhAXjan2TGqqGKm2JixdZBL4sfzqn'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
