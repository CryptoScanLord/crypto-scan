import      { BrowserCookieAuthStorageAdapter }  from '@supabase/auth-helpers-shared'
import      { CookieOptionsWithName }            from '@supabase/auth-helpers-shared'
import      { createSupabaseClient }             from '@supabase/auth-helpers-shared'
import      { SupabaseClientOptionsWithoutAuth } from '@supabase/auth-helpers-shared'
import type { SupabaseClient }                   from '@supabase/supabase-js'
import type { GenericSchema }                    from '@supabase/supabase-js/dist/module/lib/types'

let supabase: any

export function createClient<
	Database = any,
	SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database,
	Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any,
>({
	supabaseUrl = import.meta.env.ORDI_SUPABASE_URL,
	supabaseKey = import.meta.env.ORDI_SUPABASE_ANON_KEY,
	options,
	cookieOptions,
	isSingleton = true,
}: {
	supabaseUrl?: string
	supabaseKey?: string
	options?: SupabaseClientOptionsWithoutAuth<SchemaName>
	cookieOptions?: CookieOptionsWithName
	isSingleton?: boolean
} = {}): SupabaseClient<Database, SchemaName, Schema> {
	if (!supabaseUrl || !supabaseKey) {
		throw new Error(
			'either SUPABASE_URL and SUPABASE_ANON_KEY env variables or supabaseUrl and supabaseKey are required!',
		)
	}

	const createNewClient = () =>
		createSupabaseClient<Database, SchemaName, Schema>(supabaseUrl, supabaseKey, {
			...options,
			global: {
				...options?.global,
				headers: {
					...options?.global?.headers,
				},
			},
			auth: {
				storageKey: cookieOptions?.name,
				storage: new BrowserCookieAuthStorageAdapter(cookieOptions),
			},
		})

	if (isSingleton) {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const _supabase = supabase ?? createNewClient()
		if (typeof window === 'undefined') return _supabase
		if (!supabase) supabase = _supabase
		return supabase
	}

	return createNewClient()
}
