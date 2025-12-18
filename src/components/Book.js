import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef, useLayoutEffect } from 'react';
import Book_cover from '../images/Book_cover.gif';
import Back_cover from '../images/Back_cover.gif';

function Book() {
  const [isOnCover, setIsOnCover] = useState(true);
  const book = useRef(null);
  // const [currentPage, setCurrentPage] = useState(0);
  // const userLocales = navigator.languages || [navigator.language];
  useLayoutEffect(() => {
    if (!book.current) return;

    requestAnimationFrame(() => {
      book.current.pageFlip().update();
    });
  }, [isOnCover]);

  const handlePage = (e) => {
    setIsOnCover(e.data === 0);
    // setCurrentPage(e.data);
  };

  const handleClick = (page) => {
    book.current?.pageFlip()?.flip(page);
  };

  
  const PageData = [

    {
      PageNum: 1,
      name: "About1",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      PageNum: 2,
      name: "Projects",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      PageNum: 3,
      name: "Skills",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    
  ];

  return (
    <div className="container">
      <div className={`book-layout ${isOnCover ? "book-cover-mode" : "book-opened"}`}>

        <div className="intro-paragraph">
          <h2>Hi, I’m Elsewin 👋</h2>
          <p>
            Computer Science student | Aspiring AI & Game Developer
            I enjoy building things and learning how technology works.
          </p>
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
                    id = "FrontCover" 
                    src= {Book_cover}
                    alt="Book Cover" 
                    className="BookCover"
                  />
                </div>
              </div>

              {PageData.map((PageData) => (
                <div className="page" key={PageData.PageNum}>
                  <div className="page-content">
                    
                      <img className = "BookContent"
                        src={`${process.env.PUBLIC_URL}/Pages/${PageData.name}.png`} 
                        alt={PageData.name} 
                      />
                      {/* <div className="PageData-info">
                        <h2 className="PageData-name">{PageData.name}</h2>
                        <p className="PageData-number">#{PageData.PageNum}</p>
                        <div>
                          {PageData.types.map((type) => (
                            <span key={type} className={`PageData-type type-${type.toLowerCase()}`}>
                              {type}
                            </span>
                          ))}
                        </div>
                        <p className="PageData-description">{PageData.description}</p>
                      </div> */}
                  </div>
                </div>
              ))}

              <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content">
                  <img
                    id = "BackCover" 
                    src= {Back_cover}
                    alt="Back Cover" 
                    className="BackCover"
                  />
                </div>
              </div>

            </HTMLFlipBook>
          
            <div className="nav-buttons">
                <button 
                    className="book-control-button"
                    id = "home-button"
                    onClick={() => handleClick(0)}
                >
                    Home
                </button>
                <button 
                    className="book-control-button"
                    id = "about-button"
                    onClick={() => handleClick(1)}
                >
                    About
                </button>
                <button 
                    className="book-control-button"
                    id = "projects-button"
                    onClick={() => handleClick(3)}
                >
                    Projects
                </button>
                <button 
                    className="book-control-button"
                    id = "contacts-button"
                    onClick={() => handleClick(5)}
                >
                    Contact
                </button>
            </div>
          </div> 
      </div>
    </div>
  );
}

export default Book