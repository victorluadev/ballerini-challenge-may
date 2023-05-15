import { useState } from 'react';
import { Container } from "./style";
import Header from '../../components/Header';

type TTheme = 'dark' | 'white';

const Home = () => {
  const [theme, setTheme] = useState<TTheme>('dark');
  
  return (
    <Container theme={theme}>
      <Header theme={theme}/>
    </Container>
  )
}

export default Home;