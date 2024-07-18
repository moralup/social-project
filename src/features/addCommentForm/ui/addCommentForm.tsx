import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddComment } from '../api/addCommentApi';
import { getUserAuthData } from 'entities/user';
import { CommentForm } from 'entities/commentForm';

interface AddCommentFormProps {
    articleId: string;
}

export const AddCommentForm: FC<AddCommentFormProps> = props => {
    const { articleId } = props;

    const [text, setText] = useState('');
    const userData = useSelector(getUserAuthData);
    const [trigger, { isError, isLoading }] = useAddComment();

    if (!userData?.id || isError) {
        return null;
    }

    const onSendCommentHandler = () => {
        trigger({
            articleId,
            userId: userData.id,
            text,
        });
        setText('');
    };

    return (
        <CommentForm
            isLoading={isLoading}
            inputValue={text}
            onChangeInput={setText}
            onSendComment={onSendCommentHandler}
        />
    );
};
