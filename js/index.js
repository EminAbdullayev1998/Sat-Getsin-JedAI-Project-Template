// =============================================================================================================
// Premium elanlar category dropdown kodlari Start==============================================================
// =============================================================================================================

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

// =============================================================================================================
// Premium elanlar category dropdown kodlari End================================================================
// =============================================================================================================




// =============================================================================================================
// En son elanlar category dropdown kodlari Start===============================================================
// =============================================================================================================

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


// =============================================================================================================
// En son elanlar category dropdown kodlari End=================================================================
// =============================================================================================================



// ============================================================================================================
// Jquery nice select plugin Start ============================================================================
// ============================================================================================================

$(document).ready(function() {
    $('#my-select').niceSelect();
});

// =============================================================================================================
// Jquery nice select plugin End ===============================================================================
// =============================================================================================================





// =============================================================================================================
// Register modal kodlari Start ================================================================================
// =============================================================================================================

let registerbtn = document.querySelector('#register-btn');
let registerbox = document.querySelector('#register-boxx');
let closebtn = document.querySelector('#fa-x');

  //modalin acilmasi kodlari  
registerbtn.onclick = ()=>{
    if (registerbox.style.display === 'none') {
        registerbox.style.display = 'flex';
    }
};

  //modalin baglanmasi kodlari 
closebtn.onclick = ()=>{
    registerbox.style.display ='none';
};


  // email ve mobile kategorilerinin aktiv klass reng deyismeleri
let email = document.querySelector('#email-box');
let mobile = document.querySelector('#tel-box');

mobile.onclick = ()=>{
    email.classList.remove('animation1');
    mobile.classList.add('animation2');
}

email.onclick = ()=>{
    mobile.classList.remove('animation2');
    email.classList.add('animation1');
}


  // Inputlar yazildiginda button aktiv reng olsun kodlari 

  const emailInput = document.querySelector('#emailInput');
  const passwordInput = document.querySelector('#passwordInput');
  const mobileInput = document.querySelector('#mobileInput');
  const daxilOlBtn = document.querySelector('#daxilOl');

  function checkInputs () {
     const emailValue = emailInput.value.trim();
     const passwordValue = passwordInput.value.trim();
     const mobileValue = mobileInput.value.trim();

     if ((emailValue !== '' || mobileValue !== '') && passwordValue !== '') {
         daxilOlBtn.style.backgroundColor = '#6A5BCD';
     }else{
        daxilOlBtn.style.backgroundColor = 'rgb(233, 232, 238)';
     }

  };

  emailInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);
  mobileInput.addEventListener('input', checkInputs);


    // Password inputunu typeni text-e deyismek kodlari
    const faSolid = document.querySelector('#fa-solid');

    faSolid.onclick = ()=> {
            if (faSolid.classList.contains('fa-eye-slash')) {
                faSolid.classList.remove('fa-eye-slash');
                faSolid.classList.add('fa-eye');
                passwordInput.type = 'text';
            }else{
               faSolid.classList.remove('fa-eye');
               faSolid.classList.add('fa-eye-slash');
               passwordInput.type = 'password';
            }
    };


    // email inputunu tel inputa deyismek ve eksine kodlari 
    mobile.addEventListener('click', e => {
        emailInput.style.display = 'none';
        mobileInput.style.display = 'block';
        span.style.display = 'block';
        numcode.style.display = 'block';
    });
    email.addEventListener('click', e => {
        emailInput.style.display = 'block';
        mobileInput.style.display = 'none';
        span.style.display = 'none';
        numcode.style.display = 'none';
    });

// ===========================================================================================================
// Register modal kodlari End ================================================================================
// ===========================================================================================================



// ===========================================================================================================
// Forgot Password modal kodlari START =======================================================================
// ===========================================================================================================

