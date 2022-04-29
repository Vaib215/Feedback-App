import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <button className="close" onClick={()=>handleDelete(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem