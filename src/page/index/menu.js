function menu() {

    let aul = document.getElementById('aul');
    let alis = aul.querySelectorAll('li');
    // console.log(alis.length);
    aul.onclick = function () {
        console.log(666)
    }
}

export {
    menu
}