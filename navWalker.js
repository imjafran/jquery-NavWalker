
jQuery.fn.extend({
  navWalker: function (data = {}) {
    let nav = this,
      el = $(nav),
      route = window.location.href;

    el.children(data.li ?? "li").removeClass(data.active ?? "active");

    el.children(data.li ?? "li").each((indexOfAnchor, anchor) => {
      if ($.trim($(anchor).find("a").attr("href")) == $.trim(route)) {
        $(anchor).addClass(data.active ?? "active");
      }
    });

    return nav;
  },
});


