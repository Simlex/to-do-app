    const tasks = $('.added-tasks__tasks').length;
    $('.items > span').text(tasks);

    //Function to check length of items and update
    function itemCheck() {
        const tasks = $('.added-tasks__tasks').length;

        if( tasks == 1 ) {
            $('.items').text((tasks) + ' item left');
        } else if(tasks == 0) {
            $('.items').text('No item left');
        } else {
            $('.items > span').text(tasks);
        }
    }

    //Function to select task
    function selectTask() {
        const click = $('.click');
        $(click).click(function() {
            $(this).toggleClass('clicked');
        });
    }

    //Function to check selected items
    function selected() {
        const selected = $('.clicked').length;
        console.log(selected);
        $('.selected').text(selected);
    }

    //Function to remove task
    function removeTask() {
        $('.added-tasks__tasks > svg').click(function() {
            $(this).parent().remove();
        });
    }

    //Change moon to sun icon
    function toggleThemeIcon() {
        $('.hero-details__theme > svg').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>');
    }

    
    //MAIN FUNCTION
$(function() {

    //OVERLAY
    $('.create').click(() =>  {
        $('.overlay').toggleClass('clear');
    });
    $('.svg, input[type="button"]').click(function() {
        $('.overlay').toggleClass('clear');
    });

    $('.click').click(function() {
        $(this).toggleClass('clicked');

        selected();
    });
    
    //REMOVE TASKS AND UPDATE NUMBER OF TASKS LEFT
    $('.added-tasks__tasks > svg').click(function() {
        $(this).parent().remove();

        itemCheck();
    }); 

    //LIGHT MODE FUNCTION
    $('.hero-details__theme').click(function() {
        //$('.hero-details__theme').toggle(toggleThemeIcon());
        document.body.classList.toggle('light-theme');
    });

    //Function for completed tasks. 
    function completed() {
        //const target = $('.added-tasks__tasks > .click');

        if( $('.added-tasks__tasks > .click').hasClass('clicked')) {
            //console.log(target);
            $('.clicked').parent().remove();
            //target.parent().remove();
        } else {
            alert('No task completed');
        }

        itemCheck();
        selected();
    }

    //Call function for completed
    $('.completed').click(function() {
        completed();
    });

    //Storing the tasks input in local storage
    //Get text
    $('input[type=button]').click(function() {
        const input = $('input[type=text]').val();
        const newTask = $('.added-tasks__tasks').clone().removeClass('clear')[0];
        
        $(newTask).find('.click > p').text(input);
        $('.added-tasks').prepend(newTask);


        //Show clicked sign once clicked
        $(newTask).find('.click').click(function() {
            $(this).toggleClass('clicked');

            selected();
        });
        
        //REMOVE TASKS AND UPDATE NUMBER OF TASKS LEFT
        $('.added-tasks__tasks > svg').click(function() {
        $(this).parent().remove();

        itemCheck();
        }); 
        itemCheck();
    });
});