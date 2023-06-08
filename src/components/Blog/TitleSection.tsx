export default function TitleSection() {
  return (
    <div className="container title-section">
      <span>Nosso blog</span>
      <h1>Three News</h1>
      <p>
        O Three News seleciona as melhores notícias ao redor do mundo. <br />
        Busque um tema de seu interesse abaixo.
      </p>

      <div className="search-container">
        <input type="text" placeholder="Busque algo" />
        <button>Buscar</button>
      </div>
    </div>
  )
}
