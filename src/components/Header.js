import React from 'react';
import '../styles/Header.css';

const Header = ({page, report}) => {
    return (
        <header id={page+'_header'}>
            <div className='header_container'>
                {(() => {
                    switch(page) {
                        case 'home':
                            return(<><h1>Burak Duruk</h1><p>Computer Science Student @ University of Guelph</p></>);
                        case 'reports':
                            return(<><h1>Work Term Reports</h1><p>Select a report to view</p></>)
                        case 'report':
                            return(<><h1>Work Term Report {report.id}</h1><p>{report.desc}</p></>);
                        default:
                            return '';
                    }
                })()}
            </div>
        </header>
    );
}

export default Header;
