declare namespace NodeJS {
  interface ProcessEnv {
    BASE_PATH?: string;
    CLUSTERING: string;
    LOG_LEVEL?: string;
    NODE_ENV: string;
    PORT: string;
    DATABASE_URL: string;
    SHADOW_DATABASE_URL?: string;
    OPENAI_API_KEY: string;
    PEZZO_API_KEY: string;
    PEZZO_SERVER_URL: string;
  }
}
