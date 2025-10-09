'use client';
import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';


export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<string|undefined>();
const [pending, startTransition] = useTransition();
const router = useRouter();
const next = useSearchParams().get('next') || '/';


async function onSubmit(e: React.FormEvent) {
e.preventDefault();
setError(undefined);
const { error } = await supabase.auth.signInWithPassword({ email, password });
if (error) return setError(error.message);
startTransition(() => router.replace(next));
}


return (
<form onSubmit={onSubmit} className="max-w-sm space-y-3">
<Input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
<Input placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
{error && <p className="text-sm text-red-600">{error}</p>}
<div className="flex items-center gap-3">
<Button disabled={pending} type="submit">Se connecter</Button>
<a className="text-sm underline" href="/reset">Mot de passe oublié ?</a>
</div>
</form>
);
}