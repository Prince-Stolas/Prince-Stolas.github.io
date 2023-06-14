let countInterval = ""
let originalTxt = ""

let count = (id) => {
    let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1"]
    let elem = document.getElementById(id)
    let txt = elem.innerHTML.toLowerCase().replace("z\u2028", "1")
    let len = txt.length

    for (let i=len;i>1;i--) {
        if (txt.charAt(i-1)=="1") {
            txt = txt.substring(0, i-1) + "a" + txt.substring(i)
            if (txt.charAt(i-2)) txt = txt.substring(0, i-2) + chars[chars.indexOf(txt.charAt(i-2))+1] + txt.substring(i-1)
        }
    }
    txt = txt.substring(0, len-1) + chars[chars.indexOf(txt.charAt(len-1))+1] + txt.substring(len)
    txt = txt.replace("1", "z\u2028")
    elem.innerHTML = txt.charAt(0).toUpperCase() + txt.substring(1) 
}

let startCount = (id) => {
    originalTxt = document.getElementById(id).innerHTML
    countInterval = setInterval(()=>{count(id)}, 1)
}

let stopCount = (id) => {
    clearInterval(countInterval)
    document.getElementById(id).innerHTML = originalTxt
}

