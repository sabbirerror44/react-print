import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Form.css';

const Form = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        email: '',
        doctor: '',
    })

const handleChange = (e) => {
        if(e.target.name === 'name'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
         }
        if(e.target.name === 'email'){
                const addUser = { ...user };
                addUser[e.target.name] = e.target.value;
                setUser(addUser);
        }
        if(e.target.name === 'doctor'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
    }
}
const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/info', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(user),
   })
       .then((res) => res.json())
       .then((result) => {
               if(result) {
                      history.push(`/print/${result.id}`)
               }
            })
}


    return (
        <div>
            <div className="background">
            <div className="">
                <div className="registration-form">
                 <p className="Style">Book a Schedule</p>
                    <form onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                        <input type="text" 
                          className="form-control item"
                          placeholder="Enter Your Name"
                          onChange = {handleChange}
                          name="name" required  />
                        </div>

                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Enter Your Email"
                          onChange = {handleChange}
                          name="email" required  />
                        </div>

                        <div className="form-group">
                        <input type="text"
                          className="form-control item"
                          placeholder="Enter Doctor's Name"
                          onChange = {handleChange}
                          name="doctor" required  />
                        </div>

            
                        <input className="sendButton" type="submit" value="Submit" />
                    </form>
                </div>

                </div>
            </div>

        </div>
    );
};

export default Form;