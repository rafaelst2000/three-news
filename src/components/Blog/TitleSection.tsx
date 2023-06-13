import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function TitleSection() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  function searchNews(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/news?q=${search}`)
  }

  return (
    <div className="container title-section">
      <span>Nosso blog</span>
      <h1>Three News</h1>
      <p>
        O Three News seleciona as melhores notícias ao redor do mundo. <br />
        Busque um tema de seu interesse abaixo.
      </p>

      <form className="search-container" onSubmit={searchNews}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Busque algo"
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}
