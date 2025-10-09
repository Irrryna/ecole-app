'use server';

import { createActionClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createHomework(formData: FormData){
  const supabase = createActionClient();
  const title = String(formData.get('title') || '');
  const due_at = String(formData.get('due_at') || '');
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from('homeworks').insert({ title, due_at, teacher_id: user.id, course_id: null });
  revalidatePath('/teacher/homeworks');
}

export async function deleteHomework(formData: FormData){
  const supabase = createActionClient();
  const id = String(formData.get('id') || '');
  await supabase.from('homeworks').delete().eq('id', id);
  revalidatePath('/teacher/homeworks');
}