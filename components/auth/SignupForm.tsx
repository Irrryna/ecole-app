'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';


export default function SignupForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [displayName, setDisplayName] = useState('');
const [message, setMessage] = useState<string|undefined>();
const [error, setError] = useState<string|undefined>();


async function onSubmit(e: React.FormEvent) {
e.preventDefault();
setError(undefined); setMessage(undefined);
const { error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName } } });
if (error) return setError(error.message);
setMessage('Compte créé. Vérifie tes emails pour valider.');
}


return (
<form onSubmit={onSubmit} className="max-w-sm space-y-3">
<Input placeholder="Nom affiché" value={displayName} onChange={e=>setDisplayName(e.target.value)} required />
<Input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
<Input placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
{error && <p className="text-sm text-red-600">{error}</p>}
{message && <p className="text-sm text-green-600">{message}</p>}
<Button type="submit">Créer un compte</Button>
</form>
);
}