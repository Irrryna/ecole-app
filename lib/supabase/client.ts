// Ce fichier est destiné au code exécuté côté client (dans le navigateur)

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

// Note: La création du client dans un fichier séparé comme celui-ci n'est nécessaire
// que si vous avez besoin d'accéder à Supabase depuis des composants non-React ou des fichiers utilitaires.
// Pour les composants React, il est souvent plus simple d'utiliser le hook `useSupabaseClient`
// fourni par `@supabase/auth-helpers-react` (à installer si besoin).

export const supabase = createPagesBrowserClient()
