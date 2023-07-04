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
      <span>Our blog</span>
      <h1>Three News</h1>
      <p>
        Three News selects the best news from around the world <br />
        Search for a topic of your interest below
      </p>

      <form className="search-container" onSubmit={searchNews}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search something..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
