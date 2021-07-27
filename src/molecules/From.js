import React, {useState} from 'react'
import './form.css'

const today = new Date();
today.setDate(today.getDate());
const date = today.toISOString().substr(0,10);


function From( {setData} ) {
    const initMonth = "DE";
    const [month, setMonth] = useState(initMonth);
    const [country, setCountry] = useState(date);

    const changeData = (e) => {
        e.preventDefault();
        setData( prevState => [month, country])
    }

    return (
        <form>
            <label>month 
                <input id="month" type="date" defaultValue={date} onChange={(e)=> setMonth(e.target.value)}/> 
                </label>
            <label>country 
                <select id="country" defaultValue={initMonth} list="country" onChange={(e)=> setCountry(e.target.value)}>
                <option value="PL">Poland</option> 
                <option value="DE">Germany</option>
                </select>
            </label>
            <input onClick={changeData} type="submit"/>
        </form>
    )
}

export default From
