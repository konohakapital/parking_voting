import styles from '@/styles/ProgressBar.module.css'

export default function ProgressBar() {
  // This is a placeholder. In a real application, you'd calculate the progress based on total votes or sections completed.
  const progress = 65

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Overall Progress</h2>
      <div className={styles["progress-bar-container"]}>
        <div className={styles["progress-bar"]} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="mt-2 text-center">{progress}% of features decided</p>
    </div>
  )
}
