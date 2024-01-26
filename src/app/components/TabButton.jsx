import React from 'react'

const TabButton = ({active , selectTab, title}) => {
    const defaultClasses = " mr-3 font-semibold ";
    const activeClasses = " text-white border-b border-primary-400 "
    const deactiveClasses = " text-[#ADB7BE] hover:text-white "

    const buttonClasses = defaultClasses + (active ? activeClasses : deactiveClasses);

    return (
    <button onClick = {selectTab}>
        <p className = {`${buttonClasses}`}>
            {title}
        </p>
    </button>
    )
}

export default TabButton