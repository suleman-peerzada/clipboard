// tic tac toe 
// $(document).ready(function () {
//   var turn = true;
//   var gameOVer = false;

//   $(document).on("click", ".small-box", function () {
//     if (turn === true) {
//       $("#head1").text("PLAYER 1 TURN FOLLOWS");

//       $(this).find("i").addClass("fa fa-times");
//       $(this).find("i").removeClass("all-box");
//       turn = false;
//     }

//     setTimeout(function () {
//       var emptyBoxes = $(".small-box").filter(function () {
//         return (
//           !$(this).find("i").hasClass("fa fa-times") &&
//           !$(this).find("i").hasClass("fa fa-check")
//         );
//       });

//       if (emptyBoxes.length > 0) {
//         var randomIndex = Math.floor(Math.random() * emptyBoxes.length);
//         var randomBox = $(emptyBoxes[randomIndex]);
//         randomBox.find("i").addClass("fa fa-check");
//         randomBox.find("i").removeClass("all-box");
//         $("#head1").text("PLAYER 2 TURN FOLLOWS");
//         turn = true;
//       }
//     }, 1000);

//   });

//   $(".reset-btn").click(function () {
//     location.reload();
//   });
// });

// clip board 

$(document).ready(function () {
  $(".copy-btn").on("click", function () {
    $("#textField").select(); // Select the text field content
    document.execCommand('copy'); // Copy the selected content to clipboard
     // Paste the content from clipboard
  })
  $(".paste-btn").on("click", function () {
    // alert()
  $("#textField").focus(); // Focus on the field where you want to paste
    document.execCommand('paste');
  })
})
