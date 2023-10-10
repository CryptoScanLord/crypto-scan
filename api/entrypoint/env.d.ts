declare module NodeJS {
  interface ProcessEnv {
    readonly ORDI_PORT: string
    readonly ORDI_CORS: string
    readonly ORDI_ROLE_GUARD_TOKEN: string
    readonly ORDI_PASS_ROLE_ID: string
    readonly ORDI_SUPABASE_URL: string
    readonly ORDI_SUPABASE_KEY: string
  }
}
