export interface TopTrendProps {
  second?: boolean
}

export default function TopTrend({ second = false }: TopTrendProps) {
  return (
    <div className={second ? 'top-trend second' : 'top-trend'}>
      <div className="container">
        <h3>ESSE É UM TÍTULO DE UMA REPORTAGEM</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut nemo
          minus maiores praesentium nisi culpa saepe eaque quae temporibus,
          possimus voluptatem rem provident ex obcaecati nulla reiciendis
          explicabo? Molestias!
        </p>
        <a href="#">Leia na integra</a>
      </div>
    </div>
  )
}
