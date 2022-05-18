const createLoading= () => {
   let blocker = document.getElementsByClassName('blocker2');
   blocker[0].style.opacity =1;
   
   let i = 1;
   const reduce = () => {
    if(blocker[0].style.opacity > 0 ){
     i-=0.05;
     blocker[0].style.opacity =i;
    }
}
    if(blocker[0].style.opacity > 0 ){
       
        (setInterval(reduce,100));
    if( i  < 0.1){
      blocker[0].style.zIndex = "10";
    }
  
    } 
   
    
}

const initLoadPage = () => {


    if (document.querySelector('#Lusion')) {
      createLoading();
    }
  }
  
  
  export { initLoadPage};