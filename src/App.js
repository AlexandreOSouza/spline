import { Box } from '@chakra-ui/react';
import Main from './components/main';
import Nav from './components/nav';

export default function App() {
  return (
    <Box bgColor={'#0E1129'} width={'100%'} height={'100vh'} padding={0} margin={0}>
      <Nav />
      <Main />
    </Box>
  );
}
