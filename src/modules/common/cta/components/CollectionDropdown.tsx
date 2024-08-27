"use client";
import { useAppUtils } from "@/lib/app/hooks";
import useApp from "@/lib/app/hooks/useApp";
import { IBaseCollection } from "@/lib/app/types";
import { LINKS } from "@/utils/links";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { FC, useMemo } from "react";

interface CollectionDropdownProps {}
const CollectionDropdown: FC<CollectionDropdownProps> = (props) => {
  const { config } = useApp();
  const { getCollections } = useAppUtils();

  const collections = useMemo(() => {
    return getCollections() as IBaseCollection[];
  }, [getCollections]);

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="solid"
        fontSize="md"
        rightIcon={<ChevronDown width={16} />}
        data-testid="collection-dropdown-button"
        bg="cyan.700" // Background color for the button
        color="gray.300" // Default text color (not white)
        _hover={{ bg: "cyan.600", color: "gray.200" }} // Text color on hover
        _active={{ bg: "cyan.800", color: "gray.100" }} // Text color when active
        _focus={{ boxShadow: "outline" }}
        transition="background-color 0.3s ease, color 0.3s ease"
        borderRadius="md"
        px="4"
        py="2"
      >
        Store
      </MenuButton>
      <MenuList
        data-testid="collection-dropdown-list"
        bg="gray.800" // Dark background for the dropdown
        borderColor="gray.700"
        color="gray.300" // Default text color (not white)
        borderRadius="md"
        boxShadow="lg"
        py="2"
        animation="fadeIn 0.3s ease"
      >
        {collections.map((col) => (
          <MenuItem
            animation="fadeIn 0.3s ease"
            as={Link}
            href={LINKS.collection(col.id)}
            key={col.id}
            data-testid={`collection-dropdown-item-${col.id}`}
            bg="gray.600"
            _hover={{ bg: "dark", color: "cyan.300" }} // Text color on hover
            _focus={{ bg: "gray.700", color: "cyan.300" }} // Text color when focused
            transition="background-color 0.2s ease, color 0.2s ease"
            px="4"
            py="2"
            borderRadius="md"
          >
            <CollectionLinkItem name={col.name} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

interface CollectionLinkItemProps {
  name: string;
}
const CollectionLinkItem: FC<CollectionLinkItemProps> = (props) => {
  const { name } = props;

  return <Text data-testid="collection-link-item-name">{name}</Text>;
};

export default CollectionDropdown;
