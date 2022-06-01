import styled from 'styled-components/macro';
import { constants } from '../../../utilities/specifications';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const Main = styled.div`
    width: 57%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    /* margin-top: 30px; */
`;

export const Padder = styled.div`
    height: 30px;
`;

export const PostList = styled.div`
    flex: 2;
    overflow: scroll;
    height: 100%;
`;

export const AccountList = styled.div`
    flex: 1;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const AccountListHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AccountListHeaderTitleSection = styled.div`
    flex: 1;
`;

export const AccountListHeaderTitle = styled.p`
    font-size: 13px;
    color: ${() => `${constants.color.secondary}`};
    margin: 0;
`;

export const AccountListActionSection = styled.div``;

export const AccountListAction = styled.p`
    font-size: 13px;
    color: ${() => `${constants.color.black}`};
    margin: 0;
`;