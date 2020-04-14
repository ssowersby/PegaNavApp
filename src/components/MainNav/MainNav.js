import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    useHistory
  } from 'react-router-dom';
import './MainNav.css';
import logo from './pega-white-logo.png';
import arrow from './arrow-icon.png';
import downArrow from './down-arrow-icon.png';
import create from './create-icon.png';

export function MainNav({createOptions, navOptions}) {
    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        if (dropdownOpen) {
            setDropdownOpen(false);
        } else {
            setDropdownOpen(true);
        }
    }

    return (
        <div className="nav">
            <div className="header">
                <img className="pega-logo" src={logo} alt="Pega Logo" /> 
                <p>Pega Nav</p>
            </div>
            <div className="create-card">
                <div className="create-button" onClick={() => toggleDropdown()}>
                    <img className="icon" src={create} alt="Create Card" />
                    <p>Create</p>
                    <img className="arrow-icon" src={(dropdownOpen ? downArrow : arrow)} alt="Dropdown" />
                </div>
                {dropdownOpen && createOptions.map(option => {
                    return (
                        <div key={option.title} className="dropdown-option">
                            <p>{option.title}</p>
                        </div>
                    );
                })}
            </div>
            {navOptions.map(option => {
                return (
                    <div className="card" onClick={() => history.push(option.path)}>
                        <img className="icon" src={option.icon} alt={option.title} />
                        <p>{option.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

MainNav.propTypes = {
    createOptions: PropTypes.array,
    navOptions: PropTypes.array
};

export default MainNav;
