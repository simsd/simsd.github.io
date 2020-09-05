console.log("wedrfwe")


$(document).ready(function (){
    $('.submit').click(function (event){
        event.preventDefault()
        console.log('clicked')

        var email = $('.email').val()
        var name = $('.name').val()
        var email = $('.message').val()
    })
})