import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef, useLayoutEffect } from 'react';
import Book_cover from '../images/Book_cover.gif';
import Back_cover from '../images/Back_cover.gif';

function Book() {
  const [isOnCover, setIsOnCover] = useState(true);
  const book = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  // const userLocales = navigator.languages || [navigator.language];
  useLayoutEffect(() => {
    if (!book.current) return;

    requestAnimationFrame(() => {
      book.current.pageFlip().update();
    });
  }, [isOnCover]);

  const handlePage = (e) => {
    setIsOnCover(e.data === 0);
    setCurrentPage(e.data);
  };

  const handleClick = (page) => {
    book.current?.pageFlip()?.flip(page);
  };

  
  const PageData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    }
  ];

  return (
    <div className="container">
      <div className={`book-layout ${isOnCover ? "book-cover-mode" : "book-opened"}`}>

        <div className="intro-paragraph">
          <h2>Welcome to Our Story</h2>
          <p>This paragraph appears next to the cover.</p>
        </div>

        <div className="book-container">
          <HTMLFlipBook
            ref={book}
            size="stretch"
            minWidth={262}
            maxWidth={790}
            width={394}
            height={559}
            showCover
            maxShadowOpacity={0.6}
            onFlip={handlePage}
          >
              <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content">
                  <img
                    id = "BookCover" 
                    src= {Book_cover}
                    alt="Book Cover" 
                    className="pokemon-logo"
                  />
                </div>
              </div>

              {PageData.map((pokemon) => (
                <div className="page" key={pokemon.id}>
                  <div className="page-content">
                    <div className="pokemon-container">
                      <img 
                        src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`} 
                        alt={pokemon.name} 
                      />
                      <div className="pokemon-info">
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                        <p className="pokemon-number">#{pokemon.id}</p>
                        <div>
                          {pokemon.types.map((type) => (
                            <span key={type} className={`pokemon-type type-${type.toLowerCase()}`}>
                              {type}
                            </span>
                          ))}
                        </div>
                        <p className="pokemon-description">{pokemon.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content">
                  <img
                    id = "BackCover" 
                    src= {Back_cover}
                    alt="Back Cover" 
                    className="pokemon-logo"
                  />
                </div>
              </div>

            </HTMLFlipBook>
          
            <div className="nav-buttons">
                <button 
                    className="book-control-button" 
                    onClick={() => handleClick(1)}
                >
                    About
                </button>
                <button 
                    className="book-control-button" 
                    onClick={() => handleClick(0)}
                >
                    Home
                </button>
            </div>
          </div> 
      </div>
    </div>
  );
}

export default Book