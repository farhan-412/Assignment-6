
// this section show the lesson button form api-1
function lessonBtn() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((info) => lessonInfo(info.data))
}

function lessonInfo(words) {
    // console.log(words)

    const lessonBtnContainer = document.getElementById("lesson-btn-container")

    for (let word of words) {
        // console.log(word)

        const lessonBtn = document.createElement('div')

        lessonBtn.innerHTML = `<button id="lessonBtnColor${word.level_no}" onclick = displayWord(${word.level_no}) class="lessonBtn btn text-blue-700 border-blue-700
            hover:bg-blue-700 hover:text-white "><img src="assets/fa-book-open.png" alt="">Lessons-${word.level_no}</button>`

        lessonBtnContainer.appendChild(lessonBtn)

    }


}

// this section show that the word when we click on the lesson button from api-2

function removeActiveBtn() {
    const removeActive = document.getElementsByClassName("active")
    for (let btn of removeActive) {
        btn.classList.remove("active")
    }
}

function displayWord(level) {
    fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        .then((res) => res.json())
        .then((info) => {

            removeActiveBtn()
            const activeBtn = document.getElementById(`lessonBtnColor${level}`)
            activeBtn.classList.add("active");

            displayWordContainer(info)
        })

}

function displayWordContainer(info) {


    const values = info.data
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = "";
    wordContainer.classList.add("grid", "grid-cols-3")

    if (values.length == 0) {
        wordContainer.innerHTML = `
                <div class="flex flex-col items-center">
                    <img class="w-30" src="assets/alert-error.png" alt="">
                    <h1 class="text-[#79716B] text-xs pb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h1>
                    <p class="text-3xl font-semibold">নেক্সট Lesson এ যান</p>
                </div>
        `
        wordContainer.classList.remove("grid", "grid-cols-3")

        return;
    }



    for (let data of values) {
        const wordDiv = document.createElement("div")

        wordDiv.innerHTML = `
                <div class="bg-white rounded-xl p-5 text-center shadow-sm hover:bg-blue-100">
                    <h1 class="font-bold text-xl">${data.word}</h1>
                    <p class="text-sm my-2">Meaning/ Pronunciation</p>
                    <h2 class="text-xl text-gray-700">${data.meaning}</h2>
                    <div class="flex justify-between">


                    <div>
                        <svg onclick=wordModal(${data.id}) class="w-8 border-2 border-gray-600 rounded-lg hover:bg-gray-300  p-1 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by 
                    @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 
                    2026 Fonticons, Inc.-->
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 
                    64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 
                    192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3
                    288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 
                    448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 
                    325.3 256 312C256 298.7 266.7 288 280 288z" />
                    </svg>
                    </div>


                    <svg class="w-8 border-2 border-gray-600 rounded-lg hover:bg-gray-300  p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - 
                    https://fontawesome.com/license/free Copyright
                        2026 Fonticons, Inc.--><path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493
                        125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5
                        529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5
                        149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8
                        208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3
                        439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3
                        206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 
                        282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8
                        391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1
                        412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 
                        320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 
                        224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/></svg>
                    </div>
                </div>
        `
        wordContainer.appendChild(wordDiv)


    }

}


const wordModal = (id) => {

    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(word => displayModal(word.data))

}

const displayModal = (item) => {

    const word_details = document.getElementById("wordInfoContainer")

    const word_modal = document.createElement("div")

    word_details.innerHTML=""
    word_modal.innerHTML = `
        <dialog id="word_details" class="modal">
            <div class="modal-box w-11/12 max-w-2xl">
            <div >
                <h1 class="flex font-bold text-2xl">${item.word}<span class="flex">(<img class="w-8 h-8" src="assets/microphone-48.png" alt=""> : ${item.pronunciation})</span></h1>
                <h1 class="font-bold pt-2">Meaning</h1>
                <p id = "meaning">${item.meaning}</p>
                <h1 class="font-bold pt-2">Example</h1>
                <p>${item.sentence}</p>
                <h1 class="font-bold pt-2">সমার্থক শব্দ গুলো</h1>
                <div class="flex gap-2 items-center pt-2">
            
                    <h1 class="bg-[#D7E4EF] px-3 py-1 rounded-md hover:bg-slate-100">${item.synonyms[0]}</h1>
                    <h1 class="bg-[#D7E4EF] px-3 py-1 rounded-md hover:bg-slate-100">${item.synonyms[1]}</h1>
                    <h1 class="bg-[#D7E4EF] px-3 py-1 rounded-md hover:bg-slate-100">${item.synonyms[2]}</h1>
                </div>
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn bg-blue-700 text-white">Close</button>
                </form>
            </div>
        </div>
        </dialog>
    `

    word_details.appendChild(word_modal)

    document.getElementById("word_details").showModal()

}

lessonBtn()