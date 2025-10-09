import { getProfile } from '@/lib/auth';
import { createServerClient } from '@/lib/supabase/server';
import { Homework } from '@/lib/types';


export default async function ParentHome(){
const profile = await getProfile();
if (!profile || profile.approval_status !== 'approved' || (profile.role !== 'parent' && profile.role !== 'admin')) {
return <p>Accès interdit.</p>;
}
const supabase = createServerClient();
const { data: homeworks } = await supabase.rpc('homeworks_for_parent');
return (
<section>
<h1 className="text-2xl font-semibold">Espace Parent</h1>
<h2 className="mt-4 text-lg font-medium">Devoirs à venir</h2>
<ul className="mt-2 space-y-2">
{homeworks?.map((h:Homework) => (
<li key={h.id} className="rounded border p-3">
<div className="font-medium">{h.title}</div>
<div className="text-sm text-neutral-600">Pour le {new Date(h.due_at).toLocaleDateString()}</div>
</li>
)) || <p>Aucun devoir.</p>}
</ul>
</section>
);
}