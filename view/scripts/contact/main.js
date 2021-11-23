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
  alert(data.name + "\n " + data.email + "\n " + data.message + "\n" + "Sent");
});
