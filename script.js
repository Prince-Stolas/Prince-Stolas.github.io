let alphabet = "abcdefghijklmnopqrstuvwxyz\u2028".split("");
//let alphabetCaps = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let countInterval = ""
let originalTxt = ""

let count = (id) => {
    let elem = document.getElementById(id)
    let txt = elem.innerHTML.toLowerCase().replace("z\u2028", "1")
    let len = txt.length

    for (let i=len;i>1;i--) {
        if (txt[i-1]=="1") {
            txt = txt.substring(0, i-1) + "a" + txt.substring(i)
            if (txt[i-2]) txt = txt.substring(0, i-2) + alphabet[alphabet.indexOf(txt[i-2])+1] + txt.substring(i-1)
        }
    }
    txt = txt.substring(0, len-1) + alphabet[alphabet.indexOf(txt[len-1])+1] + txt.substring(len)
    txt = txt.replace("1", "z\u2028")
    elem.innerHTML = txt[0].toUpperCase() + txt.substring(1)
}

let startCount = (id) => {
    originalTxt = document.getElementById(id).innerHTML
    countInterval = setInterval(()=>{count(id)}, 1)
}

let stopCount = (id) => {
    clearInterval(countInterval)
    document.getElementById(id).innerHTML = originalTxt
}

