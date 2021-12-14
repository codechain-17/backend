import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="d-flex flex-column h-100">
            <div className="flex-shrink-0">
                {children}
            </div>   
        </div>
    )
}

export default Layout
