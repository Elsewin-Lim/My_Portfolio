const getData = (props) => {
    console.log("getData() is inialized")
    if( props === "us" || props === "en") {
        props = "en"

        const IntroText = [
            "Hi, I'm Elsewin",
            "Computer Science student | Aspiring Softwarer Developer"
        ];
        const img_path = [
            {
                Covers: [`${process.env.PUBLIC_URL}/images/Covers/${props}/Book_cover.gif`, `${process.env.PUBLIC_URL}/images/Covers/${props}/Back_cover.gif`],
                Rotate_phone_gif: `${process.env.PUBLIC_URL}/Rotate_phone_en.gif`
            }
        ]

        const buttonTag = {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contacts: "Contacts"
        }

        const PageData= [
            {
            PageNum: 1,
            name: "About1",
            info: ""

            },

            {
            PageNum: 2,
            name: "About(2)",
            info: ""

            },

            {
            PageNum: 3,
            name: "Skills",
            info: ""

            },
            {
            PageNum: 4,
            name: "Projects",
            info: ""

            },

            {
            PageNum: 5,
            name: "Blank",
            info: ""

            },
        
        ];

        const Data = {
            Page: PageData,
            Page_location: img_path,
            Intro: IntroText,
            ButtonTag: buttonTag
        }
        return Data;
    }
    else if ( props === "ja") {

        const IntroText = [

            "こんにちは！エルスウィンです",
            "コンピュータサイエンス専攻の学生｜将来はソフトウェア開発者を目指しています。"
        ];

        const img_path = [
            {
                Covers: [`${process.env.PUBLIC_URL}/images/Covers/${props}/Book_cover.gif`, `${process.env.PUBLIC_URL}/images/Covers/${props}/Back_cover.gif`],
                Rotate_phone_gif: `${process.env.PUBLIC_URL}/Rotate_phone_jp.gif`
            }
        ]

        const buttonTag = {
            home: "ホーム",
            about: "プロフィール",
            skills: "スキル",
            projects: "プロジェクト",
            contacts: "コンタクト"
        }

        const PageData= [
            {
            PageNum: 1,
            name: "About1",
            info: ""

            },

            {
            PageNum: 2,
            name: "About(2)",
            info: ""

            },

            {
            PageNum: 3,
            name: "Skills",
            info: ""

            },
            {
            PageNum: 4,
            name: "Projects",
            info: ""

            },

            {
            PageNum: 5,
            name: "Blank",
            info: ""

            },
        
        ];

        const Data = {
            Page: PageData,
            Page_location: img_path,
            Intro: IntroText,
            ButtonTag: buttonTag
        }
        return Data;
    };
}

export default getData;