import { NuxtAuthHandler } from '#auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NuxtAuthHandler({
    secret: '1231312312312321',
    callbacks: {
        // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
        jwt: async ({token, user}) => {
          const isSignIn = user ? true : false;
          if (isSignIn) {
            token.jwt = user ? (user as any).access_token || '' : '';
            token.id = user ? user.id || '' : '';
            token.role = user ? (user as any).role || '' : '';
          }
          return Promise.resolve(token);
        },
        // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
        session: async ({session, token}) => {
          (session as any).role = token.role;
          (session as any).uid = token.id;
          return Promise.resolve(session);
        },
      },
    providers: [
        // @ts-expect-error
        DiscordProvider.default({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ]
})