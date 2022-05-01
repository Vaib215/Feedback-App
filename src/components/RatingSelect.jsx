import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {
    const {feedbackEdit} = useContext(FeedbackContext)
    const [selected, setSelected] = useState(10)
    useEffect(() => {
      setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])
    
    let listItems=[]
    const handleChange = (e) => {
        setSelected(+e.target.value)
        select(+e.target.value)
    }
    const addItem = i => {
        return(
        <li key={i}>
            <input type="radio" id={`num${i}`} name="rating" value={''+i} onChange={handleChange} checked={selected===i}/>
            <label htmlFor={`num${i}`}>{i}</label>
        </li>)
    }
    for (let i = 1; i <= 10; i++) {
        listItems.push(addItem(i))
    }
    return (
        <ul className="rating">
           {listItems}
        </ul>
    )
}

export default RatingSelect