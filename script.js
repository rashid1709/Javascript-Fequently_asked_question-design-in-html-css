const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordians=>{
    const icon = accordians.querySelector('.icon');
    const answer = accordians.querySelector('.answer');

    accordians.addEventListener("click",()=>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        //or

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight=null;

        }
        else {
            icon.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight + 'px';
        }

    })
})