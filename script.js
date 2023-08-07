var grid = document.querySelector('.collection-list').isotope({
  });
  // filter items on button click
document.querySelector('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = (this).attr('data-filter');
    resetFilterBtns();
    (this).addClass('active-filter-btn');
    grid.isotope({ filter: filterValue });
  });
  
  var filterBtns =document.querySelector('.filter-button-group').find('button');
    function resetFilterBtns(){
    filterBtns.each(function(){
    (this).removeClass('active-filter-btn');
    });
   }