var hostname = window.location.hostname;
document.getElementById('title').innerHTML = hostname  + " > login";

document.login.username.focus();

var config = {
    loginvc : "Masukkan Kode Voucher kemudian klik login.",
    loginup : "Masukkan Username dan Password <br> kemudian klik login.",
    voucherCode : "Kode Voucher",
    setCase : "false", // lowercase, uppercase or false
    defaultMode : "voucher", // voucher or member
}

var _0x6b60=["\x69\x6E\x66\x6F\x6C\x6F\x67\x69\x6E", /* 0 infologin */
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", /* 1 getElementById */
    "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", /* 2 innerHTML */
    "\x6C\x6F\x67\x69\x6E\x76\x63", /* 3 loginvc */
    "\x6D\x69\x6B\x68\x6D\x6F\x6E", /* 4 mikhmon */
    "\x75\x73\x65\x72\x6E\x61\x6D\x65", /* 5 username */
    "\x6C\x6F\x67\x69\x6E", /* 6 login */
    "\x70\x61\x73\x73\x77\x6F\x72\x64", /* 7 password */
    "\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72", /* 8 placeholder */
    "\x76\x6F\x75\x63\x68\x65\x72\x43\x6F\x64\x65", /* 9 voucherCode */
    "\x76\x61\x6C\x75\x65", /* 10 value */
    "\x73\x65\x74\x43\x61\x73\x65", /* 11 setCase */
    "\x6C\x6F\x77\x65\x72\x63\x61\x73\x65", /* 12 lowercase */
    "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", /* 13 toLowerCase */
    "\x75\x70\x70\x65\x72\x63\x61\x73\x65", /* 14 uppercase */
    "\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65", /* 15 toUpperCase */
    "\x6F\x6E\x6B\x65\x79\x75\x70", /* 16 onkeyup */
    "\x66\x6F\x63\x75\x73", /* 17 focus */
    "\x74\x79\x70\x65", /* 18 type */
    "\x68\x69\x64\x64\x65\x6E", /* 19 hidden */
    "\x55\x73\x65\x72\x6E\x61\x6D\x65", /* 20 Username */
    "\x6C\x6F\x67\x69\x6E\x75\x70", /* 21 loginup */
    "\x64\x65\x66\x61\x75\x6C\x74\x4D\x6F\x64\x65", /* 22 defaultMode */
    "\x6D\x65\x6D\x62\x65\x72", /* 23 member */
    "\x6F\x6E\x6C\x6F\x61\x64", /* 24 onload */
    "\x4D\x69\x6B\x68\x6D\x6F\x6E", /* 25 Mikhmon */
    "\x4D\x49\x4B\x48\x4D\x4F\x4E", /* 26 MIKHMON */
    "\x3C\x63\x65\x6E\x74\x65\x72\x3E\x3C\x68\x32\x20\x73\x74\x79\x6C\x65\x3D\x27\x63\x6F\x6C\x6F\x72\x3A\x72\x65\x64\x27\x3E\x4A\x61\x6E\x67\x61\x6E\x20\x61\x73\x61\x6C\x20\x65\x64\x69\x74\x20\x62\x6F\x73\x6B\x75\x2C\x3C\x62\x72\x3E\x62\x61\x63\x61\x20\x6C\x69\x73\x65\x6E\x73\x69\x6E\x79\x61\x20\x6C\x61\x67\x69\x21\x20\x3C\x2F\x68\x33\x3E\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E",
    /* 27 <center><h2 style='color:red'>Jangan asal edit bosku,<br>baca lisensinya lagi! </h3></center> */
    "\x77\x72\x69\x74\x65", /* 28 write */
    "\x5B\x69\x64\x5E\x3D", /* 29 [id^= */
    "\x5D", /* 30 ] */
    "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C", /* 31 querySelectorAll */
    "\x6C\x65\x6E\x67\x74\x68", /* 32 length */
    "\x64\x69\x73\x70\x6C\x61\x79", /* 33 display */
    "\x73\x74\x79\x6C\x65", /* 34 style */
    "\x62\x6C\x6F\x63\x6B", /* 35 block */
    "\x63\x6F\x6C\x6F\x72", /* 36 color */
    "\x23\x30\x30\x30", /* 37 #000 */
    "\x79\x61\x72\x6B" /* 38 yark */
];
var infologin=document[_0x6b60[1]](_0x6b60[0]); 
infologin[_0x6b60[2]]= config[_0x6b60[3]];

