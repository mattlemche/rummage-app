import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const MobileHeader = () => {
    return (
        <header className="mobile-header">
            <nav className="mobile-nav mobile-nav--header">
                <ul className="mobile-nav__list">
                    <li className="mobile-nav__item">
                        <NavLink to="/search" className="link link--mobile-nav" activeClassName="mobile-nav__link--active">
                            <SearchIcon className="mobile-nav__icon"/>
                            <div className="mobile-nav__title">
                                Search
                            </div>
                        </NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink to="/profile" className="link link--mobile-nav" activeClassName="mobile-nav__link--active">
                            <UserIcon className="mobile-nav__icon"/>
                            <div className="mobile-nav__title">
                                Profile
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};

export default MobileHeader;