const getData = (props) => {
    console.log("getData() is inialized")
    if( props === "us" || props === "en") {
        props = "en"
        const IntroText = [
            "Hi, I'm Elsewin👋",
            "Computer Science student | Aspiring AI & Game Developer I enjoy building things and learning how technology works."
        ];
        const Page_path = [
            {
                Covers: [`${process.env.PUBLIC_URL}/images/Covers/${props}/Book_cover.gif`, `${process.env.PUBLIC_URL}/images/Covers/${props}/Back_cover.gif`],
            }
        ]

        const buttonTag = {
            home: "Home",
            about: "About Me",
            projects: "Projects",
            contacts: "Contacts"
        }

        const PageData= [
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

        const Data = {
            Page: PageData,
            Page_location: Page_path,
            Intro: IntroText,
            ButtonTag: buttonTag
        }
        return Data;
    }
    else if ( props === "ja") {

                const IntroText = [
            "こんにちは！エルスウィンです👋",
            "Computer Science student | Aspiring AI & Game Developer I enjoy building things and learning how technology works."
        ];
        const Page_path = [
            {
                Covers: [`${process.env.PUBLIC_URL}/images/Covers/${props}/Book_cover.gif`, `${process.env.PUBLIC_URL}/images/Covers/${props}/Back_cover.gif`],
            }
        ]

        const buttonTag = {
            home: "ホーム",
            about: "プロフィール",
            projects: "プロジェクト",
            contacts: "コンタクト"
        }

        const PageData= [
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

        const Data = {
            Page: PageData,
            Page_location: Page_path,
            Intro: IntroText,
            ButtonTag: buttonTag
        }
        return Data;
    };
}

export default getData;