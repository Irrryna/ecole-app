// Ce fichier est destiné au code exécuté côté serveur

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Crée un client Supabase pour les Server Components, Route Handlers, et Server Actions.
// La lecture des cookies est "cachée" dans cette fonction pour simplifier l'utilisation.

export const createServerClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient({
    cookies: () => cookieStore,
  })
}

export const createActionClient = () => {
  const cookieStore = cookies()
  return createRouteHandlerClient({
    cookies: () => cookieStore,
  })
}
