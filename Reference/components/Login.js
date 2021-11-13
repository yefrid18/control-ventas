import React from 'react'
import { Link } from 'react-router-dom'
import Mision from '../assets/img/Mision.png'
import google from '../assets/img/icon-google.png'

const Login = () => {
    return (
        <div className = "contlogin text-center">
            <div className = "container log pt-5 pb-5">
                <form>
                    <img
                        src={Mision}
                        alt="logo"
                        className="img-login mb-3"
                    ></img>
                    <h1 className="h3 mb-5 fw-normal">Iniciar Sesion</h1>

                    <div className="container pl-5 btn-google">

                        <Link exact to="/productos" className="container--google">
                            <img src={google} alt="GOOGLE"></img>
                            Google
                        </Link>
                    </div>
                        <p className="mt-5 mb-3 text-muted">©MinTic 2021</p>
                </form>
            </div>
        </div>
    )
}

export default Login