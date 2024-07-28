import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginFormAsync } from '../loginForm/loginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = props => {
    const { isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
