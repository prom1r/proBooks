import { Modal, Button, Image, Text } from "@nextui-org/react";

const ModalItemBook = ({ author, bookTitle, description, visible, closeHandler }) => {
    return (
        <div>
            <Modal noPadding open={visible} onClose={() => closeHandler()}>
                <Modal.Header
                    css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                    <Text color="#363449">
                        {author}
                    </Text>
                    <Text color="#363449">
                        {bookTitle}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        showSkeleton
                        src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        width={400}
                        height={490}
                    />
                    <Button onClick={() => closeHandler()} light color="error" auto>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalItemBook

