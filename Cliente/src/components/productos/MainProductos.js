import React from 'react'
import TopHader from '../TopHeader'
import CuerpoProducto from './CuerpoProducto'

function MainProducto() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <TopHader></TopHader>
                    <CuerpoProducto></CuerpoProducto>
                    
                </div>
            </div>

        </main>
    )
}

export default MainProducto