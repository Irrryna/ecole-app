// Ce fichier est destiné au code exécuté côté client (dans le navigateur)

import { createBrowserClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkrblmfxhthmgfeptabe.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Note: La création du client dans un fichier séparé comme celui-ci n'est nécessaire
// que si vous avez besoin d'accéder à Supabase depuis des composants non-React ou des fichiers utilitaires.
// Pour les composants React, il est souvent plus simple d'utiliser le hook `useSupabaseClient`
// fourni par `@supabase/auth-helpers-react` (à installer si besoin).

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
