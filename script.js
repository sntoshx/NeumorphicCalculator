var theorange = "color:rgb(255,145,0);background:#1a1a1a;font-size:xx-large";
var thegrey = "color:white;background:#1a1a1a;font-size:xx-large";
console.log(
  "%cS%cantosh %cP%candey %c©2020.",
  theorange,
  thegrey,
  theorange,
  thegrey,
  thegrey
);
var a = document.getElementById("op1");
var b = document.getElementById("op2");
var r = document.getElementById("res");

window.onload = () => {
  clearit = () => {
    a.value = "";
    b.value = "";
    r.value = "";
  };

  emptyCheck = () => {
    if (a.value == "" || b.value == "") {
      return true;
    } else {
      return false;
    }
  };

  add = () => {
    if (emptyCheck()) {
      clearit();
      alert("Enter the numbers and then continue.");
    } else {
      var c = Number(a.value) + Number(b.value);
      var re = /^[-+]?[0-9]+\.[0-9]+$/;
      if (!String(c).match(re)) c = parseInt(c);
      else {
        c = parseFloat(c);
        c = c.toFixed(3);
      }
      r.value = c;
    }
  };

  minus = () => {
    if (emptyCheck()) {
      clearit();
      alert("Enter the numbers and then continue.");
    } else {
      var c = Number(a.value) - Number(b.value);
      var re = /^[-+]?[0-9]+\.[0-9]+$/;
      if (!String(c).match(re)) c = parseInt(c);
      else {
        c = parseFloat(c);
        c = c.toFixed(3);
      }
      r.value = c;
    }
  };

  multiply = () => {
    if (emptyCheck()) {
      clearit();
      alert("Enter the numbers and then continue.");
    } else {
      var c = Number(a.value) * Number(b.value);
      var re = /^[-+]?[0-9]+\.[0-9]+$/;
      if (!String(c).match(re)) c = parseInt(c);
      else {
        c = parseFloat(c);
        c = c.toFixed(3);
      }
      r.value = c;
    }
  };

  divide = () => {
    if (emptyCheck()) {
      clearit();
      alert("Enter the numbers and then continue.");
    } else {
      var c = Number(a.value) / Number(b.value);
      var re = /^[-+]?[0-9]+\.[0-9]+$/;
      if (!String(c).match(re)) c = parseInt(c);
      else {
        c = parseFloat(c);
        c = c.toFixed(3);
      }
      if (c == Infinity || c == NaN) {
        c = "undefined";
      }
      r.value = c;
    }
  };
};
