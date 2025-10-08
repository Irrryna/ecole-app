'use server'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function approveUser(userId: string) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // 1. Vérifier si l'utilisateur actuel est un admin
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    throw new Error('Unauthorized: No session found')
  }

  const { data: adminProfile, error: adminError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (adminError || !adminProfile || adminProfile.role !== 'admin') {
    throw new Error('Unauthorized: Not an admin')
  }

  // 2. Si c'est un admin, mettre à jour le statut de l'utilisateur cible
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ status: 'approved' })
    .eq('id', userId)

  if (updateError) {
    throw new Error(`Failed to approve user: ${updateError.message}`)
  }

  // 3. Revalider le cache de la page admin pour voir le changement immédiatement
  revalidatePath('/admin')
}
