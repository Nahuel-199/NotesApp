"use client";

import { toaster } from "@/components/ui/toaster";
import {
    Button,
    Dialog,
    Portal,
    Input,
    CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";

interface EditQuoteDialogProps {
    onSave: (newText: string) => void;
    initialText: string;
}

export default function EditQuoteDialog({
    onSave,
    initialText,
}: EditQuoteDialogProps) {
    const [text, setText] = useState(initialText);
    const [open, setOpen] = useState(false)

    const handleSave = () => {
        if (!text.trim()) return;
        onSave(text.trim());
        toaster.success({
            title: "Frase actualizada",
            duration: 4000,
        });
        setOpen(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} lazyMount>
            <Dialog.Trigger asChild>
                <Button variant="ghost" colorPalette="blue" size="sm" mt={3} >
                    <LiaEditSolid />
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content borderRadius="xl" p={5}>
                        <Dialog.Header>
                            <Dialog.Title fontSize="xl" color="#6c63ff">Editar frase</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Edita tu frase..."
                                autoFocus
                            />
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button
                                bg="#6c63ff"
                                color="white"
                                cursor={"pointer"}
                                onClick={handleSave}
                                _hover={{
                                    transform: "scale(1.08)",
                                    boxShadow: "0 0 20px rgba(108, 99, 255, 0.5)",
                                    bg: "#7a73ff",
                                }}
                            >
                                Guardar
                            </Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}