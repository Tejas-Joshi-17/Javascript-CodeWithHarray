// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const languages = ["java", "js", "cpp", "py"];

languages.forEach((element) => {
    console.log(`${element}`)
});
// java
// js
// cpp
// py

let printLanguaues = (language) => {
    console.log(`${language}`);   
};

languages.forEach(printLanguaues);
// java
// js
// cpp
// py


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const languagess = ["java", "js", "cpp", "py"];

languagess.forEach((value, index, array) => {
    console.log(`${value} - ${index} - ${array}`);
});
// java - 0 - java,js,cpp,py
// js - 1 - java,js,cpp,py
// cpp - 2 - java,js,cpp,py
// py - 3 - java,js,cpp,py


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


const languageObject = [
    {
        languageName : "java",
        fileFormat : "java"
    },
    {
        languageName : "C++",
        fileFormat : "cpp"
    },
    {
        languageName : "javascript",
        fileFormat : "js"
    },
    {
        languageName : "typescript",
        fileFormat : "ts"
    }
]

languageObject.forEach((languaeInformation) => {
    console.log(`${languaeInformation.languageName} -> ${languaeInformation.fileFormat}`);
})
// java -> java
// C++ -> cpp
// javascript -> js
// typescript -> ts


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------