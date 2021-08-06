import './login.css';
import App from '../TestHtml/Test'
import { Component } from 'react';
import React from 'react';



class login extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            hide: true,
            botonActivo: false,
            disabled: true
        }
    }
    habilitarBoton = (e) => {
        if (e.target.value.length >= 3) {
            this.setState({
                disabled: false
            });
        }
        else {
            this.setState({
                disabled: true
            });
        }
    }
    render() {
        return (
            <div>
                <button className="btn-i" onClick={() => { this.setState({ show: !this.state.show }) }} >Iniciar Test</button>
                <div className="App">
                    <header className="App-header">
                        <div>
                            {this.state.show ? <div><App /></div> : null}
                        </div>
                    </header>
                </div>

                <section id="modulo-login">
                    <div>
                        {this.state.hide ? <section className="login">
                            <form className="box">
                                <h1>Test</h1>
                                <input type='text'  placeholder="Nombres" required></input>
                                <input type='text' onChange={this.habilitarBoton} placeholder="Apellidos" required></input>
                                <button id="btn-v" className="btn-mostrar" disabled={this.state.disabled} onClick={() => { this.setState({ hide: !this.state.hide }) }} >Ingresar</button>

                            </form>
                        </section>
                            : null}
                    </div>
                </section>

            </div>
        )
    }
}
export default login