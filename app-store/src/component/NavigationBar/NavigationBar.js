import React from "react";


class NavigationBar extends React.Component{

    styleNavigationBar = {
        backgroundColor: 'orange',
        height: '70px',
        width: '1200px',
        minWidth: '800px',
        display:'flex',
        alignItems: 'center',
    }
    styleElements ={
        width: '1100px',
        display: 'flex',
        justifyContent: 'space-between',
        listStyle:'none',
    }
    styleInput = {
        width: '800px',
        height: '20px',
        borderRadius: '40px',
    }

    render(){
        return <div style = {this.styleNavigationBar}>

        <ul style={this.styleElements}>
            <li>LOGO</li>
            <li>
                <input style={this.styleInput} placeholder='Todo ESTO ES UNA BARRA DE NAVEGACION'/>
            </li>
            <li>Inicio de sesion</li>
            <li>Registro</li>
        </ul>

        </div>
    }

}

export default NavigationBar;