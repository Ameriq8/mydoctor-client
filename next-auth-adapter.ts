import axios from "axios";
import type {
  Adapter,
  AdapterUser,
  VerificationToken,
  AdapterSession,
} from "next-auth/adapters";

export default function MyAdapter(baseUrl: string): Adapter {
  return {
    async createUser(user: Omit<AdapterUser, "id">): Promise<AdapterUser | null> {
      try {
        const response = await axios.post(`${baseUrl}/users`, user);
        return response.data;
      } catch (error) {
        console.error("Error creating user:", error);
        return null;
      }
    },

    async getUser(id: string): Promise<AdapterUser | null> {
      try {
        const response = await axios.get(`${baseUrl}/users/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error getting user:", error);
        return null;
      }
    },

    async getUserByEmail(email: string): Promise<AdapterUser | null> {
      try {
        const response = await axios.get(`${baseUrl}/users/email/${email}`);
        return response.data;
      } catch (error) {
        console.error("Error getting user by email:", error);
        return null;
      }
    },

    async getUserByAccount({
      providerAccountId,
      provider,
    }: {
      providerAccountId: string;
      provider: string;
    }): Promise<AdapterUser | null> {
      try {
        const response = await axios.get(
          `${baseUrl}/accounts/${provider}/${providerAccountId}`
        );
        return response.data;
      } catch (error) {
        console.error("Error getting user by account:", error);
        return null;
      }
    },

    async updateUser(user: Partial<AdapterUser>): Promise<AdapterUser | null> {
      try {
        const response = await axios.put(`${baseUrl}/users/${user.id}`, user);
        return response.data;
      } catch (error) {
        console.error("Error updating user:", error);
        return null;
      }
    },

    async deleteUser(userId: string): Promise<void> {
      try {
        await axios.delete(`${baseUrl}/users/${userId}`);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },

    async linkAccount(account: any): Promise<any> {
      try {
        const response = await axios.post(`${baseUrl}/accounts`, account);
        return response.data;
      } catch (error) {
        console.error("Error linking account:", error);
        return null;
      }
    },

    async unlinkAccount({
      providerAccountId,
      provider,
    }: {
      providerAccountId: string;
      provider: string;
    }): Promise<void> {
      try {
        await axios.delete(
          `${baseUrl}/accounts/${provider}/${providerAccountId}`
        );
      } catch (error) {
        console.error("Error unlinking account:", error);
      }
    },

    async createSession({
      sessionToken,
      userId,
      expires,
    }: {
      sessionToken: string;
      userId: string;
      expires: Date;
    }): Promise<AdapterSession | null> {
      try {
        const response = await axios.post(`${baseUrl}/sessions`, {
          sessionToken,
          userId,
          expires,
        });
        return response.data;
      } catch (error) {
        console.error("Error creating session:", error);
        return null;
      }
    },

    async getSessionAndUser(
      sessionToken: string
    ): Promise<{ session: AdapterSession; user: AdapterUser } | null> {
      try {
        const response = await axios.get(`${baseUrl}/sessions/${sessionToken}`);
        return response.data;
      } catch (error) {
        console.error("Error getting session and user:", error);
        return null;
      }
    },

    async updateSession({
      sessionToken,
      expires,
    }: {
      sessionToken: string;
      expires?: Date;
    }): Promise<AdapterSession | null> {
      try {
        const response = await axios.put(
          `${baseUrl}/sessions/${sessionToken}`,
          { expires }
        );
        return response.data;
      } catch (error) {
        console.error("Error updating session:", error);
        return null;
      }
    },

    async deleteSession(sessionToken: string): Promise<void> {
      try {
        await axios.delete(`${baseUrl}/sessions/${sessionToken}`);
      } catch (error) {
        console.error("Error deleting session:", error);
      }
    },

    async createVerificationToken(
      verificationToken: VerificationToken
    ): Promise<VerificationToken | null> {
      try {
        const response = await axios.post(
          `${baseUrl}/verification-tokens`,
          verificationToken
        );
        return response.data;
      } catch (error) {
        console.error("Error creating verification token:", error);
        return null;
      }
    },

    async useVerificationToken({
      identifier,
      token,
    }: {
      identifier: string;
      token: string;
    }): Promise<VerificationToken | null> {
      try {
        const response = await axios.delete(
          `${baseUrl}/verification-tokens/${identifier}/${token}`
        );
        return response.data;
      } catch (error) {
        console.error("Error using verification token:", error);
        return null;
      }
    },
  };
}
