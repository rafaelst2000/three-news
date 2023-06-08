import TopTrend from './TopTrend'

export default function TopTrends() {
  return (
    <div className="top-trends">
      <div className="container">
        <h2>Melhores manchetes</h2>
      </div>
      <TopTrend />
      <TopTrend second />
      <TopTrend />
    </div>
  )
}
