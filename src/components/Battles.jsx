import React from 'react';
import { battles, sections } from "../../constants";
import Title from './Title';
import StickySplitScroll from './StickySplitScroll';
import AkazaEnd from './AkazaEnd';
import HorizontalBattlesSection from './HorizontalBattlesSection';
import TextAndImages from './TextAndImages';


function Battles() {
  return (
    <section id='fights bg-black'>
      <Title
        Style="animated-title bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-600 text-transparent bg-clip-text drop-shadow-md"
        Title={
          <>
            Kaigaku vs.
            <br />
            Zenitsu
          </>
        }
      />
      <StickySplitScroll sections={sections} />
      <Title
        Style="animated-title bg-gradient-to-r from-purple-300 via-emerald-300 to-purple-900 text-transparent bg-clip-text drop-shadow-md"
        Title={
          <>
            Doma vs.
            <br />
            Shinobu Kocho
          </>
        }
      />
      <HorizontalBattlesSection battles={battles} />
      <TextAndImages />
      <Title Title="Akaza Chose to end the violence" Style="animated-title bg-gradient-to-r from-pink-300 via-sky-400 to-indigo-900 text-transparent bg-clip-text drop-shadow-md" />
      <AkazaEnd />
    </section>
  )
}

export default Battles;
