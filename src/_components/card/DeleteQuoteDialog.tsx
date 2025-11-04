'use client';

import { useState } from "react"
import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react"
import { BsTrash } from "react-icons/bs";

export default function DeleteQuoteDialog({ handleDelete }: { handleDelete: () => void }) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} lazyMount role="alertdialog">
            <Dialog.Trigger asChild>
                <Button variant="ghost" colorPalette="red" size="sm" mt={3} >
                    <BsTrash />
                </Button>
            </Dialog.Trigger>

            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content borderRadius="xl" p={5}>
                        <Dialog.Header>
                            <Dialog.Title>¿Eliminar frase?</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Text>Esta acción no se puede deshacer. Se eliminará permanentemente.</Text>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancelar</Button>
                            </Dialog.ActionTrigger>
                            <Button colorPalette="red" onClick={handleDelete}>Eliminar</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}