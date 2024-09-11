import { baseUrl } from "@/constants/apiConfig.constants";


const baseURLs = {
  baseurl: baseUrl,
};

export const getBaseUrl = (type: keyof typeof baseURLs) => baseURLs[type];
