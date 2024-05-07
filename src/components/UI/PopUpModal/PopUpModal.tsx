import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IPopUpModalProps {
    modalText: string;
    buttonText: string;
    onClick: () => void;
}

export const PopUpModal: React.FC<IPopUpModalProps> = ({
    modalText,
    buttonText,
    onClick,
}) => {
    return (
        <>
            <Button onClick={onClick}>Toggle modal</Button>
            <Modal show={true} size="md" onClose={onClick} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {modalText}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={onClick}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
