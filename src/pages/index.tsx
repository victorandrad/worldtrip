import { Box, Flex, VStack, Image, Stack, HStack, Text, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SwiperSlider } from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Header />
      <VStack
        spacing="10"
        w="100%"
      >
        <Image w="100%" src="Background.png" alt="Banner Principal" />
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={{ base: "8", md: "300" }}
        >
          <VStack
            spacing="6"
          >
            <Image src="Cocktail.svg" alt="Vida noturna" />
            <Text
              fontSize="lg"
              fontWeight="bold"
            >
              vida noturna
            </Text>
          </VStack>

          <VStack
            spacing="6"
          >
            <Image src="Surf.svg" alt="Praia" />
            <Text
              fontSize="lg"
              fontWeight="bold"
            >
              praia
            </Text>
          </VStack>

          <VStack
            spacing="6"
          >
            <Image src="Building.svg" alt="Moderno" />
            <Text
              fontSize="lg"
              fontWeight="bold"
            >
              morderno
            </Text>
          </VStack>

          <VStack
            spacing="6"
          >
            <Image src="Museum.svg" alt="Clássico" />
            <Text
              fontSize="lg"
              fontWeight="bold"
            >
              clássico
            </Text>
          </VStack>

          <VStack
            spacing="6"
          >
            <Image src="Earth.svg" alt="E mais" />
            <Text
              fontSize="lg"
              fontWeight="bold"
            >
              e mais...
            </Text>
          </VStack>
        </Stack>

        <Divider
          w="20"
          my="6"
          borderColor="gray.700"
        />

        <Box>
          <Flex
            justifyContent="center"
          >
            <Text
              fontSize="36px"
              fontWeight="500"
            >
              Vamos nessa?
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
          >
            <Text
              fontSize="36px"
              fontWeight="500"
            >
              Então escolha seu continente
            </Text>
          </Flex>
        </Box>

        <SwiperSlider />

        <Box />
      </VStack>
    </>
  )
}
