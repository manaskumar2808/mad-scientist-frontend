import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div``;

export const Option = styled.div`
    cursor: pointer;
    width: 100%;
    text-align: center;
    align-items: center;
    border-bottom: 0.2px solid #ccc;
    padding: 10px 0;
    color: ${({ danger = false }) => danger ? `${constants.color.danger}` : `${constants.color.black}` };

    :last-of-type {
        border: none;
    }
`;

export const CheckSection = styled.div`
    margin: 10px 0 0;
    width: 100%;
    border-bottom: 0.2px solid #ccc;
    text-align: center;
    padding: 0 50px;
`;

export const ThankText = styled.p`
    font-size: 14px;
    color: ${() => `${constants.color.secondary}`};
`;