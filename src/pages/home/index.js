import React, { useEffect, useState } from 'react'; 
import Account from '../../components/account';
import Post from '../../components/post';
import {
    AccountList,
    Container,
    Main,
    PostList,
    Padder,
    AccountListAction,
    AccountListActionSection,
    AccountListHeader,
    AccountListHeaderTitle,
    AccountListHeaderTitleSection,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUsers } from '../../store';
import { message } from 'antd';

const HomePage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usr.users);
    const posts = useSelector(state => state.pst.posts);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchPosts())
            .then(response => {
                return dispatch(fetchUsers());
            }).then(response => {
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                if (err.response) {
                    message.error(err.response.data.message);
                } else {
                    message.error('Something went wrong!');
                }
            });
    }, [dispatch]);

    // useEffect(() => {
    //     // console.log('users :', users);
    //     console.log('posts :', posts);
    // }, [posts]);

    if (isLoading) {
        return <Container />;
    }

    return (
        <Container>
            <Main>
                <PostList>
                    <Padder />
                    {
                        posts.map(post => <Post 
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            gallery={post.gallery}
                            creator={post.creator}
                        />)
                    }
                    {/* <Post
                        title={'Utrecht, Netherlands'}
                        description={'A foggy morning...'}
                        gallery={[{image: 'https://pinno.app/api/internal/cdb/contents/b3bc5bda-c83b-431d-bf5f-ef9256127910/0/18212', caption: 'pinno'}]}
                        creator={{
                            userName: 'voyaged',
                            image: 'https://thebesttravelplaces.com/wp-content/uploads/2018/04/photo_14_03_2018__13_hEJF9-1068x801.jpg',
                        }}
                    />
                    <Post
                        title={'Utrecht, Netherlands'}
                        description={'A foggy morning...'}
                        gallery={[{image: 'https://pinno.app/api/internal/cdb/contents/b3bc5bda-c83b-431d-bf5f-ef9256127910/0/18212', caption: 'pinno'}]}
                        creator={{
                            userName: 'voyaged',
                            image: 'https://thebesttravelplaces.com/wp-content/uploads/2018/04/photo_14_03_2018__13_hEJF9-1068x801.jpg',
                        }}
                    /> */}
                    <Padder />
                </PostList>
                <div style={{ width: 30 }} />
                <AccountList>
                    <Padder />
                    <AccountListHeader>
                        <AccountListHeaderTitleSection>
                            <AccountListHeaderTitle>
                                Suggestions for you
                            </AccountListHeaderTitle>
                        </AccountListHeaderTitleSection>
                        <AccountListActionSection>
                            <AccountListAction>
                                See All
                            </AccountListAction>
                        </AccountListActionSection>
                    </AccountListHeader>
                    {
                        users.map(user => <Account
                            key={user.id}
                            user={user}
                            subtext={'Suggested for you'}
                        />)
                    }
                    {/* <Account
                        key={'ac1'}
                        user={{
                            userName: 'ragnorcricketclub',
                            image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-492165,resizemode-1,msid-70676334/magazines/panache/howzzat-london-cricket-club-adopt-cruelty-free-living-introduces-vegan-ball/cricket-ball_istock.jpg',
                        }}
                        subtext={'Suggested for you'}
                    />
                    <Account
                        key={'ac2'}
                        user={{
                            userName: 'ragnorcricketclub',
                            image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-492165,resizemode-1,msid-70676334/magazines/panache/howzzat-london-cricket-club-adopt-cruelty-free-living-introduces-vegan-ball/cricket-ball_istock.jpg',
                        }}
                        subtext={'Suggested for you'}
                    /> */}
                </AccountList>
            </Main>
        </Container>
    );
}

export default HomePage;