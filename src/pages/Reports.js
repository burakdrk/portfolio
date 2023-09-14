import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const Reports = () => {
    return(  
        <>
            <Header page={'reports'}/>
            <div className='main_wrapper'>
                <Card title={'Work Term Report 1 - Kenna'} desc={`In this work term report, I share my experiences working at Kenna as an application developer for 4 months which was my first co-op, highlighting what I've learned, and how I accomplished my goals.`}/>
                <br></br>
                <Card title={'Work Term Report 2 - Kenna'} desc={`In this work term report, I share my experiences working at Kenna as an application developer for another 4 months which was my second co-op with them, highlighting what I've learned, and how I accomplished my goals.`}/>
            </div>
        </>
    );
};

export default Reports;
