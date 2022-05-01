import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import feedbackData from '../data/feedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData)
    // Set item to be updated
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })
    // Delete Feeback Function
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Add Feedback Function
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // Edit Feeback Function
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map((item)=>(item.id===id? {...item, ...updItem}:item)))
    }
    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext