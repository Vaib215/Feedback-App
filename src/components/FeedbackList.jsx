import FeedbackItem from "./FeedbackItem"
import {AnimatePresence, motion} from 'framer-motion'
function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(item=>{
            return <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <FeedbackItem item={item} handleDelete={(id)=>{handleDelete(id)}}/>
            </motion.div>
        })}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList