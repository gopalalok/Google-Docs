import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { db } from '../../../firebase';
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: "923847576734-h03im035ppcm3psrr46hv6842n5j8d3b.apps.googleusercontent.com",
      clientSecret: "90ubU1NkiVmw_vhYB9b5sJu2",
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  adapter: FirebaseAdapter(db),
})