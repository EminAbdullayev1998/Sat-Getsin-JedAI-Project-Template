// Premium elanlar category dropdown kodlari Start============================================================================

let select = document.querySelector('#select');
let options = document.querySelector('#options');
let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');

select.onclick = ()=>{
    if (options.style.display === 'none') {
        options.style.display = 'block'
    }else{
        options.style.display = 'none'
    }
}


document.body.onclick = e =>{
    if (e.target !== select) {
        options.style.display = 'none';
    }
}

opt1.onclick = ()=>{
    select.innerHTML = opt1.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}

opt2.onclick = ()=>{
    select.innerHTML = opt2.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}

opt3.onclick = ()=>{
    select.innerHTML = opt3.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}

// Premium elanlar category dropdown kodlari End============================================================================


let select1 = document.querySelector('#select1');
let options2 = document.querySelector('#options2');
let opt4 = document.querySelector('#opt4');
let opt5 = document.querySelector('#opt5');
let opt6 = document.querySelector('#opt6');