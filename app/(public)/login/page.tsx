import LoginForm from '@/components/auth/LoginForm';
import { Suspense } from 'react';

export default function LoginPage(){
return (
<section>
<h1 className="mb-4 text-2xl font-semibold">Connexion</h1>
<Suspense fallback={<div>Loading...</div>}>
<LoginForm />
</Suspense>
</section>
);
}