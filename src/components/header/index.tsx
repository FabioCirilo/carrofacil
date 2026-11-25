import { Link } from 'react-router'
import logoImg from '../../assets/logo.svg'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { useAuth } from '../../contexts/auth/useAuth'

export default function Header() {
  const { signed, loadingAuth } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200 drop-shadow-2xl mb-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="CarroFacil" className="h-11 w-auto" />
        </Link>

        {!loadingAuth && signed && (
          <Link
            to="/dashboard"
            aria-label="Painel do utilizador"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiUser size={20} />
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FiLogIn size={18} />
            <span className="hidden sm:inline">Entrar</span>
          </Link>
        )}

        {loadingAuth && (
          <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
        )}
      </div>
    </header>
  )
}
