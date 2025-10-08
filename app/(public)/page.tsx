'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabase/client';

export default function SignupPage() {
  const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
  const [msg,setMsg]=useState<string|undefined>(); const [err,setErr]=useState<string|undefined>();
  const r=useRouter();

  async function onSubmit(e:React.FormEvent){
    e.preventDefault(); setErr(undefined); setMsg(undefined);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signUp({ email, password: pw });
    if (error) return setErr(error.message);
    setMsg("Compte créé ! Si la confirmation email est active, vérifie ta boîte.");
    r.replace('/login');
  }

  return (
    <form onSubmit={onSubmit} style={{maxWidth:360}}>
      <h1>Créer un compte</h1>
      <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input placeholder="Mot de passe" type="password" value={pw} onChange={e=>setPw(e.target.value)} required />
      {err && <p style={{color:'red'}}>{err}</p>}
      {msg && <p style={{color:'green'}}>{msg}</p>}
      <button type="submit">S’inscrire</button>
      <p><a href="/login">Déjà un compte ?</a></p>
    </form>
  );
}
