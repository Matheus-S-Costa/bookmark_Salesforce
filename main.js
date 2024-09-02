javascript: (function () {
  function e(e) {
    var t = new RegExp(/["]/g),
      n = e.replace(t, "“"),
      t = new RegExp(/\<[^\<]+\>/g),
      n = n.replace(t, "");
    return "" == n ? "" : '"' + n + '"';
  }
  for (
    var t = document.evaluate(
        "//div[@id='editors-body']/div[not(contains(@style,'display:none') or contains(@style,'display: none'))]//table/tbody/tr",
        document,
        null,
        0,
        null
      ),
      n = [];
    (row = t.iterateNext());

  ) {
    for (
      var o = row.getElementsByTagName("td"), a = [], r = 0;
      r < o.length;
      r++
    )
      a.push(e(o[r].textContent));
    n.push(a);
  }
  for (
    var d = "data:text/xlsx;charset=utf-8,filename=download.xlsx,", l = [], r = 0;
    r < n.length;
    r++
  )
    l.push(n[r].join(","));
  d += l.join("\r\n");
  var c = document.createElement("a");
  c.setAttribute("href", encodeURI(d)),
    c.setAttribute("download", "dev_console.xlsx"),
    document.body.appendChild(c),
    c.click();
})();
