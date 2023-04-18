// bildiris modalinin acilmasi kodlari
fabell.onclick = ()=>{
    if (notification.style.display === 'none') {
        notification.style.display = 'block';
    }else{
        notification.style.display = 'none';
    }
}

// hesabim ozelliklerinin modalinin acilmasi kodlari
circle.onclick = ()=>{
    if (account.style.display === 'none') {
        account.style.display = 'block';
    }else{
        account.style.display = 'none';
    }
}

// sual kateqoriya aktivlik renk kodlari
$('#sual1').click(function () {
    $('#sual1').addClass('sual-active');
    $('#sual2').removeClass('sual-active');
    $('#sual3').removeClass('sual-active');
    $('#sual4').removeClass('sual-active');
});

$('#sual2').click(function () {
    $('#sual2').addClass('sual-active');
    $('#sual1').removeClass('sual-active');
    $('#sual3').removeClass('sual-active');
    $('#sual4').removeClass('sual-active');
});

$('#sual3').click(function () {
    $('#sual3').addClass('sual-active');
    $('#sual2').removeClass('sual-active');
    $('#sual1').removeClass('sual-active');
    $('#sual4').removeClass('sual-active');
});

$('#sual4').click(function () {
    $('#sual4').addClass('sual-active');
    $('#sual2').removeClass('sual-active');
    $('#sual3').removeClass('sual-active');
    $('#sual1').removeClass('sual-active');
})



// ===========================================================================================================
// Categories modal js kodlari START =========================================================================
// ===========================================================================================================

    // kateqoriyalar kodu umumilikde
    $(".categories div").hover(function(){
        $(".categories div").removeClass("active")
        $(this).addClass("active")
        let child = $(this).data("id")  
        $(".category-list .listbox").css("display","none")
        $(`.category-list .listbox:nth-child(${child})`).css("display","block")
    })
        if (window.innerWidth <= 768){
            $(".categories div").click(function(){
                $(".categories div").removeClass("active")
                $(this).addClass("active")
                let child = $(this).data("id")  
                $(".categories").css("display","none")
                $(".category-list-resp").css("display","block")
                $(".category-list-resp .listbox").css("display","none")
                $(`.category-list-resp .listbox:nth-child(${child})`).css("display","block")
        })
    }


// category secin butonu ikon deyismesi ve category modalin acilmasi kodlari
categoryBtn.onclick = () => {
    try {
      if (imgBtn.src.endsWith('category.png')) {
        imgBtn.src = 'img/x-categories.png';
      } else {
        imgBtn.src = 'img/category.png';
      }
    } catch (error) {
      console.error('Error changing image:', error);
    };

    if (categoriesModal.style.display === 'none') {
        categoriesModal.style.display = 'flex';
        categoryBtn.classList.add('active-category');
        // balaca ekranda ayri modalin acilib baglanmasi
        categoryListResp.style.display = 'none';
        categories.style.display = 'block';
    }else{
        categoriesModal.style.display = 'none';
        categoryBtn.classList.remove('active-category');
    };

};



// search inputa focus oldugunda search-modal acilmasi kodlari
searchInput.addEventListener('focus', function () {
    searchModal.style.display = 'block';
});

// ===========================================================================================================
// Categories modal js kodlari END ===========================================================================
// ===========================================================================================================


document.body.onclick = e =>{
    if (e.target !== searchModal && e.target !== searchInput && !searchModal.contains(e.target)) {
        searchModal.style.display = 'none';
    }
}