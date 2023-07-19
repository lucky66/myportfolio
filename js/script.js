// function showContent(contentId) {
//   // Hide all content divs
//   var contents = document.getElementsByClassName('content');
//   for (var i = 0; i < contents.length; i++) {
//     contents[i].style.display = 'none';
//   }

//   // Show the selected content div
//   var selectedContent = document.getElementById(contentId);
//   if (selectedContent) {
//     selectedContent.style.display = 'block';
//   }
// }

function showContent(contentId) {
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  //show selected content
  var showSelected = document.getElementById(contentId);
  if (showSelected) {
    showSelected.style.display = 'block';
  }
};

$(document).ready(function() {
      $('.nav_click').click(function() {
        $('.nav_click').removeClass('active');
        $(this).addClass('active');
      });

      // Set initial active state based on URL hash
      var hash = window.location.hash;
      if (hash) {
        var activeNavItem = $('.nav_click[href="' + hash + '"]');
        activeNavItem.addClass('active');
      }
    });