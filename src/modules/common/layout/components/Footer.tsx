import { Flex, Text, Link, Icon, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaTwitter, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import useApp from "@/lib/app/hooks/useApp";

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  const { config } = useApp();

  return (
    <Flex
      backgroundColor="#101828"
      direction="column"
      textColor="white"
      align='center'
      p='4'
      data-testid="footer"
    >
      <Text data-testid="footer-text">
        More Information about <b>DAO RECORDS</b> can be found <Link href='https://github.com/Highlander-maker/dao_records' target="_blank" data-testid="footer-link">here</Link>
      </Text>

       {/* Social Media Links */}
       <HStack spacing="6">
        <Text>Contact Us:</Text>
        <Link href="https://twitter.com/@highlandercts" isExternal>
          <Icon as={FaTwitter} boxSize="6" />
        </Link>
        <Link href="https://t.me/highlanderjuno" isExternal>
          <Icon as={FaTelegramPlane} boxSize="6" />
        </Link>
        <Link href="https://instagram.com/DaoRecordsJuno" isExternal>
          <Icon as={FaInstagram} boxSize="6" />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
