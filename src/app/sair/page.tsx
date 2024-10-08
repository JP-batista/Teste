'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verificar se os campos de e-mail e senha foram preenchidos
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    // Redirecionar para a página inicial após a validação
    setError('') // Limpar mensagem de erro
    router.push('/')
  }

  return (
    <section className="bg-white p-6 shadow-lg rounded-md max-w-md mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Digite sua senha"
            required
          />
        </div>

        {/* Exibir erro se os campos estiverem vazios */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem uma conta? <a href="#" className="text-blue-600 hover:underline">Registre-se</a>
      </p>
    </section>
  )
}
