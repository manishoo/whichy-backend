import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.APP_PORT,
  postgres: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  onesignal: {
    apiKeys: [
      process.env.ONESIGNAL_API_KEY_JARAQE_DEFAULT,
    ],
    appIds: [
      process.env.ONESIGNAL_APP_ID_JARAQE_DEFAULT,
    ],
  },
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  },
  values: {
    // gameDefaultCoinPrize: 15,
    // gameDefaultTurnTime: 60 * 48, // two days
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  zarinpalApiKey: process.env.ZARINPAL_API_KEY,
}
