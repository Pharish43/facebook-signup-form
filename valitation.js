$(document).ready(function(){
$("#signup").validate({
    rules:{
        fname:{
            required: true,
            minlength: 5,
        },
        name:{
            required: true,
            minlength: 5,
        },
        pass:{
            required: true,
            minlength: 8,
        },
        day: {
            required: true,
        },
        month:{
            required: true,

        },
        year:{
            required: true,

        },
        genter:{
            required: true,

        }
        
    }
})
});