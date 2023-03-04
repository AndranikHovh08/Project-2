'use strict';
$(document).ready(function(){
   var $list; 
   var $newform;
   var $text;


    $list = $('ul');
    $newform = $('#for');
   


    $newform.on('submit', function(e){
       e.preventDefault();
       $text = $('input:text').val();
       $list.append('<li>' + $text + '</li>' );
       $('input:text').val('')
    
    });

    $list.on('click', 'li', function(){
        var $li = $(this);
        $li.remove();
    })

     



    
})