import React from 'react';
import { Container, Display, Photo } from './styles';

const ProfileCircle = ({src, alt, radius, ...props}) => {
    return (
        <Container>
            <Display radius={radius}>
                <Photo src={src} alt={alt} />
            </Display>
        </Container>
    );
}

export default ProfileCircle;