import { NuxtAuthHandler } from '#auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authJs.secret,
    callbacks: {
        jwt: async ({token, user}) => {
          const isSignIn = user ? true : false;
          if (isSignIn) {
            token.jwt = user ? (user as any).access_token || '' : '';
            token.id = user ? user.id || '' : '';
            token.role = user ? (user as any).role || '' : '';
          }
          return Promise.resolve(token);
        },
        session: async ({session, token}) => {
          (session as any).role = token.role;
          (session as any).uid = token.id;
          return Promise.resolve(session);
        },
      },
    providers: [
        // @ts-expect-error
        DiscordProvider.default({
            clientId: useRuntimeConfig().authJs.providers.discord.clientId,
            clientSecret: useRuntimeConfig().authJs.providers.discord.clientSecret,
        })
    ]
})