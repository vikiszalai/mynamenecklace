function update_visit_count() {
  var visits = $.cookie("visits") || 1;

  //alert(visits);
  if (visits == 2) {
    $(".popup").fadeIn(500);
    $(".cover").fadeTo(500, 0.5);
    visits++;
  } else {
    visits++;
  }
  $(".close").click(function () {
    $(".popup").fadeOut(500);
    $(".cover").fadeOut(500);
  });

  $.cookie("visits", visits);
}

$(document).ready(function () {
  pagenum = 1;
  function AutoRotate() {
    var myele = null;
    var allElements = document.getElementsByTagName("label");
    for (var i = 0, n = allElements.length; i < n; i++) {
      var myfor = allElements[i].getAttribute("for");
      if (myfor !== null && myfor == "slide_2_" + pagenum) {
        allElements[i].click();
        break;
      }
    }
    if (pagenum == 4) {
      pagenum = 1;
    } else {
      pagenum++;
    }
  }
  setInterval(AutoRotate, 5000);
});

$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .find(".accordion-title i.fa-chevron-down")
      .removeClass("chevron-top");

    $(this).toggleClass("active-title");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title")
      .removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings();
  });
});
