"use client";

import {
    Button,
    Dialog,
    Portal,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
    Textarea,
    Box,
    CloseButton
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "@/store";
import { addQuote } from "@/store/quotesSlice";
import { toaster } from "@/components/ui/toaster";

interface AddQuoteDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function AddQuoteDialog({ open, onClose }: AddQuoteDialogProps) {
    const dispatch = useAppDispatch();
    const [newQuote, setNewQuote] = useState("");

    const handleSave = async () => {
        const t = newQuote.trim();
        if (!t) {
            toaster.warning({
                title: "La frase no puede estar vacía",
                duration: 5000
            });
            return;
        }

        try {
            await new Promise((r) => setTimeout(r, 120));
            dispatch(addQuote(t));
            setNewQuote("");
            onClose();
            toaster.success({ title: "Frase agregada exitosamente", duration: 5000 });
        } catch (err) {
            console.error("Error agregando frase", err);
            toaster.error({ title: "Error agregando frase", duration: 5000 });
        }
    };

    return (
        <Dialog.Root lazyMount open={open} onOpenChange={(e) => !e.open && onClose()}>
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content
                        bg="bg"
                        borderRadius="xl"
                        boxShadow="2xl"
                        maxW="500px"
                        p={6}
                    >
                        <DialogHeader>
                            <DialogTitle fontSize="xl" color="#6c63ff">
                                Agregar nueva frase
                            </DialogTitle>
                        </DialogHeader>

                        <DialogBody>
                            <Box mb={4}>
                                <Textarea
                                    placeholder="Escribe aquí tu frase..."
                                    value={newQuote}
                                    onChange={(e) => setNewQuote(e.target.value)}
                                    rows={4}
                                    resize="none"
                                    focusRingColor={"#6c63ff"}
                                />
                            </Box>
                        </DialogBody>

                        <DialogFooter>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button
                                bg="#6c63ff"
                                color="white"
                                onClick={handleSave}
                                cursor={"pointer"}
                                _hover={{
                                    transform: "scale(1.08)",
                                    boxShadow: "0 0 20px rgba(108, 99, 255, 0.5)",
                                    bg: "#7a73ff",
                                }}
                            >
                                Guardar
                            </Button>
                        </DialogFooter>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}