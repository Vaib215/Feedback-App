import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React-based app to collect user feedbacks for a product or service.</p>
        <b>v1.0.0</b>
        <p><Link to="/">Back to home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage