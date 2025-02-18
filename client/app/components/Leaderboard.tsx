export default function Leaderboard() {
  // This is a placeholder. In a real application, you'd fetch this data from a backend.
  const topContributors = [
    { name: "John Doe", contributions: 25 },
    { name: "Jane Smith", contributions: 22 },
    { name: "Bob Johnson", contributions: 18 },
  ]

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Top Contributors</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul>
          {topContributors.map((contributor, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span>{contributor.name}</span>
              <span className="font-semibold">{contributor.contributions} votes</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

