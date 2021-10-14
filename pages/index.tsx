import type { NextPage } from 'next';
import Layout from 'components/Layout';
import Banner from 'sections/Banner';
import Mint from 'sections/Mint';
import Giveaway from 'sections/Giveaway';
import Gallery from 'sections/Gallery';
import Roadmap from 'sections/Roadmap';
import Rarity from 'sections/Rarity';
import Faq from 'sections/Faq';
import Team from 'sections/Team';
import { Container } from '@mui/material';

const Home: NextPage = () => {
  return (
      <Layout>
        <Container maxWidth={false}>
          <Banner />
          <Mint />
          <Giveaway />
          <Gallery />
          <Roadmap />
          <Rarity />
          <Faq />
          <Team />
        </Container>
      </Layout>
  )
}

export default Home
