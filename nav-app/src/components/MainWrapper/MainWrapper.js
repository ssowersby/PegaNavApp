import React from 'react';
import PropTypes from 'prop-types';
import './MainWrapper.css';
import {
    MainNav
} from '../../components';
import home from './home-icon.png';
import bug from './bug-icon.png';
import epic from './epic-icon.png';

export function MainWrapper({children}) {
    const createOptions = [{title: 'Bug'}, {title: 'Epic'}, {title: 'User Story'}];
    const navOptions = [
        {
            path: '/',
            title: 'Home',
            icon: home
        },
        {
            path: '/bugs',
            title: 'Bugs',
            icon: bug
        },
        {
            path: '/epics',
            title: 'Epics',
            icon: epic
        }
    ];

    return (
        <div className="root">
            <MainNav createOptions={createOptions} navOptions={navOptions} />
            {children}
        </div>
    );
}

MainWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default MainWrapper;
