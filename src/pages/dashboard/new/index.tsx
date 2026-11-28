import { FiUpload } from 'react-icons/fi'
import Container from '../../../components/container'
import PainelHeader from '../../../components/painelHeader'

export default function New() {
  return (
    <Container>
      <PainelHeader />

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <label className="flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white text-slate-500 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 sm:w-48">
          <FiUpload size={24} />
          <span className="text-sm font-medium">Adicionar foto</span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </Container>
  )
}
