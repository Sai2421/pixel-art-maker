// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//$(document).ready(function(){





    var a, b;
   
    
    $(document).ready(function () {

        $(document).on('click','.ett',function(){
            
            var co =$('#colorPicker').val();
               $(this).css('background-color',co);
            })
            
            $(document).on('click','#fill',function(){
                var c =$('#colorPicker').val();
                $('table').css('background-color',c);
            })

        $('#sam').click(function () {
            a = $('#inputHeight').val();
            b = $('#inputWidth').val();
        
            for (let i = 0; i < a; i++) {
                $('table').append('<tr class="row"></tr>');
                for (let j = 0; j < b; j++)
                {
                    $('tr').filter(':last').append('<td class="ett"></td>');
                }
                
            }
        })
        
        
    })
    

        
    
    

    
   


