import React from 'react';
import './Icons.css';

function Icons(){
    return (
        <div className="icon__container">
            <div>
                <a href="https://github.com/hmcarrico" target="_blank">
                    <img src="https://image.flaticon.com/icons/svg/23/23957.svg" />
                </a>
                Github
            </div>
            <div>
                <a href="https://www.linkedin.com/in/hunter-carrico/" target="_blank">
                    <img src="https://png.pngtree.com/svg/20160726/d2de53919c.svg"/>
                </a>
                LinkedIn
            </div>
            <div>
                <a href="mailto:hmc.carrico@gmail.com" >
                    <img src="https://cdn3.iconfinder.com/data/icons/communication-1/100/at_sign-512.png"/>
                </a>
                Email
            </div>
            <div>
                <a href="https://www.canva.com/design/DADXgWmDW4k/ngc1gJV9g6ZkBef1UtywOA/edit" target="_blank">
                    <img src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/001/681/original/curriculum-vitae-2.png?1555483547"/>
                </a>
                Resume
            </div>
        </div>
    )
}

export default Icons;