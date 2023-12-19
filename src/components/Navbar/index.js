import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Главная страница
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Окно помощи
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
Войти
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
Зарегистрироваться
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