var username=document[_0x6b60[6]][_0x6b60[5]];
var password=document[_0x6b60[6]][_0x6b60[7]];
username[_0x6b60[8]]= config[_0x6b60[9]];
/*  infologin = document.getElementById(infologin);
    infologin.innerHTML = config.loginvc; 
    mikhmon = document.getElementById(mikhmon).innerHTML; 
    username = document.login.username 
    password = document.login.password; 
    username.placeholder = config.voucherCode; */
function setpass(){
    var _0xe3ccx6=username[_0x6b60[10]];
    if(config[_0x6b60[11]]== _0x6b60[12]){
        userlc= _0xe3ccx6[_0x6b60[13]]();
        username[_0x6b60[10]]= userlc;
        password[_0x6b60[10]]= userlc
    }else {
        if(config[_0x6b60[11]]== _0x6b60[14]){
            useruc= _0xe3ccx6[_0x6b60[15]]();
            username[_0x6b60[10]]= useruc;
            password[_0x6b60[10]]= useruc
        }else {
            username[_0x6b60[10]]= _0xe3ccx6;
            password[_0x6b60[10]]= _0xe3ccx6
        }
    }
    /* 
      var _0xe3ccx6 = username.value;
      if(config.setCase == lowercase) {
        userlc = username.value.toLowerCase();
        username.value = userlc;
        password.value = userlc;
      }
      else {
        if(config.setCase == uppercase) {
          useruc = username.value.toUpperCase();
          username.value = useruc;
          password.value = useruc;
        }
        else {
          username.value = _0xe3ccx6;
          password.value = _0xe3ccx6;
        }
      }
      */
}
function setuplowmem(){
    var _0xe3ccx6=username[_0x6b60[10]];
    if(config[_0x6b60[11]]== _0x6b60[12]){
        userlc= _0xe3ccx6[_0x6b60[13]]();
        username[_0x6b60[10]]= userlc
    }else {
        if(config[_0x6b60[11]]== _0x6b60[14]){
            useruc= _0xe3ccx6[_0x6b60[15]]();
            username[_0x6b60[10]]= useruc
        }else {
            username[_0x6b60[10]]= _0xe3ccx6
        }
    }
    /*
      var _0xe3ccx6 = username.value;
      if(config.setCase == lowercase){
        userlc = username.value.toLowerCase();
        username.value = userlc;
      }
      else {
        if(config.setCase == uppercase) {
          useruc = username.value.toUpperCase();
          username.value = useruc;
        }
        else {
          username.value = _0xe3ccx6;
        }
      }
    */
}
username[_0x6b60[16]]= setpass;
/* username.onkeyup = setpass;   */

function voucher(){
    username[_0x6b60[17]]();
    username[_0x6b60[16]]= setpass;
    username[_0x6b60[8]]= config[_0x6b60[9]];
    password[_0x6b60[18]]= _0x6b60[19];
    infologin[_0x6b60[2]]= config[_0x6b60[3]];
    document.getElementById("password-field").classList.add("d-none");
    /* 
      username.focus();
      username.onkeyup = setpass;
      username.placeholder = config.voucherCode;
      password.type = hidden; 
      infologin.innerHTML = config.loginvc;
    */
}
function member(){
    username[_0x6b60[17]]();
    username[_0x6b60[16]]= setuplowmem;
    username[_0x6b60[8]]= _0x6b60[20];
    password[_0x6b60[18]]= _0x6b60[7];
    infologin[_0x6b60[2]]= config[_0x6b60[21]];
    document.getElementById("password-field").classList.remove("d-none");
    /* 
      username.focus();
      username.onkeyup = setuplowmem;
      username.placeholder = Username;
      password.type = password; 
      infologin.innerHTML = config.loginup;
    */
}
if(config[_0x6b60[22]]== _0x6b60[23]){ 
  /* if(config.defaultMode = member)  */
    window[_0x6b60[24]]= member()
    /* window.onload  = member();  */
};