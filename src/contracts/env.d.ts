/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOVIES_API_KEY: string;
  readonly VITE_API_URL: string;
  readonly VITE_IMAGE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
