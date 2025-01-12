var youtube = "#";  // Add your YouTube link if available
var twitter = "https://x.com/mistaolivaaaa";
var linkedin = "#";  // Add your LinkedIn link if you have one
var instagram = "https://www.instagram.com/saad_fm12/";
var github = "https://github.com/saadfahmi";
var email = 'saadfagmi@gmail.com';

whois = [
  "<br>",
  "Hello, I'm Saad Fahmi! 👋",
  "I'm a passionate programmer and technology enthusiast, always eager to explore and learn new things.",
  "Currently, I'm focused on enhancing my skills in web development, cybersecurity, and software engineering.",
  "My journey in tech has been fueled by a love for problem-solving and a commitment to building innovative and efficient solutions.",
  "I believe in the power of technology to create meaningful change, and I strive to apply my knowledge to solve real-world challenges.",
  "When I'm not coding, you can find me experimenting with new technologies or learning more about software design and development.",
  "Let's connect and collaborate to turn great ideas into reality!",
  "<br>"
];


whoami = [
  "<br>",
  "The paradox of “Who am I?” is: we never know, but, we constantly find out.",
  "<br>"
];

social = [
  "<br>",
  'youtube       <a href="' + youtube + '" target="_blank">Coming Soon....</a>',
  'twitter       <a href="' + twitter + '" target="_blank">twitter/mistaolivaaaa</a>',,
  'instagram     <a href="' + instagram + '" target="_blank">instagram/saad_fm12</a>',
  'github        <a href="' + github + '" target="_blank">github/saadfahmi</a>',
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Saad ?',
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

const banner = [
 
  " ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,......................",
  " ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,.............",
  " ,,,,,,,,,,,,,,,,,,,,,,,,,,,,*%%&&%(&&&&&##&&&&&&&%&&&&%(/,,,,,,,,,,,,,...........",
  " ,,,,,,,,,,,,,,,,,,,,,,/#%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%%#,,,,,,,,,,..........",
  " ,,,,,,,,,,,,,,,,,,%&&&&&&&&&@@&@&&&&&@&@@@&&@&&&&&&&&&&&&&&&&%%,,,,,,,,.........",
  " ,,,,,,,,,,,,,,,/#&&&&&&&&@@@@&@@@@@@@@@@@@@@@@@&&&&&&&&&&&&&%,,,,,,,,,,......",
  " ,,,,,,,,,,,,&&&@&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@&&&&&&%%,,,,,,,,,,.....",
  " ,,,,,,,,,,%&&&&&@&@@@@@&@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@&&&&&&&&*,,,,,,,,,,..",
  " ,,,,,,,,,&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@&&&&&%/,,,,,,,,,,,",
  " ,,,,,,,,,&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@@@@@@@@@@@&@@@&&&&&%*,,,,,,,,,,,",
  " ,,,,,,,,,*&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@&&&@&&&&&&&&&&&&&&&%,,,,,,,,,,,,",
  " ,,,,,,,,,,&&@&@@@@@@@@@@@@@@@&@@@&&&&&&&&&&&%##(((((((##%(#&&&&&&&#,,,,,,,,,,,",
  " ,,,,,,,,,,&&@@@@&%&&%%&&@@&@%((((/(((/((((((/////////////(((#%&&&&%,,,,,,,,,,,",
  " ,,,,,,,,,,&&&@@&%#######(((((//////////////////////////////((#&&&&%,,,,,,,,,,,",
  " ,,,,,,,,,,&&&@@&%#######(((((//////////////////////////////((#&&&&%,,,,,,,,,,,", 
  " ,,,,,,,,,,&&&@&%%##(((((((((/////////////////////////////////(%%%%%*,,,,,,,,,,",
  " ,,,,,,,,,,&&&&%##((((((((((//////////////////////////////////(##%#%*,,,,,,,,,,",
  " ,,,,,,,,,,%&%%#((((((((((((////////////////////////////////////(##%*,,,,,,,,,,",
  " ,,,,,,,,,,(%%#(((((((%%%&&%%&%%((///////////(#((%%%%%%%%#(//////(#%,,,,,,,,,,,",
  " ,,,,,,,,,,*%%((((#&&&&&&&&&&&&&&#&##((((((#%%%%&%&&&&&&%%&%%((//(##,,,,,,,,,,,",
  " ,,,,,,,,,,%#(((####(##%######%#((#(((((//(((((#####(##((//(#///(#/,,,,,,,,,,,",
  " ,,,,,,((##%#(((((((#%@%%&&@&/(%(((((/////((((%%%&@#@#@%(((//////##((/,,,,,,,,,",
  " ,,,,,,(#(((((((((((((#%%%#####((//////////((((((###(/(##(((//////((/#(,,,,,,,,",
  " ,,,,,,(#(((#(((((((((((((((((((///////////////((((((/////////////(//#/,,,,,,,,",
  " ,,,,,,(###((((((((((///////////////////////////////////////////#(///,,,,,,,,,",
  " ,,,,,,/(#%###(((((((((///////////(((/////////////////////////////##(/*,,,,,,,,,",
  " ,,,,,,*(#((#%(((((((((/////////((((((///////////////////////////((//(,,,,,,,,,,",
  " ,,,,,,,,,/(((##(((((((((///////(((((((//////////////////////////(#///,,,,,,,,,,",
  " ,,*,,,,,,,,,,,*##(((((((((/////(((####(((/(%#(((/////////////////(/,,,,,,,,,,,,,",
  " ,*,,,,,,,,,,,,,(####((((((((((((((#%&%#(((####((///////////////((#,,,,,,,,,,,,,,",
  " ,*,,,,,,,,,,,,,*%####((((((((##%%&&&&%%#(#%%&&%%%#((////////(((((*,,,,,,,,,,,,,,",
  " ,**,*,,,,,,,,,,,*####((((((%%&%%####((((((((((((##%%##//////(((((,,,,,,,,,,,,,,,",
  " ***,,*,,,,,,,,,,,*##(#((((###(####%%%%((((((##(((((((((///((((((,,,,,,,,,,,,,,,,",
  " ****,*,*,,,,,,,,,,*%##((((((((((####((((((((((((((((//////(((#(,,,,,,,,,,,,,,,,,,",
  " ********,,,,,,,,,,*#%###((((((((((((((((((((((((((///////(((#%*,,,,,,,,,,,,,,,,,,",
  " **********,,,,,,,,,##%%##((((((((((((((####(((((((((((((((#%((//,,,,,,,,,,,,,,,,,",
  " *************,,,***####&########(((((((((((((((((((#(((((#%(((((////(/*,,,,,,,,,,",
  " ***********/((((((%######%#####%%%%###%%##%%##%%%#%#####%((((((#%(////(//////*,,,",
  " *****/((%(((((((#%##########&#%&&&&&&&&&&&&&&&&&&&&&###((((((((((%//////////////",
  " /(((((((((((((((%#############%&@@@@@@@@@@@@@@@@&&&%%((((((((((((##////(////////",
  " (((((((((#(((((#########(#(#####@@&@@@@@@@@@&&&%#((((((((((((((((#////(////////",
  " (((((((((((((((########(((#((######(#(((((((((((((((((((((((((((((/////////////",
  " (((((((((((((((##########(((((((((((((((((((((((((((((((((((((((#//////////////",
  " (((((((((((((((((########((((((((((((((((((((((((((((((((((((((#/*/////////////",
  " ((((((((((((((((((######((((((((((((((((((((((((((((((((((((((/**//////////////",
  " ((((((((((((((((((((####(((((((((((((((((((((((((((((((((((((////*/////////////"              ,
  '<span class="color2">Welcome to my interactive web terminal Portfolio.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  '<span class="color2">If you encounter any issues,<br>please refresh the page or press F5.</span>',

];



