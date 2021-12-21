import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            align="center"
            justify="center"
        >
            <Image
                m="auto"
                width="46"
                h="12"
                src='Logo.svg'
                alt="Logo"
            />
        </Flex>
    );
}