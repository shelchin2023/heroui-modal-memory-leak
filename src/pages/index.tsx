import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';
import DefaultLayout from "@/layouts/default";
import DisplayBufferSize from '@/components/displayBufferSize';

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [buffer, setBuffer] =
    useState<ArrayBuffer | null>(null);
  useEffect(() => {
    if (!isOpen) {
      setBuffer(null);
    }
  }, [isOpen]);
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Button size="sm" onPress={onOpen}> open modal </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Set Buffer
            </ModalHeader>
            <ModalBody>
              <Button onPress={() => {
                const sizeInBytes = 50 * 1024 * 1024;
                const buffer = new ArrayBuffer(sizeInBytes);
                setBuffer(buffer)
              }}>Set Buffer</Button>
              
              <DisplayBufferSize title='inside modal' buffer={buffer} />
            </ModalBody>
          </ModalContent>
        </Modal>
        <DisplayBufferSize title="outside Modal" buffer={buffer} />
      </section>
    </DefaultLayout>
  );
}
