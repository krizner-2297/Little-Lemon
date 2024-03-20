// // BookingForm.js
// import React, { useState } from 'react';

// function BookingForm(props) {
//     const [date,setDate] = useState("");
//     const [times,setTimes] = useState("");
//     const [guests,setGuests] = useState("");
//     const [occassion,setOccassion] = useState("");
//     const [errors, setErrors] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (Object.keys(errors).length === 0) {
//             props.SubmitForm(e);
//         }
//     }

//     const handleChange = (e) => {
//         setDate(e);
//         props.dispatch(e);
//     }



//     return (
//         <header>
//             <section>
//                 <form onSubmit={handleSubmit}>
//                     <fieldset>
//                         <div>
//                             <label htmlFor='book-date'>Choose Date: </label>
//                             <input id='book-date' value={date} onChange = {(e) => handleChange(e.target.value)}
//                             type='date' required/>
//                         </div>

//                         {/* Set Time */}
//                         <div>
//                             <label htmlFor='book-time'>Choose Time: </label>
//                             <select id="book-time" value={times} onChange = {(e) => setTimes(e.target.value)}>
//                                 <option value="">Select a Time</option>
//                                 {
//                                     props.availableTimes.availableTimes.map( availableTimes => {
//                                         return <option key= {availableTimes}> {availableTimes} </option> } )
//                                 }
//                             </select>
//                         </div>

//                         {/* Set Guests Number */}
//                         <div>
//                             <label htmlFor='book-guests'>Number of Guests: </label>
//                             <input id='book-guests' min='1' value={guests} onChange = {(e) => setGuests(e.target.value)} />

//                         </div>

//                         {/* Set Occassion*/}
//                         <div>
//                             <label htmlFor='bool-occasion'>What is the Occassion:</label>
//                             <select id='book-occasion' key={occassion} value={occassion} onChange = {(e) => setOccassion(e.target.value)}>
//                                 <option>Birthday</option>
//                                 <option>Anniversary</option>
//                             </select>

//                         </div>

//                         <div className='btnRecieve'>
//                             <input aria-label='On Click' type='submit' value={"Make the Reservation"} />
//                         </div>

//                     </fieldset>
//                 </form>
//             </section>
//         </header>
//     );
// }

// export default BookingForm;

import React, { useState, useEffect} from 'react';

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        // Check if all fields are valid
        const isValid = Object.values(errors).every(error => error === "");
        setIsFormValid(isValid);
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if there are no errors before submitting
        if (isFormValid) {
            props.SubmitForm(e);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = {...errors};
        switch (name) {
            case 'date':

                if (new Date(value) < new Date()) {
                    error.date = "Please select a future date.";
                } else {
                    error.date = "";
                }
                setDate(value);
                break;
            case 'times':
                if (value === "") {
                    error.times = "Please select a time.";
                } else {
                    error.times = "";
                }
                setTimes(value);
                break;
            case 'guests':
                if (value <= 0 || !Number.isInteger(Number(value))) {
                    error.guests = "Please enter a valid number of guests.";
                } 
                else if ( value >= 20 ) {
                    error.guests = "Too much number of guests.";
                } 
                else {
                    error.guests = "";
                }
                setGuests(value);
                break;
            
            case 'occassion':
                setOccassion(value);
                break;

            default:
                break;
        }
        
        setErrors(error);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date: </label>
                            <input
                                id='book-date'
                                name="date"
                                value={date}
                                onChange={(e) => handleChange(e)}
                                type='date'
                                required
                            />
                            {errors.date && <span className="error" style={{ color: 'red' }}>{errors.date}</span>}
                        </div>

                        {/* Set Time */}
                        <div>
                            <label htmlFor='book-time'>Choose Time: </label>
                            <select
                                id="book-time"
                                name="times"
                                value={times}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTime => (
                                    <option key={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                            {errors.times && <span className="error" style={{ color: 'red' }}>{errors.times}</span>}
                        </div>

                        {/* Set Guests Number */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests: </label>
                            <input
                                id='book-guests'
                                name="guests"
                                min='1'
                                value={guests}
                                onChange={(e) => handleChange(e)}
                                type="number"
                            />
                            {errors.guests && <span className="error" style={{ color: 'red' }}>{errors.guests}</span>}
                        </div>

                        {/* Set Occassion*/}
                        <div>
                            <label htmlFor='book-occasion'>What is the Occasion:</label>
                            <select
                                id='book-occasion'
                                name="occassion"
                                value={occassion}
                                onChange={(e) => handleChange(e)}
                            >
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className='btnRecieve'>
                            <input aria-label='On Click' type='submit' value={"Make the Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;