//  email bolmesi
optionEmail.onclick = ()=>{
    optionEmail.classList.add('animation3');
    optionPhone.classList.remove('animation3');
    mailPassInput.style.display = 'block';
    telPassInput.style.display = 'none';
    pMail.style.display = 'block';
    pTel.style.display = 'none';
    buttonMail.style.display = 'block';
    buttonTel.style.display = 'none';
}

// telefon bolmesi
optionPhone.onclick = ()=>{
    optionEmail.classList.remove('animation3');
    optionPhone.classList.add('animation3');
    mailPassInput.style.display = 'none';
    telPassInput.style.display = 'block';
    pMail.style.display = 'none';
    pTel.style.display = 'block';
    buttonMail.style.display = 'none';
    buttonTel.style.display = 'block';
}

// modali baglamaq
xForgotPass.onclick = ()=>{
    forgotpassword.style.display = 'none';
}

// modalin acilmasi
forgotPassModal.onclick = ()=>{
    forgotpassword.style.display = 'flex';
    registerbox.style.display = 'none';
}


// inputlar yazili oldugunda butonlarin rengi aktiv olsun kodlari
function checkEmailInput() {
    if (mailPassInput.value.trim() !== '' ) {
        buttonMail.style.backgroundColor = '#6A5BCD';
    }else{
        buttonMail.style.backgroundColor = 'rgb(233, 232, 238)';
    }
}

function checkTelInput() {
    if (telPassInput.value.trim() !== '') {
        buttonTel.style.backgroundColor = '#6A5BCD';
    }else{
        buttonTel.style.backgroundColor = 'rgb(233, 232, 238)';
    }
}

mailPassInput.addEventListener('input', checkEmailInput);
telPassInput.addEventListener('input', checkTelInput);

// ===========================================================================================================
// Forgot Password modal kodlari END =========================================================================
// ===========================================================================================================




// ===========================================================================================================
// CHECK EMAIL modal kodlari START ===========================================================================
// ===========================================================================================================

// inputlarin icerisine ancaq 1 reqem yazilabilsin ve avtomatik bir sonraki inputun icine focus olsun ve silinendede eynisi olsun,
// valuesi olanda border rengi deyissin
let numberInputs = document.querySelectorAll(".number-input");

