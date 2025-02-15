import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export interface Referral {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  course: string;
}

export interface ReferralResponse {
  status: "success" | "error";
  data?: Referral;
  message?: string;
}

export const referralApi = {
  createReferral: async (content: Referral) => {
    const response = await api.post<ReferralResponse>("/referral", content);

    return response.data;
  },
};

export default api;
