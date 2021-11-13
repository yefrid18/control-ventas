import React from 'react'
import Mision from '../assets/img/Mision.png'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import '../Style/estilos.css'
import notie from 'notie';
import 'notie/dist/notie.css';

const Login = () => {

    const responseGoogle = async (resp) => {
        console.log(resp);

        let response = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/auth/google/login`,
            headers: {
                'Authorization': `Bearer ${resp.tokenId}`
            }
        }).then(response => {
            if (response.data.Token) {
                sessionStorage.setItem("token", response.data.Token);
                sessionStorage.setItem("nombre", response.data.nombre);
                window.location.href = "/productos";
            }
        }).catch(err => {
            notie.alert({
                type: 'error',
                text: 'No está autorizado para ingresar',
            });
        });



    }

    return (
        <div className="contlogin text-center">
            <div className="container log pt-5 pb-5">
                <form>
                    <img
                        src={Mision}
                        alt="logo"
                        className="img-login mb-3"
                    ></img>
                    <h1 className="h3 mb-5 fw-normal">Iniciar Sesion</h1>
                    <div className="">
                        <div className="">
                            <GoogleLogin
                                clientId="855294903199-38asjgffanbuc7kep3juviq8ckl015n2.apps.googleusercontent.com"
                                buttonText="Iniciar Sesion"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                    <p className="mt-5 mb-3 text-muted">©MinTic 2021</p>
                </form>
            </div>
        </div>
    )
}

export default Login