import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div`
    height: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-top: 0.1px solid #eee;
`;

export const InputSection = styled.div`
    flex: 9;
`;

export const Input = styled.input`
    border: none;

    :focus {
        outline: none;
    }
`;

export const ButtonSection = styled.div`
    flex: 1;
`;

export const Button = styled.button`
    color: ${() => `${constants.color.primary}`};
    border: none;
    background: none;

    :disabled {
        color: ${() => `${constants.color.primary}A0`};
    }
`;