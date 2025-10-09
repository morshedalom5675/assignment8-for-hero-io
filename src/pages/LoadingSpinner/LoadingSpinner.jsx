import React from 'react';
import { RotateLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
           <RotateLoader size={40} /> 
        </div>
    );
};

export default LoadingSpinner;