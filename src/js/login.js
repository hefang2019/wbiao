(function() {
  $("#scan_lg").on("click", function() {
    $(".two_code").css("display", "block");
    $(".user_login").css("display", "none");
    $(".pwd_login").css("display", "none");
  });
  $(".vipLogin").on("click", function() {
    $(".two_code").css("display", "none");
    $(".user_login").css("display", "block");
    $(".pwd_login").css("display", "none");
  });
  $(".accounts_in").on("click", function() {
    $(".pwd_login").css("display", "block");
    $(".user_login").css("display", "none");
  });
})();
