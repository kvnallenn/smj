import React from 'react'
import { NavbarTop } from './Navbar/NavbarTop';
import { NavbarBot } from './Navbar/NavbarBot';
import { Heroes } from './Content/Heroes';
import { Footer } from './Footer/Footer';

export const Home = () => {
  return (
    <>
    <NavbarTop/>
    <NavbarBot/>
    <Heroes/>
    <Footer/>
    </>
  )
}
