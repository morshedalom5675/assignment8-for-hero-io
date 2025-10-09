import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-290px)]'>
                <Suspense fallback={<LoadingSpinner></LoadingSpinner>}> 
                    <Outlet></Outlet>
                </Suspense>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;