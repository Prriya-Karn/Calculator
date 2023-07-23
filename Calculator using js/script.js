    let screen = document.querySelector('.Display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.Allclear');
    let Delete = document.querySelector('.delete');
    let equal = document.querySelector('.equal');


    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            let value = button.value ;
            screen.value+=value ;
        })
    })

    clear.addEventListener('click',function(){
        let value = clear.value ;
        screen.value = '' ;
    })

    Delete.addEventListener('click',function(){
        let value = Delete.value ;
        screen.value = screen.value.toString().slice(0,-1) ;
    })

    equal.addEventListener('click',function(){
        let value = equal.value ;
        screen.value = eval(screen.value) ;
    })
