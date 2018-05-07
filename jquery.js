$(document).ready(function () {
    $(".btn-openModal").click(function () {

        $(".modal").css("display", "flex");
    });

    $(".close").click(function () {

        $(".modal").css("display", "none");
    });

    // $(window).click(function (event) {

    //     var target = $(event.target);
    //     if (!(target.is(".modal-content")) && !(target.is(".modal-header")) && !(target.is("h2"))
    //         && !(target.is("span")) && !(target.is(".modal-body")) && !(target.is("textarea"))
    //         && !(target.is(".modal-footer")) && !(target.is(".btnSave"))
    //         && !(target.is(".btn-openModal"))) {
    //         $(".modal").css("display", "none");
    //     }
    // });


    $(window).click(function (event) {

        var target = $(event.target);
        if ( target.is(".modal")  || target.is(".btnCloseBtn") ) {
            $(".modal").css("display", "none");
        }
    });

    
  //click anywhere outside of the content div
// $(".outside-div ").click(function(e){

//     //get id of the content Div
//     var content = $("#content-div");
//     if(e.target.id != content.attr('id') && !content.has(e.target).length){
//     $(".outside-div").delay(50).fadeOut();
//     }
//     });
    
    
//     //when press esc key
//     $(document).on( 'keydown', function ( e ) {
//     if ( e.keyCode === 27 ) {
//     $('.outside-div').delay(50).fadeOut();
//     }
//     });
    
//     });
});