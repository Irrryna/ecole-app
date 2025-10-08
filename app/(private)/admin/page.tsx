import { createSupabaseServer } from '@/lib/supabase/server';
import { getProfile } from '@/lib/auth';


export default async function AdminPage(){
const profile = await getProfile();
if (!profile || profile.approval_status !== 'approved' || profile.role !== 'admin') {
return <p>Accès interdit.</p>;
}


const supabase = createSupabaseServer();
const { data: pending } = await supabase
.from('profiles')
.select('id, display_name, role, approval_status, email')
.eq('approval_status', 'pending');


return (
<section>
<h1 className="text-2xl font-semibold">Administration</h1>
<h2 className="mt-4 text-lg font-medium">Comptes en attente</h2>
<ul className="mt-2 space-y-2">
{pending?.map((p:any) => (
<li key={p.id} className="rounded border p-3">
<div className="font-medium">{p.display_name || p.email}</div>
<form action={approve}>
<input type="hidden" name="id" value={p.id} />
<button className="mt-2 rounded bg-green-600 px-3 py-1 text-white">Approuver</button>
</form>
</li>
)) || <p>Aucun compte en attente.</p>}
</ul>
</section>
);
}


export async function approve(formData: FormData){
'use server';
const id = formData.get('id') as string;
const supabase = createSupabaseServer();
await supabase.from('profiles').update({ approval_status: 'approved' }).eq('id', id);
}