const inputs = document.querySelectorAll('.controls input');


function handleUpdate(event){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

}


inputs.forEach((element)=>{
    element.addEventListener('change',handleUpdate);
    element.addEventListener('mousemove',handleUpdate);
})