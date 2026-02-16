
document.getElementById('handleBtn').addEventListener("click", function () {

    const handleText = document.getElementById('handleText').value;

    const password = document.getElementById('handlePassword').value;
    const navBar = document.getElementById('navBar');
    const learVocabulary = document.getElementById('learnVocabulary');
    const askQuestion = document.getElementById('askQuestion');
    const heroSection = document.getElementById('heroSection')

    if (typeof handleText === "string" && password === "123456") {
        navBar.classList.remove('hidden')
        learVocabulary.classList.remove('hidden')
        askQuestion.classList.remove('hidden')
        heroSection.classList.add('hidden')
    }
    else{
        alert("Wrong password. Contact admin to get your login Code")
    }
})

document.getElementById('faqBtn').addEventListener('click', function () {

    document.getElementById('askQuestion').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })

})
document.getElementById('learnBtn').addEventListener('click', function () {

    document.getElementById('learnVocabulary').scrollIntoView({
        behavior: "smooth",
        block:"start"
    })

})

