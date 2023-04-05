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


// En son elanlar category dropdown kodlari Start============================================================================

let select1 = document.querySelector('#select1');
let options2 = document.querySelector('#options2');
let opt4 = document.querySelector('#opt4');
let opt5 = document.querySelector('#opt5');
let opt6 = document.querySelector('#opt6');


select1.onclick = ()=>{
    if (options2.style.display === 'none') {
        options2.style.display = 'block';
    }else{
        options2.style.display = 'none';
    }
}


opt4.onclick = ()=>{
    select1.innerHTML = opt4.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}

opt5.onclick = ()=>{
    select1.innerHTML = opt5.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}

opt6.onclick = ()=>{
    select1.innerHTML = opt6.innerHTML + '<i class="fa-solid fa-chevron-down"></i>'
}


document.body.onclick = e =>{
    if (e.target !== select && e.target !== select1  && e.target !== options && e.target !== options2) {
        options.style.display = 'none';
        options2.style.display = 'none';
    }
}

// En son elanlar category dropdown kodlari End============================================================================


// Jquery nice select plugin Start ============================================================================

$(document).ready(function() {
    $('#my-select').niceSelect();
});

// Jquery nice select plugin End ===============================================================================