for (let i = 0; i < numberInputs.length; i++) {
  const input = numberInputs[i];
  
  input.addEventListener("input", function(){
    if (this.value.length > 0){
      this.value = this.value.slice(0,1);
      this.style.borderBottomColor = "rgba(106, 91, 205, 1)";
        // Input alanına bir değer girildiğinde
        const nextInput = this.nextElementSibling;
        if (nextInput){
            nextInput.focus();
        }
    }else{
        this.style.borderBottomColor = "rgb(188, 187, 194)";
    };
  });


  input.addEventListener("keydown", function(e) {
    if (e.key === "Backspace" && this.value.length === 0) {
      const prevInput = this.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  });

  input.setAttribute("maxlength", 1);
};



// 1:55 saniye geri sayim timer kodlari ve her defe modal acildiginda baslayir tekrar geri sayim
let zaman = 115;
let geriSayim;

function startTimer() {
    geriSayim = setInterval(function () {
        let deqiqe = Math.floor(zaman/60);
        let saniye = zaman % 60 ;

        // saniyeleri iki reqemli etmek
        if (saniye < 10) {
            saniye = "0" + saniye;
        }

        // geri sayimi gostermek
        document.getElementById('geriSayim').innerHTML = deqiqe + ":" + saniye;

        // zaman azalsin
        zaman--; 

        // zaman qurtaranda dayansin ve yazi cixsin
        if (zaman < 0) {
            clearInterval(geriSayim);
            document.getElementById('geriSayim').innerHTML = "Zaman bitdi!"
        }

    },1000);  // her 1 saniyede bir isledir
}

function stopTimer() {
    clearInterval(geriSayim);
    zaman = 115;
}

function showmodal() {
    checkEmailModal.style.display = 'flex';
    forgotpassword.style.display = 'none';
    startTimer();
}

function hidemodal() {
    checkEmailModal.style.display = 'none';
    stopTimer();
}

buttonMail.addEventListener('click', showmodal);
xCheckEmail.addEventListener('click', hidemodal);


// check email modal baglanmasi
xCheckEmail.onclick = ()=>{
    checkEmailModal.style.display = 'none';
}



// butun input yazili oldugunda butonun rengi aktiv olsun kodlari
let inputs1 = document.querySelectorAll('.number-input');
let continueButton1 = document.querySelector('#continueButton1');

inputs1.forEach(input1 =>{
    input1.addEventListener('input', checkNumberInputs1);
});

function checkNumberInputs1() {
    const allInputsHaveValue1 = Array.from(inputs1).every(input => input.value !== '');
    if (allInputsHaveValue1) {
        continueButton1.style.backgroundColor = '#6A5BCD';
    }else{
        continueButton1.style.backgroundColor = 'rgb(233, 232, 238)';
    }
}


// ===========================================================================================================
// CHECK EMAIL modal kodlari END ============================================================================
// ===========================================================================================================



// ===========================================================================================================
// CHECK PHONE modal kodlari START ===========================================================================
// ===========================================================================================================

// 1:55 saniye geri sayim timer kodlari ve her defe modal acildiginda baslayir tekrar geri sayim
let zaman1 = 115;
let geriSayim1;

function startTimer1() {
    geriSayim1 = setInterval(function () {
        let deqiqe = Math.floor(zaman1/60);
        let saniye = zaman1 % 60 ;

        // saniyeleri iki reqemli etmek
        if (saniye < 10) {
            saniye = "0" + saniye;
        }

        // geri sayimi gostermek
        document.getElementById('geriSayimPhone').innerHTML = deqiqe + ":" + saniye;

        // zaman azalsin
        zaman1--; 

        // zaman qurtaranda dayansin ve yazi cixsin
        if (zaman1 < 0) {
            clearInterval(geriSayim);
            document.getElementById('geriSayimPhone').innerHTML = "Zaman bitdi!"
        }

    },1000);  // her 1 saniyede bir isledir
}

function stopTimer1() {
    clearInterval(geriSayim1);
    zaman1 = 115;
}

function showmodal1() {
    checkPhoneModal.style.display = 'flex';
    forgotpassword.style.display = 'none';
    startTimer1();
}

function hidemodal1() {
    checkPhoneModal.style.display = 'none';
    stopTimer1();
}

buttonTel.addEventListener('click', showmodal1);
xCheckPhone.addEventListener('click', hidemodal1);





// butun input yazili oldugunda butonun rengi aktiv olsun kodlari
let inputs = document.querySelectorAll('.number-input1');
let continueButton = document.querySelector('#continueButton');

inputs.forEach(input =>{
    input.addEventListener('input', checkNumberInputs);
});

function checkNumberInputs() {
    const allInputsHaveValue = Array.from(inputs).every(input => input.value !== '');
    if (allInputsHaveValue) {
        continueButton.style.backgroundColor = '#6A5BCD';
    }else{
        continueButton.style.backgroundColor = 'rgb(233, 232, 238)';
    }
}



// inputlarin icerisine ancaq 1 reqem yazilabilsin ve avtomatik bir sonraki inputun icine focus olsun ve silinendede eynisi olsun,
// valuesi olanda border rengi deyissin
let numberInputs1 = document.querySelectorAll(".number-input1");

for (let i = 0; i < numberInputs1.length; i++) {
  const input1 = numberInputs1[i];
  
  input1.addEventListener("input", function(){
    if (this.value.length > 0){
      this.value = this.value.slice(0,1);
      this.style.borderBottomColor = "rgba(106, 91, 205, 1)";
        // Input alanına bir değer girildiğinde
        const nextInput = this.nextElementSibling;
        if (nextInput){
            nextInput.focus();
        }
    }else{
        this.style.borderBottomColor = "rgb(188, 187, 194)";
    };
  });


  input1.addEventListener("keydown", function(e) {
    if (e.key === "Backspace" && this.value.length === 0) {
      const prevInput = this.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  });

  input1.setAttribute("maxlength", 1);
};




// ===========================================================================================================
// CHECK PHONE modal kodlari END ============================================================================
// ===========================================================================================================



// ===========================================================================================================
// RESET PASSWORD modal kodlari START ========================================================================
// ===========================================================================================================

// input goz ikonu ve type deyismek kodlari
faSolid1.onclick = ()=>{
    if (passInput2.type === 'password') {
        passInput2.type = 'text';
        faSolid1.classList.remove('fa-eye-slash');
        faSolid1.classList.add('fa-eye');
    }else{
        passInput2.type = 'password';
        faSolid1.classList.remove('fa-eye');
        faSolid1.classList.add('fa-eye-slash');
    }
}

// input goz ikonu ve type deyismek kodlari
faSolid2.onclick = ()=>{
    if (passInput3.type === 'password') {
        passInput3.type = 'text';
        faSolid2.classList.remove('fa-eye-slash');
        faSolid2.classList.add('fa-eye');
    }else{
        passInput3.type = 'password';
        faSolid2.classList.remove('fa-eye');
        faSolid2.classList.add('fa-eye-slash');
    }
}


// inputa value yazildiginca sayina gore guc bari rengli olsun kodlari
const strengthDivs = document.querySelectorAll('.strength');

passInput2.addEventListener('input', function() {
    const password = passInput2.value;
  
    if (password.length >= 2) {
      strengthDivs[0].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    } else {
      strengthDivs[0].style.backgroundColor = '';
    }
  
    if (password.length >= 4) {
      strengthDivs[1].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    } else {
      strengthDivs[1].style.backgroundColor = '';
    }

    if (password.length >= 6) {
        strengthDivs[2].style.backgroundColor = 'rgba(95, 188, 115, 1)';
      } else {
        strengthDivs[2].style.backgroundColor = '';
    }

    if (password.length >= 8) {
        strengthDivs[3].style.backgroundColor = 'rgba(95, 188, 115, 1)';
      } else {
        strengthDivs[3].style.backgroundColor = '';
    }

    if (password.length >= 10) {
        strengthDivs[4].style.backgroundColor = 'rgba(95, 188, 115, 1)';
      } else {
        strengthDivs[4].style.backgroundColor = '';
    }
  
  });


//   inputlar bos olmadiginda ve deyerleri eyni oldugunda butona tiklandiginda rengi ve yazisi deyissin ve diger daxil ol butonu cixsin

changePasswordBtn.onclick = ()=>{
    if (passInput2.value === passInput3.value && passInput2.value !== '') {
        // If passwords match and are not empty
        changePasswordBtn.style.backgroundColor = 'rgba(91, 205, 116, 1)';
        changePasswordBtn.innerText = 'Şifrəniz uğurla yeniləndi';
        daxilOlButton.style.display = 'block';
    }else{
        changePasswordBtn.innerText = 'Şifrəmi yenilə';
        changePasswordBtn.style.backgroundColor = 'rgba(106, 91, 205, 1)';
        daxilOlButton.style.display = 'none';
    }
}

// daxilOlButton-a tiklandiginda ilk login modali acilsin
daxilOlButton.onclick = ()=>{
    registerbox.style.display = 'flex';
    resetPassword.style.display = 'none';
}


// reset password modalinin acilmasi kodlari ve ozunden evvelki modalin baglanmasi
function openResetPassModal() {
    resetPassword.style.display = 'flex';
    checkEmailModal.style.display = 'none';
    checkPhoneModal.style.display = 'none';
};

continueButton1.addEventListener('click', openResetPassModal);
continueButton.addEventListener('click', openResetPassModal);


// reset password modalinin baglanmasi 
xResetPass.onclick = ()=>{
    resetPassword.style.display = 'none';
}




// ===========================================================================================================
// RESET PASSWORD modal kodlari END ==========================================================================
// ===========================================================================================================



// ===========================================================================================================
// NEW USER REGISTER modal kodlari START =====================================================================
// ===========================================================================================================

// input type-ni ve göz ikonunu deyişmek kodlari
eyeNewUser.onclick = ()=>{
    if (passNewUser.type === 'password') {
        passNewUser.type = 'text';
        eyeNewUser.classList.remove('fa-eye-slash');
        eyeNewUser.classList.add('fa-eye');
    }else{
        passNewUser.type = 'password';
        eyeNewUser.classList.remove('fa-eye');
        eyeNewUser.classList.add('fa-eye-slash');
    }
}

// inputa value yazildiginca sayina gore guc bari rengli olsun kodlari
const strengthDivs1 = document.querySelectorAll('.strength1');

passNewUser.addEventListener('input', function () {
    const password1 = passNewUser.value;

    if (password1.length >= 2) {
        strengthDivs1[0].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    }else{
        strengthDivs1[0].style.backgroundColor = '';
    }

    if (password1.length >= 4) {
        strengthDivs1[1].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    }else{
        strengthDivs1[1].style.backgroundColor = '';
    }

    if (password1.length >= 6) {
        strengthDivs1[2].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    }else{
        strengthDivs1[2].style.backgroundColor = '';
    }

    if (password1.length >= 8) {
        strengthDivs1[3].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    }else{
        strengthDivs1[3].style.backgroundColor = '';
    }

    if (password1.length >= 10) {
        strengthDivs1[4].style.backgroundColor = 'rgba(95, 188, 115, 1)';
    }else{
        strengthDivs1[4].style.backgroundColor = '';
    }

});


// modalin acilmasi ilk modalin qeydiyyatdan kecin butonundan kodlari
qeydiyyatBtn.onclick = ()=>{
    newUserModal.style.display = 'flex';
    registerbox.style.display = 'none';
}

// modalin baglanmasi
xNewUser.onclick = ()=>{
    newUserModal.style.display = 'none';
}

// ilk daxil olma modalina qayitmaq kodlari ve bu modalin baglanmasi
daxilOlNewUser.onclick = ()=>{
    registerbox.style.display = 'flex';
    newUserModal.style.display = 'none';
}


// ===========================================================================================================
// NEW USER REGISTER modal kodlari END ======================================================================
// ===========================================================================================================





// ===========================================================================================================
// CHECK REGISTER  modal kodlari START ======================================================================
// ===========================================================================================================


// inputlarin icerisine ancaq 1 reqem yazilabilsin ve avtomatik bir sonraki inputun icine focus olsun ve silinendede eynisi olsun,
// valuesi olanda border rengi deyissin ve herflerin yazilmasina icaze vermesin
let numberInputs2 = document.querySelectorAll('.number-input2');

for (let i = 0; i < numberInputs2.length; i++) {
    const input2 = numberInputs2[i];
    
    input2.addEventListener("input", function(){
      if (this.value.length > 0){
        this.value = this.value.slice(0,1);
        this.style.borderBottomColor = "rgba(106, 91, 205, 1)";
          // Input alanına bir değer girildiğinde
          const nextInput = this.nextElementSibling;
          if (nextInput){
              nextInput.focus();
          }
      }else{
          this.style.borderBottomColor = "rgb(188, 187, 194)";
      };
    });
  
  
    input2.addEventListener("keydown", function(e) {
      if (e.key === "Backspace" && this.value.length === 0) {
        const prevInput = this.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    });


    // klaviatura ile herflerin yazilmasina icaze vermeyen kodlar
    input2.addEventListener("keypress", function(event) {
        if (event.which < 48 || event.which > 57) {
            event.preventDefault();
        }
    });
  
    // copy paste ile herflerin yazilmasina icaze vermeyen kodlar
    input2.addEventListener("paste", function(event) {
        event.preventDefault();
        let pasteData = event.clipboardData.getData('text/plain');
        pasteData = pasteData.replace(/[^\d]/g, '');
        document.execCommand('insertText', false, pasteData);
    });
  

    input2.setAttribute("maxlength", 1);
    
  };



  // 1:55 saniye geri sayim timer kodlari ve her defe modal acildiginda baslayir tekrar geri sayim
    let zaman2 = 115;
    let geriSayim2;
    
    function startTimer2() {
        geriSayim2 = setInterval(function () {
            let deqiqe = Math.floor(zaman2/60);
            let saniye = zaman2 % 60 ;
    
            // saniyeleri iki reqemli etmek
            if (saniye < 10) {
                saniye = "0" + saniye;
            }
    
            // geri sayimi gostermek
            document.getElementById('timerCheckRegister').innerHTML = deqiqe + ":" + saniye;
    
            // zaman azalsin
            zaman2--; 
    
            // zaman qurtaranda dayansin ve yazi cixsin
            if (zaman2 < 0) {
                clearInterval(geriSayim2);
                document.getElementById('timerCheckRegister').innerHTML = "Zaman bitdi!"
            }
    
        },1000);  // her 1 saniyede bir isledir
    }
    
    function stopTimer2() {
        clearInterval(geriSayim2);
        zaman2 = 115;
    }
    
    function showmodal2() {
        checkRegisterModal.style.display = 'flex';
        newUserModal.style.display = 'none';
        startTimer2();
    }
    
    function hidemodal2() {
        checkRegisterModal.style.display = 'none';
        stopTimer2();
    }
    
    continueNewUser.addEventListener('click', showmodal2);
    xCheckRegister.addEventListener('click', hidemodal2);


    // inputlari dolu oldugunda butonun tiklandiginda rengi ve yazisi deyissin 
    let numberInputs3 = document.querySelectorAll('.number-input2');

    confirmBtn.addEventListener('click', function () {

        numberInputs3.forEach((input)=>{
            if (input.value !== '') {
                confirmBtn.style.backgroundColor = 'rgba(91, 205, 116, 1)';
                confirmBtn.innerText = 'Qeydiyyatınız tamamlandı';
                daxilOlCheckRegister.style.display = 'block';
                textCheckRegister.style.display = 'none';
            }else{
                confirmBtn.style.backgroundColor = 'rgba(106, 91, 205, 1)';
                confirmBtn.innerText = 'Təsdiq edin';
                daxilOlCheckRegister.style.display = 'none';
                textCheckRegister.style.display = 'flex';
            }
        });

    });



    daxilOlCheckRegister.onclick = ()=>{
        registerbox.style.display = 'flex';
        checkRegisterModal.style.display = 'none';
        hidemodal2();
    }



// ===========================================================================================================
// CHECK REGISTER  modal kodlari END =========================================================================
// ===========================================================================================================





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

// ===========================================================================================================
// Categories modal js kodlari END ===========================================================================
// ===========================================================================================================


// logini yoxlamaq ve hesabim sehifesine kecid kodlari
const mockEmail = 'emin@gmail.com';
const mockPassword = '12345';

daxilOl.onclick = ()=>{
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === mockEmail && password === mockPassword) {
         window.location.href = './hesabım/hesabım.html';
    }else if (email === '' || password === '') {
        alert('Email və Şifərnizi daxil edin');
    }else{
        alert("Email və ya şifrə yanlışdır!");
    }

}


// search inputa focus oldugunda search-modal acilmasi kodlari
searchInput.addEventListener('focus', function () {
    searchModal.style.display = 'block';
});



// elan kartlarina tiklandiginda elan details sehifesinin acilmasi
let cards = document.querySelectorAll('.elan-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    location.href = 'elan-details/elan-details.html';
  });
});



document.body.onclick = e =>{
    if (e.target !== select && e.target !== select1  && e.target !== options && e.target !== options2 && e.target !== searchModal && e.target !== searchInput && !searchModal.contains(e.target)) {
        options.style.display = 'none';
        options2.style.display = 'none';
        searchModal.style.display = 'none';
    }
}