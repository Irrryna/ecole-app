import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';


export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
({ className, ...props }, ref) => (
<input ref={ref} className={clsx('w-full rounded-lg border px-3 py-2 outline-none focus:ring', className)} {...props} />
)
);
Input.displayName = 'Input';