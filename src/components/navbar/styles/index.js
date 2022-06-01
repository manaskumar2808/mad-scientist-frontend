import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import '../../../index.css';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 0.2px solid #ccc;
    align-items: center;
    z-index: 300;
    /* position: fixed; */
    background-color: #fff;
`;

export const Wrapper = styled.div`
    width: 56%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Section = styled.div``;

export const Left = styled.div`
    /* width: 16%;
    min-width: 150px; */
    /* display: flex;
    justify-content: start;
    align-items: center; */
`;

export const Brand = styled.div`
    cursor: pointer;
    font-family: 'Lobster';
    font-size: 25px;

    &::first-letter {
        color: #1890FF;
    }

    @font-face {
        font-family: 'Lobster';
        src:  url('/public/fonts/Lobster/Lobster-Regular.ttf') format('ttf');
    }
`;

export const SearchSection = styled.div`
    /* width: 70%; */
`;

export const Right = styled.div`
    /* width: 250px; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavItem = styled.div`
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    &:hover {
        color: #1890FF;
    }
`;

export const Nav = styled(NavLink)`

`;  