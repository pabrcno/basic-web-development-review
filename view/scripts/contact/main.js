//on name change jquery event

let data = {
  name: "",
  email: "",
  message: "",
};
$("#name").on("change", function () {
  data.name = $(this).val();
});
$("#email").on("change", function () {
  data.email = $(this).val();
});
$("#message").on("change", function () {
  data.message = $(this).val();
});
//on send click print data
$("#send").click(function () {
  ajaxCall();
});

//AJAX call to http://numbersapi.com/number/math with a random number
//and print the response

ajaxCall = () => {
  $.ajax({
    url: "http://numbersapi.com/random/math",
    success: function (response) {
      alert(
        data.name + "\n " + data.email + "\n " + data.message + "\n" + "Sent"
      );
      console.log(response);
    },
  });
  console.log("ajax call");
};
