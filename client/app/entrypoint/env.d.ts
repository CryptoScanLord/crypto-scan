/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ORDI_SUPABASE_URL: string
  readonly ORDI_SUPABASE_ANON_KEY: string
  readonly ORDI_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
