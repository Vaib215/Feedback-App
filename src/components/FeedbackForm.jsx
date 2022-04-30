import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Review must be at least 10 characters.")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How satisfied are you with our service?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm