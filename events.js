

function renderMobile(name){
 var x=document.getElementById(name);
 if(x !== 'undefined')
  {x.innerHTML='<iframe src="mobile.html" width="100%" height="90%" style="border:none;"></iframe>';}
 else
  {console.log('error ... name is no DOM element');} 
}

function renderDesktop(name){
 var x=document.getElementById(name);
 if(x !== 'undefined')
  {x.innerHTML='<iframe src="desktop.html" width="100%" height="90%" style="border:none;"></iframe>';}
 else
  {console.log('error ... name is no DOM element');} 
}


(function($){

  $(document).ready(function(){
   if(window.screen.height>window.screen.width)
    {renderMobile('deviceAdoption');
    }
   else 
    {renderDesktop('deviceAdoption');
    }

  });

}(jQuery));

