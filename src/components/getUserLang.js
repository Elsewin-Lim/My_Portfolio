const getUserLang = () => {
    // set default language in case everything fail
    let lang = "en";
    // try different methods to find the prefer language or language that the user speak
    try {
    lang =
        navigator.languages?.[0]?.slice(0, 2)?.toLowerCase() ||
        navigator.language?.slice(0, 2)?.toLowerCase() ||
        "en";
        console.log("getUserLang() executed! | Value: ", lang)
    } catch (e) {
        // Log the thing if it fail, so i can know that it failed
        console.log("getUserLang() fail => set language to default[en-English], Error: ", e)
    }
    return lang;
}

export default getUserLang