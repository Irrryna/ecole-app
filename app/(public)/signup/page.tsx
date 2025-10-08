import SignupForm from '@/components/auth/SignupForm';
export default function SignupPage(){
return (
<section>
<h1 className="mb-4 text-2xl font-semibold">Créer un compte</h1>
<SignupForm />
<p className="mt-3 text-sm text-neutral-600">Après création, un administrateur validera votre accès.</p>
</section>
);
}