import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${() => `${constants.color.background}`};
`;