import React from 'react';
import { Container } from './styles';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/navbar';

import HomePage from '../../pages/home';
import AuthPage from '../../pages/auth';
import PostPage from '../../pages/post';

const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path={'/auth'} element={<AuthPage />} />
                <Route path={'/post'} element={<PostPage />} />
                <Route path={'/'} element={<HomePage />} />
            </Routes>
        </Container>
    );
}

export default Layout;