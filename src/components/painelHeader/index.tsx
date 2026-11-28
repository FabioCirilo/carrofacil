import { NavLink } from 'react-router'

export default function PainelHeader() {
  const baseClass = 'rounded-full px-4 py-2 text-sm font-medium transition'

  return (
    <nav className="mb-6 flex items-center gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/dashboard/new"
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
          }`
        }
      >
        Cadastrar carros
      </NavLink>
    </nav>
  )
}
