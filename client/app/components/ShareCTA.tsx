import { Share2 } from "lucide-react"

export default function ShareCTA() {
  const handleShare = () => {
    // Here you would typically implement sharing functionality
    // For this example, we'll just log to the console
    console.log("Sharing the page")
  }

  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Spread the Word!</h2>
      <p className="mb-4">Help us get more input by sharing this page with your fellow truckers.</p>
      <button
        onClick={handleShare}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center justify-center mx-auto"
      >
        <Share2 className="mr-2" />
        Share This Page
      </button>
    </div>
  )
}

