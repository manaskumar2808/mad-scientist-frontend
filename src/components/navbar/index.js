import React from 'react';
import { constants, specifications } from '../../utilities/specifications';
import { Container, Wrapper, Left, SearchSection, Right, NavItem, Nav, Brand } from './styles';

import { GrHomeRounded } from 'react-icons/gr';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RiMessengerLine, RiCompass3Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Brand>
                        {specifications.AppName}
                    </Brand>
                </Left>

                <SearchSection>

                </SearchSection>
                
                <Right>
                    <NavItem>
                        <Nav to={'/'} exact>
                            <GrHomeRounded size={23} color={constants.color.secondary} />
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav to={'/messenger'} exact>
                            <RiMessengerLine size={26} color={constants.color.secondary}  />
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav to={'/post'} exact>
                            <BiMessageSquareAdd size={26} color={constants.color.secondary}  />
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav to={'/explore'} exact>
                            <RiCompass3Line size={26} color={constants.color.secondary}  />
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav to={'/activities'} exact>
                            <FaRegHeart size={23} color={constants.color.secondary}  />
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav to={'/auth'} exact>
                            <HiOutlineUserCircle size={27} color={constants.color.secondary}  />
                        </Nav>
                    </NavItem>
                </Right>
            </Wrapper>

        </Container>
    );
}

export default Navbar;