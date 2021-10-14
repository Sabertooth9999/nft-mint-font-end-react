import React from 'react';
import { Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {}
const Layout: React.FC<Props> = ({ children, ...rest }) => { 
 
  return (
    <Fragment>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
export default Layout;