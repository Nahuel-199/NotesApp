'use client';

import { useEffect, useRef } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Icon
} from "@chakra-ui/react";
import { FaRegStickyNote } from "react-icons/fa";
import CardGrid from "@/_components/card/CardGrid";
import SearchBar from "@/_components/search/SearchBar";
import { useAppSelector } from "@/store";
import gsap from "gsap";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function NotesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const noteCount = useAppSelector((state) => state.quotes.items.length);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <VStack gap={10} p={{ base: 6, md: 10 }} align="stretch" minH="100vh">
      <HStack
        ref={heroRef}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading size="2xl" color="#6c63ff">
            Tus frases favoritas
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mt={2}>
            Captura tus ideas y encuéntralas al instante
          </Text>
        </Box>
        <HStack gap={2}>
          <Icon as={FaRegStickyNote} color="#6c63ff" boxSize={5} />
          <Text fontWeight="medium" color="gray.500">
            {noteCount} {noteCount === 1 ? "nota guardada" : "notas guardadas"}
          </Text>
           <ColorModeButton />
        </HStack>
      </HStack>
      <HStack
        gap={3}
        w={{ base: "100%", md: "auto" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Box w={{ base: "100%", md: "500px" }}>
          <SearchBar />
        </Box>
      </HStack>
      <Box ref={cardsRef}>
        <CardGrid />
      </Box>
    </VStack>
  );
}