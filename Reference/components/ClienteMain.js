import React from 'react'
import Cliente from './Cliente'
import TopHader from './TopHeader'


function ClienteMain() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <TopHader></TopHader>
                    <Cliente></Cliente>
                </div>
            </div>
        </main>
    )
}

export default ClienteMain