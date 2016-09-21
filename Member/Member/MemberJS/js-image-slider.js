$( window ).load( function() {

    $( '.sldr' ).each( function() {
        var th = $( this );
        th.sldr({
            focalClass    : 'focalPoint',
            offset        : th.width() / 2,
            sldrWidth     : 'responsive',
            nextSlide     : th.nextAll( '.sldr-nav.next:first' ),
            previousSlide : th.nextAll( '.sldr-nav.prev:first' ),
            selectors     : th.nextAll( '.selectors:first' ).find( 'li' ),
            toggle        : th.nextAll( '.captions:first' ).find( 'div' ),
            sldrInit      : sldrInit,
            sldrStart     : sldrStart,
            sldrComplete  : sldrComplete,
            sldrLoaded    : sldrLoaded,
            sldrAuto      : true,
            sldrTime      : 2000,
            hasChange     : true
        });
    });

});