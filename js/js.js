  (function(){
  let elMenuButton = document.querySelector(".responseMenuButton");
  let elContent = document.querySelector('.content');
  let status = false;
  let x = 0;
   window.addEventListener('resize', resizeHeandler);
   elMenuButton.addEventListener('click', clickHeandler);
   elContent.style.transition = 'transform 0.3s cubic-bezier(.9,.4,.5,1.1)';
   let up = document.querySelector(".Up");
   let cent = document.querySelector(".Cent");
   let bott = document.querySelector(".Bottom");

   //РАЗМЕР ОКНА
     function resizeHeandler(){
    x = window.innerWidth;
    if(x > 850){
      if(status){
        removeClassActiveMenu();
      }
        status = false;
      elContent.classList.remove('contentResp');
      elContent.style.transition = 'none';
        }
    else if(x < 848){
      elContent.style.transition = 'transform 0.3s cubic-bezier(.9,.4,.5,1.1)';
      if(!status){
        elMenuButton.classList.add("r");
      }
     }
   }
   
//КЛИК СОБЫТИЕ
   function clickHeandler(){
  if(status === false ){
      elContent.classList.add('contentResp');
      elMenuButton.classList.remove("r");
      addClassActiveMenu();
         status=true;
    } 
    else if(status === true){
      elContent.classList.remove('contentResp');
      removeClassActiveMenu();
      elMenuButton.classList.add("r");
       status = false;
    } 
}
function addClassActiveMenu(){
     up.classList.add('tireUp');
    cent.classList.add("tireCent");
    bott.classList.add("tireBottom");
  } 
  function removeClassActiveMenu(){
    up.classList.remove("tireUp");
    cent.classList.remove("tireCent");
    bott.classList.remove("tireBottom")
  }

  })();