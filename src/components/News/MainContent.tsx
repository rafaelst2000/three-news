import Image from 'next/image'

export default function MainContent() {
  return (
    <main>
      <div className="date-info">
        <b>17 de Dezembro de 2022</b>
        <span>Trevinews</span>
      </div>
      <h1>Vagas de emprego em tecnologia crescem 34% nos últimos dez meses</h1>
      <p>Por: Rafael Trevisan</p>
      <Image
        src="https://img.r7.com/images/tecnologia-tecnologico-tec-emprego-curso-13122022131511653?dimensions=677x369"
        alt="news image logo"
        width={630}
        height={300}
      />
      <footer className="footer-links">
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </footer>
    </main>
  )
}
