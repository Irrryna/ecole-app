'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';


export default function ResetForm() {
const [email, setEmail] = useState('');
const [info, setInfo] = useState<string|undefined>();
const [error, setError] = useState<string|undefined>();


async function onSubmit(e: React.FormEvent) {
e.preventDefault();
setError(undefined); setInfo(undefined);
const { error } = await supabase.auth.resetPasswordForEmail(email, {
redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset`,
});
if (error) return setError(error.message);
setInfo('Email de réinitialisation envoyé.');
}


return (
<form onSubmit={onSubmit} className="max-w-sm space-y-3">
<Input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
{error && <p className="text-sm text-red-600">{error}</p>}
{info && <p className="text-sm text-green-600">{info}</p>}
<Button type="submit">Envoyer le lien</Button>
</form>
);
}