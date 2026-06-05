
const getUserLang = (input) => {
    console.log("getUserLang is inialized")
    // set default language in case everything fail
         let lang = "en";
         let supportedLang = ["en", "ja"]
        // try different methods to find the prefer language or language that the user speak
        try {
        lang =
            navigator.languages?.[0]?.slice(0, 2)?.toLowerCase() ||
            navigator.language?.slice(0, 2)?.toLowerCase() ||
            "en";
            console.log("navigator.language Value| ", navigator.language)
            console.log("getUserLang: Raw detected lang code:", lang);
            // Even if the navigator sucessfully get a language, there's not gurantee that it's a supported language
            if (supportedLang.includes(lang)) {
                console.log("getUserLang() executed! | Value: ", lang)
            }
            else {
                console.log("getUserLang: Not supported. Defaulting to 'en'");
                return "en"
            }
        } catch (e) {
            // Log the thing if it fail, so i can know that it failed
            console.log("getUserLang() fail => set language to default[en-English], Error: ", e)
            return "en"
        }
        return lang;  
}

export default getUserLang