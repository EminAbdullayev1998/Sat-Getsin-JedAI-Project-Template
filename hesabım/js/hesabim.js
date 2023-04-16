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


// catalog category aktivlik reng kodlari
$('#elanlarim').click(function () {
    $(this).addClass('activee');
    $('#secilenler, #ayarlar, #help, #exit').removeClass('activee');
    $('#heroBox2').hide();
    $('#heroBox').show();
    $('#heroBox3').hide();
});

$('#secilenler').click(function () {
    $(this).addClass('activee');
    $('#elanlarim, #ayarlar, #help, #exit').removeClass('activee');
    $('#heroBox2').show();
    $('#heroBox').hide();
    $('#heroBox3').hide();
});

$('#ayarlar').click(function () {
    $(this).addClass('activee');
    $('#secilenler, #elanlarim, #help, #exit').removeClass('activee');
    $('#heroBox3').show();
    $('#heroBox2').hide();
    $('#heroBox').hide();
});

$('#help').click(function () {
    $(this).addClass('activee');
    $('#secilenler, #ayarlar, #elanlarim, #exit').removeClass('activee');
});

$('#exit').click(function () {
    $(this).addClass('activee');
    $('#secilenler, #ayarlar, #help, #elanlarim').removeClass('activee');
});


// elanlarim kategorilerinin aktivlik reng kodlari
$('#butun').click(function () {
    $(this).addClass('activee2');
    $('#aktiv, #bitib, #yoxlanisda, #legv, #ellipsis').removeClass('activee2');
    $('#butunModal').toggle();
    $('.fa-chevron-down').toggleClass('fa-rotate-180');
});

$('#aktiv').click(function () {
    $(this).addClass('activee2');
    $('#butun, #bitib, #yoxlanisda, #legv, #ellipsis').removeClass('activee2');
});

$('#bitib').click(function () {
    $(this).addClass('activee2');
    $('#aktiv, #butun, #yoxlanisda, #legv, #ellipsis').removeClass('activee2');
});

$('#yoxlanisda').click(function () {
    $(this).addClass('activee2');
    $('#aktiv, #bitib, #butun, #legv, #ellipsis').removeClass('activee2');
});

$('#legv').click(function () {
    $(this).addClass('activee2');
    $('#aktiv, #bitib, #yoxlanisda, #butun, #ellipsis').removeClass('activee2');
});

$('#ellipsis').click(function () {
    $(this).addClass('activee2');
    $('#aktiv, #bitib, #yoxlanisda, #legv, #butun').removeClass('activee2');
    $('#ellipsisModal').toggle();
});



//elanlarim categorisinin deyisme kodlari 
$('#butunModal').on('click', '.butun-elan, .vip-elan, .ireli-elan, .premium-elan', function() {
    $('#optMain').html($(this).text() + ' <i class="fa-solid fa-chevron-down"></i>');
    $('.fa-chevron-down').addClass('fa-rotate-180');
});


// password type deyisilmesi kodlari
faSolid4.onclick = ()=>{
    if (hesabimPass.type === 'password') {
        hesabimPass.type = 'text';
        faSolid4.classList = 'fa-solid fa-eye';
    }else{
        hesabimPass.type = 'password';
        faSolid4.classList = 'fa-solid fa-eye-slash';
    }
}



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