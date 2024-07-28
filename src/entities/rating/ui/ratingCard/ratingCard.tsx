import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { Drawer } from '@/shared/ui/drawer';
import { Modal } from '@/shared/ui/Modal';

import { StarRating } from '@/shared/ui/starRating';
import { Hstack, Vstack } from '@/shared/ui/stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ratingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onAccept?: (starCount: number, feedback: string) => void;
    onCancel?: (starCount: number) => void;
    rate?: number;
}

export const RatingCard: FC<RatingCardProps> = props => {
    const {
        //
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackInput, setFeedbackInput] = useState('');
    const [starCount, setStarCount] = useState(rate);
    const onSelectStars = useCallback(
        (starCount: number) => {
            setStarCount(starCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onCancel?.(starCount);
            }
        },
        [hasFeedback, onCancel],
    );

    const onAcceptHandler = () => {
        if (feedbackInput) {
            setIsModalOpen(false);
            onAccept?.(starCount, feedbackInput);
        }
    };

    const onCancelHandler = () => {
        setIsModalOpen(false);
        onCancel?.(starCount);
    };

    const modalContent = (
        <Vstack
            className={cls.modalContent}
            gap="32"
        >
            <Text title={feedbackTitle} />
            <Input
                value={feedbackInput}
                onChange={setFeedbackInput}
                theme={InputTheme.OUTLINE}
            />
            <Hstack
                justify="between"
                className={cls.modalContentBtns}
            >
                <Button
                    onClick={onCancelHandler}
                    theme={ButtonTheme.OUTLINE_WARN}
                >
                    {t('cancel')}
                </Button>
                <Button
                    onClick={onAcceptHandler}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('accept')}
                </Button>
            </Hstack>
        </Vstack>
    );

    return (
        <>
            <Vstack
                className={classNames(
                    cls.ratingCard,
                    { [cls.ratingCardOutline]: Boolean(title) },
                    [className],
                )}
                align="center"
            >
                <Text title={title} />
                <StarRating
                    onSelect={onSelectStars}
                    selectedStars={rate ?? starCount}
                />
            </Vstack>
            <MobileView>
                <Drawer
                    onClose={onCancelHandler}
                    isOpen={isModalOpen}
                >
                    {modalContent}
                </Drawer>
            </MobileView>
            <BrowserView>
                <Modal isOpen={isModalOpen}>{modalContent}</Modal>
            </BrowserView>
        </>
    );
};
