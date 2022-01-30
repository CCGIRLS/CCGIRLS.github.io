import React, {Component} from 'react';
import "./css/style.css";
import ThePowerGirl from "./../assets/undraw_Powerful.svg";


export class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column-66">
                        <h1 className="large-font-partion"><b>QUERO PARTICIPAR DO GRUPO.</b></h1>
                        <p className="description-partion"> Interessou-se pelo grupo de estudos? Ficamos sempre felizes em  ter como novo membro 🤩</p>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={ThePowerGirl} className="App-logoUnicornio" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};

export default Contact;