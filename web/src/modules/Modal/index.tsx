import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

type ModalBaseProps = {
    children: React.ReactNode;
    header?: string;
    onClose: () => void;
    isOpen?: boolean;
    id: string;
    size?: string;
    disallowClose?: boolean;
};

const ModalBase = ({
                       id,
                       isOpen = false,
                       onClose,
                       header,
                       children,
                       size = 'md',
                       disallowClose = false,
                   }: ModalBaseProps) => {
    return (
        <Modal
            {...{
                id,
                isOpen,
                onClose,
                size,
                closeOnOverlayClick: !disallowClose,
                closeOnEsc: !disallowClose,
            }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                {!disallowClose && <ModalCloseButton />}
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalBase;
