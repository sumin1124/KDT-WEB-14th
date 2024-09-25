$(function () {
  $("#btn_set").on("click", function () {
    $("#set1").text(function (i, origText) {
      return "안녕하세요. 저는 " + origText + "입니다.";
    });
  });
});
