import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../loginForm/loginForm';
import cls from './loginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = props => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.loginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
