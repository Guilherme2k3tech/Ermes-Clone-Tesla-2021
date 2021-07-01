import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Models/useWrapperScroll';

import { Container, Header, Burguer, Footer, Logo} from './styles';

const UniqueOverlay: React.FC = () => {
  const {scrollYProgress} = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0,1])

  return (

    <Container>
      <Header> 
        <Logo/>
        <Burguer/>
      </Header>

      
      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#">Ermes</a>
          </li>
          <li>
            <a href="#">2021</a>
          </li>
          <li>
            <a href="#">TeslaClone 1.0</a>
          </li> 
        </ul>
      </Footer>




    </Container>

  );

};

export default UniqueOverlay;