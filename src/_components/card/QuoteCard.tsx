'use client';

import { Box, Separator, Text } from "@chakra-ui/react";
import { editQuote, Quote, removeQuote } from '@/store/quotesSlice';
import { useAppDispatch } from "@/store";
import { memo } from "react";
import DeleteQuoteDialog from "./DeleteQuoteDialog";
import { toaster } from "@/components/ui/toaster";
import EditQuoteDialog from "./EditQuoteDialog";

function QuoteCard({ quote }: { quote: Quote }) {
  const dispatch = useAppDispatch();

  const handleEdit = (newText: string) => {
    dispatch(editQuote({ id: quote.id, newText }));
  };

  const handleDelete = () => {
    dispatch(removeQuote(quote.id));
    toaster.success({
      title: 'La frase se eliminó correctamente.',
      duration: 4000
    })
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      p={5}
      bgGradient="linear(to-br, gray.700, gray.800)"
      boxShadow="xl"
      position="relative"
      cursor={"pointer"}
      transition="all 0.3s"
      _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
    >

       <Box position="absolute" top={2} right={2} display="flex" gap={2}>
        <EditQuoteDialog onSave={handleEdit} initialText={quote.text} />
        <DeleteQuoteDialog handleDelete={handleDelete} />
      </Box>

      <Text mb={6} fontSize="md">{quote.text}</Text>
      <Separator />
      <Text fontSize="xs" opacity={0.7} mt={6}>
        {new Date(quote.createdAt).toLocaleString()}
      </Text>
    </Box>
  );
}

export default memo(QuoteCard);