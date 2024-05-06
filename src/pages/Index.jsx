import { Container, VStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" p={4} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ5OTY0ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mb={4} />
      <VStack spacing={2} align="center">
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="md">Software Developer | React Specialist</Text>
        <Text fontSize="sm" color="gray.500">
          Based in New York, USA
        </Text>
      </VStack>
      <VStack spacing={4} mt={5}>
        <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            LinkedIn
          </Link>
        </Button>
        <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
          <Link href="https://github.com/johndoe" isExternal>
            GitHub
          </Link>
        </Button>
        <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
          <Link href="mailto:johndoe@example.com" isExternal>
            Email Me
          </Link>
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
