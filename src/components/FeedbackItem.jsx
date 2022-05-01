import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"
function FeedbackItem({ item }) {
    const {deleteFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <button className="close" onClick={()=>deleteFeedback(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem