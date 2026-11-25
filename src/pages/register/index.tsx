import {} from 'react'
import { Link, useNavigate } from 'react-router'
import { FiMail, FiLock, FiEdit2 } from 'react-icons/fi'
import Container from '../../components/container'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/input'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '../../service/supabaseClient'
import { toast } from 'react-toastify'

const schema = z.object({
  email: z
    .string()
    .email('Insira um email valido')
    .nonempty('O campo email e obrigatorio'),
  password: z
    .string()
    .min(6, 'A senha deve conter pelo menos 6 caracteres')
    .nonempty('A senha e obrigatorio'),
  name: z.string().nonempty('O nome e obrigatorio')
})

type FormData = z.infer<typeof schema>

export default function Register() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  async function onSubmit(data: FormData) {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: { name: data.name }
      }
    })
    if (error) {
      console.log(error)
      return
    }

    toast.success('Cadastrado com sucesso')
    navigate('/dashboard')
  }

  return (
    <Container>
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="CarroFacil" className="h-12 w-auto" />
            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              Faça o seu cadastro
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Cadastre-se para gerir os seus anúncios.
            </p>
          </div>

          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Nome
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <FiEdit2 size={18} className="shrink-0 text-slate-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Digite o nome"
                  error={errors.name?.message}
                  register={register}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <FiMail size={18} className="shrink-0 text-slate-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite o email"
                  error={errors.email?.message}
                  register={register}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Senha
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <FiLock size={18} className="shrink-0 text-slate-400" />
                <Input
                  type="password"
                  name="password"
                  placeholder="Digite a senha"
                  error={errors.password?.message}
                  register={register}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 h-11 w-full rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Cadastrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Já tem uma conta?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}
