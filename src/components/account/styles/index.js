import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div`
    margin: 10px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ProfileSection = styled.div``;

export const InfoSection = styled.div`
    flex: 1;
`;

export const Username = styled.p`
    font-size: 14px;
    color: ${() => `${constants.color.black}`};
    margin: 0;
`;

export const Subtext = styled.p`
    font-size: 11px;
    color: ${() => `${constants.color.secondary}`};
    margin: 0;
`;

export const FollowSection = styled.div``;

export const Follow = styled.p`
    cursor: pointer;
    color: ${() => `${constants.color.primary}`};
`;