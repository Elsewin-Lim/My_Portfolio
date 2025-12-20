import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef, useLayoutEffect } from 'react';
import getData from "./getData";
import getUserLang  from "./getUserLang";
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
  // We get the data from another location in the src/components/getData.js (I do this to make it tidy)
  const Data = getData(getUserLang());
  // const Data = [

  //   {
  //     PageNum: 1,
  //     name: "About1",
  //     types: ["Fire", "Flying"],
  //     description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
  //   },
  //   {
  //     PageNum: 2,
  //     name: "Projects",
  //     types: ["Electric"],
  //     description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
  //   },
  //   {
  //     PageNum: 3,
  //     name: "Skills",
  //     types: ["Electric"],
  //     description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
  //   },
    
  // ];
  

  return (
      <div className={`book-layout ${isOnCover ? "book-cover-mode" : "book-opened"}`}>
      
        <div className="intro-paragraph">
          <h2 id = "Heading">{Data.Intro[0]}</h2>
          <p>
            {Data.Intro[1]}
          </p>
        </div>

        <div className="book-container">
          <HTMLFlipBook
            ref={book}
            size="stretch"
            minWidth={262}
            maxWidth={440}
            minHeight={275}
            maxHeight={1200}
            width={394}
            height={562}
            showCover
            maxShadowOpacity={0.6}
            onFlip={handlePage}
          >
              <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content">
                  <img
                    id = "FrontCover" 
                    src= {Data?.Page_location?.[0]?.Covers?.[0]}
                    alt="Book Cover" 
                    className="BookCover"
                  />
                </div>
              </div>

              {Data.Page.map((Data) => (
                <div className="page" key={Data.PageNum}>
                  <div className="page-content">
                    
                      <img className = "BookContent"
                        src={`${process.env.PUBLIC_URL}/images/Pages/${Data.name}.png`} 
                        alt={Data.name} 
                      />
                      {/* <div className="Data-info">
                        <h2 className="Data-name">{Data.name}</h2>
                        <p className="Data-number">#{Data.PageNum}</p>
                        <div>
                          {Data.types.map((type) => (
                            <span key={type} className={`Data-type type-${type.toLowerCase()}`}>
                              {type}
                            </span>
                          ))}
                        </div>
                        <p className="Data-description">{Data.description}</p>
                      </div> */}
                  </div>
                </div>
              ))}

              <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content">
                  <img
                    id = "BackCover" 
                    src= {Data?.Page_location?.[0]?.Covers?.[1]}
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
                    {Data.ButtonTag.home}
                </button>
                <button 
                    className="book-control-button"
                    id = "about-button"
                    onClick={() => handleClick(1)}
                >
                    {Data.ButtonTag.about}
                </button>
                <button 
                    className="book-control-button"
                    id = "projects-button"
                    onClick={() => handleClick(3)}
                >
                    {Data.ButtonTag.projects}
                </button>
                <button 
                    className="book-control-button"
                    id = "contacts-button"
                    onClick={() => handleClick(5)}
                >
                    {Data.ButtonTag.contacts}
                </button>
            </div>
          </div> 
      </div>
  );
}

export default Book