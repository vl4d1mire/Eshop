import React from 'react'

const BurgerIcon = ({ open, setOpen }) => {

    return (
        <div className="burger__btn" onClick={() => setOpen(!open)}>
            <div className={`bar1 ${ open ? 'change' : ''}`}/>
            <div className={`bar2 ${ open ? 'change' : ''}`}/>
            <div className={`bar3 ${ open ? 'change' : ''}`}/>
        </div>
    )
}

export default BurgerIcon