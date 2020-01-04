import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import styles from '../Header/Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render(){
    return (
      <header>{styles.component}
        <Container>
          <div className = {styles.wrapper}>
            <Link to='/' className ={styles.logo}>
              <Icon name= {settings.header.logoIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;