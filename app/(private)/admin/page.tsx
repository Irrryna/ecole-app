import { createServerClient } from '@/lib/supabase/server';
import { getProfile } from '@/lib/auth';
import { Profile } from '@/lib/types';
import { approve } from './actions';


export default async function AdminPage(){
const profile = await getProfile();
if (!profile || profile.approval_status !== 'approved' || profile.role !== 'admin') {
return <p>Accès interdit.</p>;
}


const supabase = createServerClient();
const { data: pending } = await supabase
.from('profiles')
.select('id, display_name, role, approval_status, email')
.eq('approval_status', 'pending');


return (
<section>
<h1 className="text-2xl font-semibold">Administration</h1>
<h2 className="mt-4 text-lg font-medium">Comptes en attente</h2>
<ul className="mt-2 space-y-2">
{pending?.map((p:Profile) => (
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