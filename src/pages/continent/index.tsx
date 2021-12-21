
import { Flex, Box, Heading, Text, Grid, GridItem, Image, Icon, Tooltip } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { RiInformationLine } from 'react-icons/ri';

export default function Continent() {
    return (
        <>
            <Header />
            <Flex w="100%" h={500} bg={`url('Banner.png') no-repeat`} bgSize="cover" align="flex-end" justify="center">
                <Box w={1160} mb="59px">
                    <Heading fontSize="5xl" fontWeight="600" color="#fff">Europa</Heading>
                </Box>
            </Flex>
            <Flex w={1160} m="0 auto" mt="80px">
                <Box w="50%">
                    <Text fontSize="2xl" textAlign="justify" lineHeight="36px">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </Box>
                <Flex w="50%" align="center" justify="space-around">
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">50</Heading>
                        <Text fontSize="lg" fontWeight="600">países</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">60</Heading>
                        <Text fontSize="lg" fontWeight="600">línguas</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">27</Heading>

                        <Text fontSize="lg" fontWeight="600">

                            <Flex
                                align="center"
                                justify="center"
                                gridGap={2}
                            >
                                cidades +100
                                <Tooltip label='Total de 100 cidades' fontSize='md' hasArrow>
                                    <Flex>
                                        <Icon color="gray.400" as={RiInformationLine} />
                                    </Flex>
                                </Tooltip>
                            </Flex>
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={1160} m="0 auto" mt="80px" mb="35px" flexDir="column">
                <Heading fontSize="4xl" fontWeight="500">Cidades +100</Heading>
                <Grid templateColumns="repeat(4, 1fr)" gap={12} mt="40px">

                    <GridItem>
                        <Image src="/countries/Londres.png" h="171.63px" w="100%" />
                        <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="xl">Londres</Heading>
                                <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">Reino Unido</Text>
                            </Box>
                            <Image src="/brand-countries/Londres.png" w="30px" h="30px" />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Image src="/countries/Londres.png" h="171.63px" w="100%" />
                        <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="xl">Londres</Heading>
                                <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">Reino Unido</Text>
                            </Box>
                            <Image src="/brand-countries/Londres.png" w="30px" h="30px" />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Image src="/countries/Londres.png" h="171.63px" w="100%" />
                        <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="xl">Londres</Heading>
                                <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">Reino Unido</Text>
                            </Box>
                            <Image src="/brand-countries/Londres.png" w="30px" h="30px" />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Image src="/countries/Londres.png" h="171.63px" w="100%" />
                        <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="xl">Londres</Heading>
                                <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">Reino Unido</Text>
                            </Box>
                            <Image src="/brand-countries/Londres.png" w="30px" h="30px" />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Image src="/countries/Londres.png" h="171.63px" w="100%" />
                        <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="xl">Londres</Heading>
                                <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">Reino Unido</Text>
                            </Box>
                            <Image src="/brand-countries/Londres.png" w="30px" h="30px" />
                        </Flex>
                    </GridItem>

                </Grid>
            </Flex>
        </>
    );
}
