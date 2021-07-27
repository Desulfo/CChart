import React, {useState} from 'react'
import './form.css'

const today = new Date();
today.setDate(today.getDate());
const date = today.toISOString().substr(0,10);


function From( {setData} ) {
    const [month, setMonth] = useState("DE");
    const [country, setCountry] = useState(date);

    const changeData = (e) => {
        e.preventDefault();
        console.log(month, country)
        setData( prevState => [month, country])
    }

    return (
        <form>
            <label>month 
                <input id="month" type="date" defaultValue={date} onChange={(e)=> setMonth(e.target.value)}/> 
                </label>
            <label>country 
                <select id="country" defaultValue="DE" list="country" onChange={(e)=> setCountry(e.target.value)}>
                <option value="PL">Poland</option> 
                <option value="DE">Germany</option>
                </select>
            </label>
            <input onClick={changeData} type="submit"/>
        </form>
    )
}

export default From
