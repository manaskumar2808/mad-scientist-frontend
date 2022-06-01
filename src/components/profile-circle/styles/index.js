import styled from 'styled-components/macro';

export const Container = styled.div`

`;

export const Display = styled.div`
    border-radius: 100%;
    border: 0.2px solid #ccc;
    overflow: hidden;
    height: ${({ radius }) => `${radius}px`};
    width: ${({ radius }) => `${radius}px`};
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;