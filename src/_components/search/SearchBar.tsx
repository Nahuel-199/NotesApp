"use client";

import React, { useState } from "react";
import { Button, Input, HStack, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { useAppDispatch } from "@/store";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { setFilter } from "@/store/quotesSlice";
import AddQuoteDialog from "./AddQuoteDialog";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const debounced = useDebouncedValue(search, 200);

  React.useEffect(() => {
    dispatch(setFilter(debounced));
  }, [debounced, dispatch]);

  return (
    <>
      <HStack mb={4} w="100%">
        <InputGroup flex="1" startElement={<LuSearch style={{ marginLeft: "10px" }} />}>
          <Input
            placeholder="Buscar frases..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            p={4}
          />
        </InputGroup>

        <Button
          onClick={() => setOpenDialog(true)}
          bg="#6c63ff"
          color="white"
          p={4}
          fontWeight="bold"
          transition="all 0.2s ease"
          _hover={{
            transform: "scale(1.08)",
            boxShadow: "0 0 20px rgba(108, 99, 255, 0.5)",
            bg: "#7a73ff",
          }}
        >
        <FiPlus />  Agregar
        </Button>
      </HStack>

      <AddQuoteDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </>
  );
}