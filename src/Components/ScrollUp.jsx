import React from 'react';
import { Link } from 'react-scroll';

function ButtonScrollUp() {
    return (
        <Link className="button-scroll-up" to='home' smooth={true} duration={500}>&uarr;</Link>
    );
}

export default ButtonScrollUp;