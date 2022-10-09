const backdropEl = document.querySelector( '.backdrop' )
const modal = document.querySelector( '.modal' )
const selectPlansButtons = document.querySelectorAll( '.plan button' )
const toggleButton = document.querySelector( '.toggle-button' )
const mobileNav = document.querySelector( '.mobile-nav' )
const modalActionNo = document.querySelector( '.modal__action--negative' )
for ( const plan of selectPlansButtons ) {
    plan.addEventListener( 'click', function () {
        modal.classList.add( 'open' )
        backdropEl.classList.add( 'open' )
    } )
}

backdropEl.addEventListener( 'click', function () {
    mobileNav.classList.remove( 'open' )
    closeModal()
} )

toggleButton.addEventListener( 'click', function () {
    mobileNav.classList.add( 'open' )
    backdropEl.classList.add( 'open' )
} )

function closeModal() {
    if ( modal ) {
        modal.classList.remove( 'open' )
    }
    backdropEl.classList.remove( 'open' )
}

if ( modalActionNo ) {
    modalActionNo.addEventListener( 'click', function () {
        closeModal()
    } )
}
