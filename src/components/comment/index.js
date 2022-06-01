import React from 'react';
import { Container, Wrapper, Button, Input, InputSection, ButtonSection } from './styles';

const Comment = ({ comment, setComment }) => {
    return (
        <Container>
            <Wrapper>
                <InputSection>
                    <Input
                        type='text'
                        placeholder='Add a comment...'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </InputSection>
                <ButtonSection>
                    <Button disabled={comment.trim().length === 0}>
                        Post
                    </Button>
                </ButtonSection>
            </Wrapper>
        </Container>
    );
}

export default Comment;