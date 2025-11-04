'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const HeaderSection: React.FC = () => {
    const svgRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useLayoutEffect(() => {
        if (!svgRef.current || !titleRef.current || !descRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(svgRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
            })
                .from(
                    titleRef.current,
                    { x: 100, opacity: 0, duration: 1 },
                    '-=0.8'
                )
                .from(
                    descRef.current,
                    { y: 30, opacity: 0, duration: 0.8 },
                    '-=0.6'
                );
        });

        return () => ctx.revert();
    }, []);

    const handleClick = () => {
        router.push('/notes');
    };

    return (
        <Box
            display="flex"
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            gap={10}
            p={10}
            w="100%"
            minH={{ base: 'auto', md: '90vh' }}
            overflow="hidden"
        >
            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                <Image
                    ref={svgRef}
                    src="/notes.svg"
                    alt="Ilustración de notas"
                    maxW={{ base: '80%', md: '90%' }}
                    filter="drop-shadow(0 0 25px rgba(108,99,255,0.5))"
                />
            </Box>

            <Box
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign={{ base: 'center', md: 'start' }}
            >
                <Text
                    ref={titleRef}
                    fontSize={{ base: '3xl', md: '7xl' }}
                    fontWeight="bold"
                    color="blackAlpha.800"
                    _dark={{ color: "white"}}
                    mb={6}
                    textTransform="uppercase"
                    lineHeight="1.2"
                >
                    <Text as="span" color="#6c63ff">
                        ¡Bienvenidos
                    </Text>{' '}
                    a tus notas!
                </Text>

                <Text
                    ref={descRef}
                    fontSize={{ base: 'md', md: 'xl' }}
                    color="gray.500"
                    maxW="600px"
                    mx={{ base: 'auto', md: 0 }}
                    mb={8}
                >
                    Inspírate cada día con palabras que importan. Crea tu colección personal de frases inolvidables.
                </Text>

                <Button
                    colorPalette="purple"
                    size={{ base: 'md', md: 'lg' }}
                    px={8}
                    py={6}
                    fontWeight="bold"
                    boxShadow="0px 0px 25px rgba(108,99,255,0.6)"
                    alignSelf={{ base: 'center', md: 'flex-start' }}
                    _hover={{
                        transform: 'scale(1.08)',
                        boxShadow: '0px 0px 35px rgba(108,99,255,0.8)',
                    }}
                    onClick={handleClick}
                >
                    Comenzar ahora 🚀
                </Button>
            </Box>
        </Box>
    );
};

export default HeaderSection;