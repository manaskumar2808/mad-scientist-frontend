import React, { useState } from 'react';
import ProfileCircle from '../profile-circle';
import {
    Container,
    Follow,
    FollowSection,
    InfoSection,
    ProfileSection,
    Subtext,
    Username,
    Wrapper,
} from './styles';

const Account = ({ user: { userName, image }, subtext }) => {
    const [following, setFollowing] = useState(false);

    const toggleFollow = () => {
        setFollowing(prevState => !prevState);
    }

    return (
        <Container>
            <Wrapper>
                <ProfileSection>
                    <ProfileCircle src={image} alt={userName} radius={30} />
                </ProfileSection>
                <div style={{ width: 10 }} />
                <InfoSection>
                    <Username>
                        {userName}
                    </Username>
                    <Subtext>
                        {subtext}
                    </Subtext>
                </InfoSection>
                <FollowSection>
                    <Follow onClick={toggleFollow}>
                        {following ? 'Following' : 'Follow'}
                    </Follow>
                </FollowSection>
            </Wrapper>
        </Container>
    );
}

export default Account;