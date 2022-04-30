import { useState } from "react"

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)
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