const accordion = document.getElementsByClassName('content-container')
console.log(accordion);

for (const item of accordion) {
    console.log(item);
    item.addEventListener('click',function(){
        this.classList.toggle('active')
    })
}