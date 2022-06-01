import React, { useState } from 'react';
import ProfileCircle from '../profile-circle';
import {
    Container,
    Actions,
    Action,
    Creator,
    Likes,
    Description, 
    Display, 
    Header, 
    MainSection, 
    Photo, 
    ProfileSection, 
    ReportSection, 
    Title, 
    Info,
    Footer,
    DisplaySection,
} from './styles';
import { FaRegHeart, FaHeart, FaRegCommentAlt, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { FiSend, FiMoreHorizontal } from 'react-icons/fi';
import { constants } from '../../utilities/specifications';
import Comment from '../comment';
import Modal from '../modal';
import { optionMap } from '../../utilities/report';
import { useDispatch } from 'react-redux';
import { submitReport } from '../../store';

const Post = ({ id, title, description, gallery, creator: { userName, image } }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const [isBookmarked, setIsBookmarked] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [stage, setStage] = useState(0);

    const toggleModal = () => {
        setOpenModal(prevState => !prevState);
        setStage(0);
    }

    const toggleLike = () => {
        if (isLiked) {
            setLikes(prevState => prevState - 1);
        } else {
            setLikes(prevState => prevState + 1);
        }
        setIsLiked(prevState => !prevState);
    }

    const toggleBookmark = () => {
        setIsBookmarked(prevState => !prevState);
    }

    const handleSubmitReport = (reason) => {
        const reportData = {
            post: id,
            reason,
        };
        dispatch(submitReport(reportData));
    }

    const onSelect = (value) => {
        if (stage === 0) {
            if (value !== 'Report') {
                toggleModal();
                return;
            }
        } else if (stage === 1) {
            handleSubmitReport(value);
        } else if (stage === 2) {
            toggleModal();
            return;
        }
        setStage(prevState => prevState + 1);
    }

    return (
        <Container>
            <Header>
                <ProfileSection>
                    <ProfileCircle radius={35} src={image} alt={userName} />
                </ProfileSection>
                <div style={{ width: 10 }} />
                <MainSection>
                    <Creator>
                        {userName}
                    </Creator>
                    <Title>
                        {title}
                    </Title>
                </MainSection>
                <div style={{ flex: 1 }} />
                <ReportSection>
                    <FiMoreHorizontal size={24} color={constants.color.secondary} onClick={toggleModal} />
                </ReportSection>
                <div style={{ width: 10 }} />
            </Header>
    
            <DisplaySection>
                <Display>
                    <Photo src={gallery} alt={title} />
                </Display>
            </DisplaySection>
                
            <Info>
                <Actions>
                    <Action>
                        {isLiked ? <FaHeart size={24} color={constants.color.danger} onClick={toggleLike} /> : <FaRegHeart size={24} color={constants.color.secondary} onClick={toggleLike} />}
                    </Action>
                    <Action>
                        <FaRegCommentAlt size={22} color={constants.color.secondary} />
                    </Action>
                    <Action>
                        <FiSend size={24} color={constants.color.secondary} />
                    </Action>
                    <div style={{ flex: 1 }} />
                    <Action>
                        {isBookmarked ? <FaBookmark size={24} color={constants.color.secondary} onClick={toggleBookmark} /> : <FaRegBookmark size={24} color={constants.color.secondary} onClick={toggleBookmark} />}
                    </Action>
                </Actions>
                <Likes>
                    {likes} likes
                </Likes>
                <Description>
                    {description}
                </Description>
            </Info>

            <Footer>
                <Comment comment={comment} setComment={setComment} />
            </Footer>

            <Modal
                title={optionMap[stage].title}
                visible={openModal}
                onClose={toggleModal}
                onOk={toggleModal}
                options={optionMap[stage].options}
                done={stage === 2}
                onSelect={onSelect}
            />
        </Container>
    );
}

export default Post;