import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div`
    border: 0.2px solid #ccc;
    border-radius: 10px;
    margin: 0 0 20px;
    background-color: ${() => `${constants.color.light}`};
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`;

export const ProfileSection = styled.div``;

export const MainSection = styled.div``;

export const Creator = styled.p`
    font-size: 16px;
    margin: 0;
`;

export const Title = styled.p`
    font-size: 12px;
    color: ${() => `${constants.color.secondary}`};
    margin: 0;
`;

export const ReportSection = styled.div`
    cursor: pointer;
`;

export const DisplaySection = styled.div`
    width: 100%;
    /* max-height: 500px; */
`;

export const Display = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    padding: 10px;
    box-sizing: border-box;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.div`
    cursor: pointer;
    margin: 0 9px;

    /* :first-of-type {
        margin-left: 0;
    }

    :last-of-type {
        margin-right: 0;
    } */
`;

export const Likes = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 14px;
    margin: 0;
`;

export const Timestamp = styled.p`
    font-size: 11px;
`;

export const Footer = styled.div``;
