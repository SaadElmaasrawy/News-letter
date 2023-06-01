var email = document.getElementById("email");
var btn = document.getElementById("btn");
var error = document.getElementById("error");

btn.onclick = function(){
    const valid = validEmail(email.value)
    console.log(valid)
    if( valid == false){
        email.classList.add("border-[#ff6257]");
        email.classList.add("bg-red-200");
        email.classList.add("text-[#ff6257]");
        error.classList.remove("hidden");
    }else{
        email.classList.remove('border-[#ff6257]');
        error.classList.add("hidden");
        document.body.innerHTML =`
        <div class="flex-col m-auto my-[10%] bg-white w-[27%] h-[55vh] rounded-md p-10 max-sm:w-[100%] max-sm:flex-col-reverse max-sm:h-[100vh] max-sm:m-0 max-sm:rounded-none max-sm:pt-[30vh]">
        <img src="./images/icon-success.svg" class="w-10 mb-5">
        <h1 class="text-[42px] leading-10 text-[#36384e] font-bold mb-3">Thanks for subscibing!</h1>
        <p class="text-[12px] text-[#36384e] mb-3">A confirmation email has been sent to</br><span class="font-bold">${email.value}.</span>Please open it and click</br>the button inside to confirm your subscription.</p>
        <button class="bg-[#242742] text-white w-full text-[16px] rounded-md p-3 hover:bg-gradient-to-r from-[#FF5868] to-[#FF693C] my-4">Subscribe to monthly newsletter</button>
        </div>
        `

    }
}


function validEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}


// const c = validEmail("saadelmaasrawy@gmail.com");
// console.log(c)