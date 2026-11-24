import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Inputprops {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export default function Input({
  type,
  name,
  placeholder,
  register,
  error,
  rules
}: Inputprops) {
  return (
    <>
      <div className="flex h-11 w-full items-center gap-2 rounded-xl transition ">
        <input
          className="h-full w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          id={name}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </>
  )
}
