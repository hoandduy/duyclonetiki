import React from 'react';
import GBBanner from './GBBanner';
import GBHeader from './GBHeader';
import GBLists from './GBLists';

function GenuienBrand() {
  return <div style={{background: '#fff'}}>
    <GBHeader />
    <GBBanner />
    <GBLists />
  </div>;
}

export default GenuienBrand;
