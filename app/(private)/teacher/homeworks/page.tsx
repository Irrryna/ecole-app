import { createServerClient } from '@/lib/supabase/server';
import { getProfile } from '@/lib/auth';
import { createHomework, deleteHomework } from './actions';


export default async function TeacherHomeworksPage(){
const profile = await getProfile();
if (!profile || profile.approval_status !== 'approved' || (profile.role !== 'teacher' && profile.role !== 'admin')) {
return <p>Accès interdit.</p>;
}
const supabase = createServerClient();
const { data: list } = await supabase
.from('homeworks')
.select('id, title, due_at')
.eq('teacher_id', profile.user.id)
.order('due_at', { ascending: true });


return (
<section className="space-y-4">
<h1 className="text-2xl font-semibold">Mes devoirs</h1>
<form action={createHomework} className="flex gap-2">
<input className="w-80 rounded border px-3 py-2" name="title" placeholder="Titre du devoir" required />
<input className="rounded border px-3 py-2" name="due_at" type="date" required />
<button className="rounded bg-black px-3 py-2 text-white">Créer</button>
</form>
<ul className="space-y-2">
{list?.map(hw => (
<li key={hw.id} className="flex items-center justify-between rounded border p-3">
<span>{hw.title} — {new Date(hw.due_at).toLocaleDateString()}</span>
<form action={deleteHomework}>
<input type="hidden" name="id" value={hw.id} />
<button className="rounded bg-red-600 px-3 py-1 text-white">Supprimer</button>
</form>
</li>
)) || <p>Aucun devoir.</p>}
</ul>
</section>
);
}