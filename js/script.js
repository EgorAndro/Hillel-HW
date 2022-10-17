 $(document).ready(function(){
    $('.slider').bxSlider();
    });
    $(function() {
        $('.tabs nav a').on('click', function() {
            show_content($(this).index());
        });

        show_content(0);

        function show_content(index) {

            $('.tabs .content.visible').removeClass('visible');
            $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

            $('.tabs nav a.selected').removeClass('selected');
            $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
        }
    });
    $('.publications-masonry').masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.grid-sizer',
    });
    $( ".nav-btn" ).click(function() {
        $( ".mobile-nav" ).toggleClass( "active" );
    });

