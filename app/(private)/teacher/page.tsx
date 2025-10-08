import { getProfile } from '@/lib/auth';


export default async function TeacherHome(){
const profile = await getProfile();
if (!profile || profile.approval_status !== 'approved' || (profile.role !== 'teacher' && profile.role !== 'admin')) {
return <p>Accès interdit.</p>;
}
return (
<section>
<h1 className="text-2xl font-semibold">Espace Professeur</h1>
<p className="mt-2">Accès rapide : <a className="underline" href="/teacher/homeworks">Mes devoirs</a></p>
</section>
);
}