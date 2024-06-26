import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = {
  id: string;
  username: string | null;
  phoneNumber: string | null;
  jobTitle: String | null;
  about: String | null;
  bankAccountNumber: String | null;
  bankAccountName: String | null;
  bankName: String | null;
};

declare module "next-auth" {
  interface Session extends DefaultSession{
    user: ExtendedUser & DefaultSession["user"]
  }
}
