import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/article';

import { Button, ButtonTheme } from '@/shared/ui/Button';

// Icons
import CompactViewIcon from '@/shared/assets/icons/view-compact.svg';
import DetailedViewIcon from '@/shared/assets/icons/view-detailed.svg';

import cls from './articleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.COMPACT,
        Icon: CompactViewIcon,
    },
    {
        view: ArticleView.DETAILED,
        Icon: DetailedViewIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = props => {
    const { className, view: activeView, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map(({ Icon, view }) => (
                <Button
                    key={view}
                    onClick={onClick(view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        className={classNames(cls.icon, {
                            [cls.active]: view === activeView,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
};
