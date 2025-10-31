import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "../components/Hero";
import StoryOverview from "../components/StoryOverview";
import Title from "../components/Title";
import TrailerVideo from "../components/TrailerVideo";
import CinematicFooter from "../components/CinematicFooter";
import {quotes} from '../../constants/index'
import Quotes from "../components/Quotes";
import Battles from "../components/Battles";
import AboutSection from "../components/AboutSection";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <>
      <Hero />
      <StoryOverview />
      <AboutSection />
      <Battles />
      <Title Title="The Heart Behind the Blade"  Style="animated-title bg-gradient-to-r from-pink-300 via-sky-400 via-yellow-300 via-purple-400 to-indigo-900 text-transparent bg-clip-text drop-shadow-md"/>
      <Quotes quotes={quotes}/>
      <Title Title="Infinity Castle Trailer" Style="animated-title bg-gradient-to-r from-pink-300 via-sky-400 via-yellow-300 via-purple-400 to-indigo-900 text-transparent bg-clip-text drop-shadow-md text-center text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-tight mt-20"/>
      <TrailerVideo />
      <CinematicFooter />
    </>
  );
};

export default Home;
