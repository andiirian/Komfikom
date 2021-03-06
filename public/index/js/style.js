var numberOfItems = $('#colorlib-project .animate-box').length; 
var limitPerPage = 4; 
$('#colorlib-project .animate-box:gt(' + (limitPerPage - 1) + ')').hide(); 
var totalPages = Math.round(numberOfItems / limitPerPage);
$(".pagination").append("<li class='page-item active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); 
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='page-item'><a href='javascript:void(0)'>" + i + "</a></li>");
}


$(".pagination").append(" <li id='next-page' class=''><a class='page-link' href='javascript:void(0)'>Next</a></li>");


$(".pagination li.page-item").on("click", function() {
  
  if ($(this).hasClass('active')) {
    return false; 
  } else {
    var currentPage = $(this).index();
    $(".pagination li").removeClass('active'); 
    $(this).addClass('active');
    $("#colorlib-project .animate-box").hide(); // Hide all items in loop, this case, all the list groups
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#colorlib-project .animate-box:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.page-item.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++;
     // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#colorlib-project .animate-box").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#colorlib-project .animate-box:eq(" + i + ")").show();
     // Show items from the new page that was selected
    }

    $(".pagination li.page-item:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.page-item.active").index(); 
  console.log(currentPage)// Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#colorlib-project .animate-box").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#colorlib-project .animate-box:eq(" + i + ")").show(); 
      console.log(i);
      // Show items from the new page that was selected
    }

    $(".pagination li.page-item:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});