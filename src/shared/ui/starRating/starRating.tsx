import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './starRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = props => {
    const {
        //
        className,
        onSelect,
        selectedStars = 0,
        size = 50,
    } = props;

    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starNumber: number) => () => {
        if (!isSelected) {
            onSelect?.(starNumber);
            setIsSelected(true);
            setCurrentStarCount(starNumber);
        }
    };

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map(starNumber => (
                <StarIcon
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: currentStarCount >= starNumber,
                        [cls.selected]: isSelected,
                    })}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    width={size}
                    height={size}
                    key={starNumber}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
