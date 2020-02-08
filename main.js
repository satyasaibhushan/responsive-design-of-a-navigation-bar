const navslide =()=>{
    const burger = document.querySelector('.burger')
    const list = document.querySelector('.list');
    const li = document.querySelectorAll('.list li');

    function displayWindowSize(){
        // Get width and height of the window excluding scrollbars
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        if (w>760){
            list.classList.remove('active');
            li.forEach((link,index) => {
                 link.style.animation=""
                 burger.classList.remove('on');
                });
        }
    }
    window.addEventListener("resize",displayWindowSize
    );
    displayWindowSize()
    burger.addEventListener('click', ()=>{
        list.classList.toggle('active');
        burger.classList.toggle('on');
    
    li.forEach((link,index) => {
        if(link.style.animation) link.style.animation=""
        else link.style.animation= `animaton 0.5s ease forwards ${index/7 +0.3}s`

        });
    })
    

}
navslide();