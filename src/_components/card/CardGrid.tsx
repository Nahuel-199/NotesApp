"use client";

import { SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { useMemo, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import { loadFromStorage } from "@/store/quotesSlice";
import QuoteCard from "./QuoteCard";
import { LuSearchX } from "react-icons/lu";

export default function CardGrid() {
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);

  const filtered = useMemo(() => {
    const f = filter.toLowerCase().trim();
    return f ? items.filter((q) => q.text.toLowerCase().includes(f)) : items;
  }, [items, filter]);

  if (!filtered.length)
    return (
      <VStack
        gap={3}
        align="center"
        justify="center"
        h="50vh"
        opacity={0.8}
      >
        <Icon as={LuSearchX} boxSize={12} color="gray.400" />
        <Text fontSize="lg" fontWeight="medium" color="gray.500">
          No encontramos ninguna frase que coincida
        </Text>
        <Text fontSize="sm" color="gray.400">
          Probá con otra palabra o agregá una nueva frase ✨
        </Text>
      </VStack>
    );

  return (
    <SimpleGrid columns={[1, 2, 3]} gap={4}>
      {filtered.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </SimpleGrid>
  );
}