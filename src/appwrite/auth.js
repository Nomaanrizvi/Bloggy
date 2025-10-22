import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      // Create user
      await this.account.create(ID.unique(), email, password, name);
      // Immediately log them in
      const session = await this.login({ email, password });
      return session;
    } catch (error) {
      console.log(error);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    try {
      // Prefer deleting the current session only
      await this.account.deleteSession("current");
    } catch (error) {
      console.log("error in logout:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
