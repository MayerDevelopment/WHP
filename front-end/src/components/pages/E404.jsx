import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import BC from '../BC';

class E404 extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    
    render() {
        return (
            <div className="page-container center">
                <BC path={['Страница не найдена']} />
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <a onClick={this.props.history.goBack} className="btn">Назад</a>
                <NavLink to="/" className="btn btn-success">Главная</NavLink>
            </div>
        );
    }
}

export default E404;