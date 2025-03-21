import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import DisplayBufferSize from '@/components/displayBufferSize';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIPage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [buffer, setBuffer] =
        useState<ArrayBuffer | null>(null);
    useEffect(() => {
        if (!open) {
            setBuffer(null);
        }
    }, [open]);

    return (
        <div>
            <Button onClick={handleOpen}> MUI Set Buffer </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={() => {
                        const sizeInBytes = 50 * 1024 * 1024;
                        const buffer = new ArrayBuffer(sizeInBytes);
                        setBuffer(buffer)
                    }}>Set Buffer</Button>
                    <DisplayBufferSize buffer={buffer} />
                </Box>
            </Modal>
        </div>
    );
}
