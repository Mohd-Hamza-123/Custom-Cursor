const root = document.querySelector('#root');
const cursor = document.querySelector('.cursor');

root.addEventListener('mousemove',(e)=>{
    
    xCoordinate = e.clientX 
    yCoordinate = e.clientY
    
    cursor.style.left = `${xCoordinate}px`
    cursor.style.top = `${yCoordinate}px`
})