import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

type NavLink = {
  to: string;
  label: string;
};

type MenuItems = {
  to: string;
  label: string;
};

type NavBarProps = {
  logo: string;
  action: React.ReactNode;
  menuItems: MenuItems[];
  links: NavLink[];
};

const NavBar = ({ logo, action }: NavBarProps) => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box>{logo}</Box>
          <HStack as={'nav'} spacing={4} display="flex">
            {'Portal'}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>{action}</Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
