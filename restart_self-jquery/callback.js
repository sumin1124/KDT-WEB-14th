$(function () {
  $("button").on("click", function () {
    $("p").hide("slow", function () {
      alert("시리졌네요.");
    });
  });
});
