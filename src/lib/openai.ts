import OpenAI from "openai";
export const openai = new OpenAI({
  apiKey: "3375e7ad9a874ca6be959b6f163be84f",
  baseURL:
    "https://nureply-azure.openai.azure.com/openai/deployments/ChatAutoUpdate",
  defaultQuery: { "api-version": "2023-06-01-preview" },
  defaultHeaders: { "api-key": "3375e7ad9a874ca6be959b6f163be84f" },
});
