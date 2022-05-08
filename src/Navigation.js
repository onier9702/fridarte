
import React from 'react';
import { NormalNavigation } from './NormalNavigation';
import { MobileNavigation } from './MobileNavigation';
export const Navigation = () => {


  return (
    <nav >
        <MobileNavigation  />
        <NormalNavigation />
    </nav>
  )
}
