import React, { useEffect, useState } from 'react';

const Info = React.forwardRef((props, ref) => {
    const {id} = props;
    
    const [info, setInfo] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/info/${id}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data.result[0])
            })
        }, [id])
    return (
        <div ref={ref}>
            <h2>Your Name: {info.name}</h2>
            <p>Your Email: {info.email}</p>
            <h4>Your Doctor: {info.doctor}</h4>
        </div>
    );
});

export default Info;