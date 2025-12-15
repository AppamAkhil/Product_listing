
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      authorize(credentials) {
        if (credentials.email === "user@test.com" && credentials.password === "123456") {
          return { id: 1, name: "User", email: "user@test.com" };
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/signin" }
};
