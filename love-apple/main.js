var timestamp = Date.parse(new Date());
var startTimeStamp = Date.parse(new Date('2021-12-16'))
var time = timestamp / 1000 - startTimeStamp / 1000;

function timedCount() {
  document.getElementById("shijian").innerHTML = fmoney(time, 0);
  time = time + 1;
  t = setTimeout("timedCount()", 1000);
}

function fmoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
  t = "";
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return t.split("").reverse().join("") /*+ "." + r*/;
}