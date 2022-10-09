const backdropEl = document.querySelector( '.backdrop' )
const modal = document.querySelector( '.modal' )
const selectPlansButtons = document.querySelectorAll( '.plan button' )
for ( const plan of selectPlansButtons ) {
    plan.addEventListener( 'click', function () {
        modal.style.display = 'block'
        backdropEl.style.display = 'block'
    } )
}