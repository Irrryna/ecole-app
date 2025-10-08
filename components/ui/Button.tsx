import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';


export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
return (
<button className={clsx('rounded-lg border px-4 py-2 font-medium hover:opacity-90 disabled:opacity-50', className)} {...props} />
);
}