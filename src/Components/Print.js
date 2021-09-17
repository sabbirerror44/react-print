import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { useReactToPrint } from 'react-to-print';
import Info from './Info';

const Print = () => {
    const {id} = useParams();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    return (
        <div>
            <Info ref={componentRef} id={id} />
    
           <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
};

export default Print;