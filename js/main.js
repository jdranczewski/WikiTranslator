var debug = undefined;
var user_agent = "Example/1.0";
var all_langs = [["ace","Acèh","Acehnese",9061],["af","Afrikaans","Afrikaans",82777],["ak","Akan","Akan",613],["als","Alemannisch","Alemannic",26028],["an","aragonés","Aragonese",35503],["roa-rup","armãneashti","Aromanian",1224],["frp","arpetan","Franco-Provençal",3351],["ast","asturianu","Asturian",99653],["atj","Atikamekw","Atikamekw",1006],["gn","Avañe\'ẽ","Guarani",3693],["ay","Aymar aru","Aymara",4619],["az","azərbaycanca","Azerbaijani",148321],["bjn","Bahasa Banjar","Banjar",2496],["gor","Bahasa Hulontalo","Gorontalo",2047],["id","Bahasa Indonesia","Indonesian",484844],["ms","Bahasa Melayu","Malay",327837],["bm","bamanankan","Bambara",653],["map-bms","Basa Banyumasan","Banyumasan",13361],["su","Basa Sunda","Sundanese",50071],["bcl","Bikol Central","Central Bicolano",9144],["bi","Bislama","Bislama",1213],["bar","Boarisch","Bavarian",28428],["bs","bosanski","Bosnian",80287],["br","brezhoneg","Breton",66990],["zh-min-nan","Bân-lâm-gú","Min Nan",228275],["ca","català","Catalan",617473],["ceb","Cebuano","Cebuano",5379094],["ch","Chamoru","Chamorro",476],["cbk-zam","Chavacano de Zamboanga","Chavacano",3011],["ny","Chi-Chewa","Chichewa",540],["sn","chiShona","Shona",4638],["tum","chiTumbuka","Tumbuka",575],["cho","Choctaw","Choctaw",6],["co","corsu","Corsican",5667],["cy","Cymraeg","Welsh",105491],["da","dansk","Danish",251077],["se","davvisámegiella","Northern Sami",7534],["pdc","Deitsch","Pennsylvania German",1869],["de","Deutsch","German",2323203],["nv","Diné bizaad","Navajo",8236],["dsb","dolnoserbski","Lower Sorbian",3240],["na","Dorerin Naoero","Nauruan",1307],["mh","Ebon","Marshallese",4],["et","eesti","Estonian",198050],["eml","emiliàn e rumagnòl","Emilian-Romagnol",12076],["en","English","English",5892831],["es","español","Spanish",1532965],["eo","Esperanto","Esperanto",261307],["ext","estremeñu","Extremaduran",3072],["eu","euskara","Basque",336901],["ee","eʋegbe","Ewe",354],["hif","Fiji Hindi","Fiji Hindi",9764],["fr","français","French",2124161],["fy","Frysk","West Frisian",42412],["ff","Fulfulde","Fula",229],["fur","furlan","Friulian",3329],["fo","føroyskt","Faroese",13125],["ga","Gaeilge","Irish",51229],["gv","Gaelg","Manx",4980],["sm","Gagana Samoa","Samoan",815],["gag","Gagauz","Gagauz",2728],["gl","galego","Galician",157598],["gd","Gàidhlig","Scottish Gaelic",14828],["ki","Gĩkũyũ","Kikuyu",1361],["ha","Hausa","Hausa",3685],["haw","Hawaiʻi","Hawaiian",3671],["ho","Hiri Motu","Hiri Motu",3],["hsb","hornjoserbsce","Upper Sorbian",13426],["hr","hrvatski","Croatian",207684],["io","Ido","Ido",28517],["ig","Igbo","Igbo",1414],["ilo","Ilokano","Ilocano",12539],["ia","interlingua","Interlingua",21829],["ie","Interlingue","Interlingue",4561],["xh","isiXhosa","Xhosa",800],["zu","isiZulu","Zulu",1090],["it","italiano","Italian",1541498],["ik","Iñupiak","Inupiak",269],["jv","Jawa","Javanese",56342],["kbp","Kabɩyɛ","Kabiye",1597],["kl","kalaallisut","Greenlandic",1670],["kr","Kanuri","Kanuri",0],["pam","Kapampangan","Kapampangan",8629],["csb","kaszëbsczi","Kashubian",5292],["kw","kernowek","Cornish",3891],["rw","Kinyarwanda","Kinyarwanda",1821],["rn","Kirundi","Kirundi",614],["sw","Kiswahili","Swahili",51962],["kg","Kongo","Kongo",1196],["ht","Kreyòl ayisyen","Haitian",56258],["ku","kurdî","Kurdish (Kurmanji)",26123],["kj","Kwanyama","Kuanyama",4],["jbo","la .lojban.","Lojban",1245],["lad","Ladino","Ladino",3873],["ltg","latgaļu","Latgalian",827],["la","Latina","Latin",130856],["lv","latviešu","Latvian",97417],["to","lea faka-Tonga","Tongan",1698],["lt","lietuvių","Lithuanian",196038],["lij","Ligure","Ligurian",3574],["li","Limburgs","Limburgish",12418],["lfn","Lingua Franca Nova","Lingua Franca Nova",3482],["ln","lingála","Lingala",3121],["olo","Livvinkarjala","Livvi-Karelian",3064],["lg","Luganda","Luganda",1176],["lmo","lumbaart","Lombard",38680],["lb","Lëtzebuergesch","Luxembourgish",56813],["hu","magyar","Hungarian",454268],["mg","Malagasy","Malagasy",91800],["mt","Malti","Maltese",3408],["min","Minangkabau","Minangkabau",222843],["mwl","Mirandés","Mirandese",3764],["mus","Mvskoke","Muscogee",1],["cdo","Mìng-dĕ̤ng-ngṳ̄","Min Dong",14628],["mi","Māori","Maori",7150],["fj","Na Vosa Vakaviti","Fijian",432],["nap","Napulitano","Neapolitan",14532],["nl","Nederlands","Dutch",1972406],["nds-nl","Nedersaksies","Dutch Low Saxon",6839],["frr","Nordfriisk","North Frisian",9099],["pih","Norfuk / Pitkern","Norfolk",774],["no","norsk","Norwegian (Bokmål)",512840],["nn","norsk nynorsk","Norwegian (Nynorsk)",149249],["nrm","Nouormand","Norman",4231],["nov","Novial","Novial",1663],["nah","Nāhuatl","Nahuatl",6952],["cr","Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ","Cree",102],["oc","occitan","Occitan",85821],["om","Oromoo","Oromo",791],["ng","Oshiwambo","Ndonga",8],["hz","Otsiherero","Herero",0],["uz","oʻzbekcha/ўзбекча","Uzbek",131275],["pag","Pangasinan","Pangasinan",2525],["pap","Papiamentu","Papiamentu",1913],["jam","Patois","Jamaican Patois",1637],["pcd","Picard","Picard",4509],["pms","Piemontèis","Piedmontese",64490],["nds","Plattdüütsch","Low Saxon",51902],["pl","polski","Polish",1346612],["pt","português","Portuguese",1010408],["pfl","Pälzisch","Palatinate German",2522],["aa","Qafár af","Afar",1],["kaa","Qaraqalpaqsha","Karakalpak",1872],["crh","qırımtatarca","Crimean Tatar",6588],["ty","reo tahiti","Tahitian",1202],["ksh","Ripoarisch","Ripuarian",2856],["rmy","romani čhib","Romani",664],["ro","română","Romanian",399080],["rm","rumantsch","Romansh",3604],["qu","Runa Simi","Quechua",21390],["sc","sardu","Sardinian",6013],["sco","Scots","Scots",54349],["stq","Seeltersk","Saterland Frisian",4002],["st","Sesotho","Sesotho",551],["nso","Sesotho sa Leboa","Northern Sotho",8153],["tn","Setswana","Tswana",651],["sq","shqip","Albanian",77376],["scn","sicilianu","Sicilian",26055],["simple","Simple English","Simple English",147148],["ss","SiSwati","Swati",470],["sk","slovenčina","Slovak",230385],["sl","slovenščina","Slovenian",164923],["so","Soomaaliga","Somali",5512],["srn","Sranantongo","Sranan",1073],["sh","srpskohrvatski / српскохрватски","Serbo-Croatian",449630],["fi","suomi","Finnish",462565],["sv","svenska","Swedish",3748139],["sg","Sängö","Sango",260],["tl","Tagalog","Tagalog",75511],["kab","Taqbaylit","Kabyle",3818],["roa-tara","tarandíne","Tarantino",9246],["tet","tetun","Tetum",1462],["din","Thuɔŋjäŋ","Dinka",94],["vi","Tiếng Việt","Vietnamese",1224324],["tpi","Tok Pisin","Tok Pisin",1500],["chy","Tsetsêhestâhese","Cheyenne",617],["ve","Tshivenda","Venda",268],["tw","Twi","Twi",669],["tk","Türkmençe","Turkmen",5559],["tr","Türkçe","Turkish",330954],["za","Vahcuengh","Zhuang",1928],["vep","vepsän kel’","Vepsian",6003],["vo","Volapük","Volapük",122782],["vec","vèneto","Venetian",12257],["fiu-vro","Võro","Võro",5504],["wa","walon","Walloon",15039],["vls","West-Vlams","West Flemish",6866],["war","Winaray","Waray",1263648],["wo","Wolof","Wolof",1265],["ts","Xitsonga","Tsonga",594],["yo","Yorùbá","Yoruba",31888],["diq","Zazaki","Zazaki",10841],["zea","Zeêuws","Zeelandic",4645],["ang","Ænglisc","Anglo-Saxon",3105],["is","íslenska","Icelandic",47772],["cs","čeština","Czech",431535],["szl","ślůnski","Silesian",8429],["bat-smg","žemaitėška","Samogitian",16751],["el","Ελληνικά","Greek",165284],["pnt","Ποντιακά","Pontic",466],["av","авар","Avar",2294],["ady","адыгабзэ","Adyghe",410],["kbd","Адыгэбзэ","Kabardian",1583],["ab","Аҧсшәа","Abkhazian",3887],["ba","башҡортса","Bashkir",49256],["be","беларуская","Belarusian",173597],["be-tarask","беларуская (тарашкевіца)\u200e","Belarusian (Taraškievica)",67559],["bxr","буряад","Buryat",2160],["bg","български","Bulgarian",253652],["inh","ГӀалгӀай","Ingush",1041],["os","Ирон","Ossetian",11645],["kv","коми","Komi",5320],["krc","къарачай-малкъар","Karachay-Balkar",2029],["ky","Кыргызча","Kirghiz",79421],["mrj","кырык мары","Hill Mari",10267],["lbe","лакку","Lak",1219],["lez","лезги","Lezgian",3972],["mk","македонски","Macedonian",101316],["mdf","мокшень","Moksha",1186],["mn","монгол","Mongolian",18703],["ce","нохчийн","Chechen",216082],["mhr","олык марий","Meadow Mari",10046],["koi","Перем Коми","Komi-Permyak",3450],["rue","русиньскый","Rusyn",7155],["ru","русский","Russian",1557003],["sah","саха тыла","Sakha",12038],["cu","словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ","Old Church Slavonic",676],["sr","српски / srpski","Serbian",622006],["tt","татарча/tatarça","Tatar",86190],["tg","тоҷикӣ","Tajik",97874],["tyv","тыва дыл","Tuvan",1815],["udm","удмурт","Udmurt",4695],["uk","українська","Ukrainian",921427],["xal","хальмг","Kalmyk",2083],["cv","Чӑвашла","Chuvash",42014],["myv","эрзянь","Erzya",5692],["kk","қазақша","Kazakh",224703],["hyw","Արեւմտահայերէն","Western Armenian",0],["hy","հայերեն","Armenian",253550],["yi","ייִדיש","Yiddish",14777],["he","עברית","Hebrew",246713],["ug","ئۇيغۇرچە / Uyghurche","Uyghur",4137],["ur","اردو","Urdu",147388],["ar","العربية","Arabic",903966],["azb","تۆرکجه","Southern Azerbaijani",151950],["sd","سنڌي","Sindhi",11785],["fa","فارسی","Persian",683866],["lrc","لۊری شومالی","Northern Luri",5401],["mzn","مازِرونی","Mazandarani",13095],["arz","مصرى","Egyptian Arabic",20562],["pnb","پنجابی","Western Punjabi",47950],["ps","پښتو","Pashto",10345],["ckb","کوردی","Kurdish (Sorani)",24039],["glk","گیلکی","Gilaki",5680],["arc","ܐܪܡܝܐ","Aramaic",1636],["dv","ދިވެހިބަސް","Divehi",2994],["ks","कॉशुर / کٲشُر","Kashmiri",325],["gom","गोंयची कोंकणी / Gõychi Konknni","Konkani",3719],["dty","डोटेली","Doteli",3063],["new","नेपाल भाषा","Newar",72232],["ne","नेपाली","Nepali",32233],["pi","पालि","Pali",2536],["bh","भोजपुरी","Bhojpuri",6863],["mr","मराठी","Marathi",53827],["mai","मैथिली","Maithili",13383],["sa","संस्कृतम्","Sanskrit",11395],["hi","हिन्दी","Hindi",132144],["as","অসমীয়া","Assamese",5659],["bn","বাংলা","Bengali",70112],["bpy","বিষ্ণুপ্রিয়া মণিপুরী","Bishnupriya Manipuri",25086],["pa","ਪੰਜਾਬੀ","Eastern Punjabi",31496],["gu","ગુજરાતી","Gujarati",28531],["or","ଓଡ଼ିଆ","Odia",15022],["ta","தமிழ்","Tamil",122811],["te","తెలుగు","Telugu",70926],["kn","ಕನ್ನಡ","Kannada",24842],["tcy","ತುಳು","Tulu",1062],["ml","മലയാളം","Malayalam",64210],["si","සිංහල","Sinhalese",15218],["th","ไทย","Thai",132333],["lo","ລາວ","Lao",3429],["dz","ཇོང་ཁ","Dzongkha",218],["bo","བོད་ཡིག","Tibetan",5855],["my","မြန်မာဘာသာ","Burmese",44508],["shn","ၽႃႇသႃႇတႆး","Shan",0],["xmf","მარგალური","Mingrelian",13066],["ka","ქართული","Georgian",130471],["ti","ትግርኛ","Tigrinya",169],["am","አማርኛ","Amharic",14774],["iu","ᐃᓄᒃᑎᑐᑦ/inuktitut","Inuktitut",420],["km","ភាសាខ្មែរ","Khmer",7649],["bug","ᨅᨔ ᨕᨘᨁᨗ","Buginese",14128],["sat","ᱥᱟᱱᱛᱟᱲᱤ","Santali",901],["zh","中文","Chinese",1066775],["wuu","吴语","Wu",20648],["hak","客家語/Hak-kâ-ngî","Hakka",8972],["zh-classical","文言","Classical Chinese",9722],["ja","日本語","Japanese",1160105],["zh-yue","粵語","Cantonese",73561],["gan","贛語","Gan",6423],["ii","ꆇꉙ","Nuosu",3],["chr","ᏣᎳᎩ","Cherokee",827],["ko","한국어","Korean",462371],["got","𐌲𐌿𐍄𐌹𐍃𐌺","Gothic",597],]

// Container of all data for a particular article
class Article {
    constructor() {
        this.lang = undefined;
        this.title = undefined;
        this.section = undefined;
        this.hatnotes = [];
        this.langlinks = undefined;
        this.text = undefined;
        this.url = undefined;
        this.onPropsReady = undefined;
        this.onTextReady = undefined;
    }

    // Used to change the article data stored in the object
    setTitle(title) {
        if (this.title == title) {
            if (this.onTextReady !== undefined) this.onTextReady(this);
            return;
        }
        this.title = title;
        this.section = title.split("#")[1];
        this.url = "https://" + this.lang + ".wikipedia.org/wiki/" + title
        var xhr = new XMLHttpRequest();
        var url = "https://";
        url += this.lang;
        url += ".wikipedia.org/api/rest_v1/page/metadata/";
        url += title;
        xhr.open("GET", url, true);
        // 'this' changes meaning inside a function()
        var this_class = this;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this_class.parseMetadata(this.responseText);
                this_class.getText();
            }
        }
        xhr.setRequestHeader("Api-User-Agent", user_agent);
        xhr.send();
    }

    // Sets the object parameters provided through the metadata API request
    parseMetadata(data) {
        // Debug
        data = JSON.parse(data);
        debug = data;
        console.log(data);

        // Set article details and fire callback once done
        this.hatnotes = []
        if (data["hatnotes"] !== undefined) {
            for (var i=0; i<data["hatnotes"].length; i++) {
                if (data["hatnotes"][i]["section"] == 0) {
                    this.hatnotes.push(data["hatnotes"][i]["html"]);
                }
            }
        };
        this.langlinks = data["language_links"];
        this.text = undefined;
        if (this.onPropsReady !== undefined) this.onPropsReady(this);
    }

    // Gets the summary text for the article
    getText() {
        var xhr = new XMLHttpRequest();
        var url = "https://";
        url += this.lang;
        url += ".wikipedia.org/api/rest_v1/page/summary/";
        url += this.title;
        xhr.open("GET", url, true);
        // 'this' changes meaning inside a function()
        var this_class = this;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this_class.parseText(this.responseText);
            }
        }
        xhr.setRequestHeader("Api-User-Agent", user_agent);
        xhr.send();
    }

    // Parses the summary text. If article is a disambiguation, requests
    // full text, stripped of images etc.
    parseText(data) {
        // Debug
        data = JSON.parse(data);
        debug = data;
        console.log(data);

        this.title = data["title"];
        if (data["type"] == "disambiguation") {
            this.hatnotes.unshift("This is a disambiguation page. Click one of the links to go to the desired word.")
            this.getFullText();
        } else {
            this.text = data["extract_html"];
            if (this.onTextReady !== undefined) this.onTextReady(this);
        }
    }

    // Gets full article text
    getFullText() {
        var xhr = new XMLHttpRequest();
        var url = "https://";
        url += this.lang;
        url += ".wikipedia.org/w/api.php?";
        url += "origin=*&";
        url += "action=parse&";
        url += "format=json&";
        url += "prop=text&";
        url += "redirects=1&";
        url += "disableeditsection=1&";
        url += "mobileformat=1&";
        url += "noimages=1&";
        url += "page=" + this.title;
        xhr.open("GET", url, true);
        // 'this' changes meaning inside a function()
        var this_class = this;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                console.log(data);
                this_class.text = data["parse"]["text"]["*"];
                if (this_class.onTextReady !== undefined) this_class.onTextReady(this_class);
            }
        }
        xhr.setRequestHeader("Api-User-Agent", "Example/1.0");
        xhr.send();
    }

    findTranslation(a) {
        var tr_title = undefined;
        var found = false;
        for (var i=0; i<a.langlinks.length; i++) {
            if (a.langlinks[i].lang == this.lang) {
                this.setTitle(a.langlinks[i]["titles"]["canonical"]);
                found = true;
                break;
            }
        }
        if (!found) {
            this.title = "No translation";
            this.section = undefined;
            this.hatnotes = [];
            this.langlinks = undefined;
            this.text = "";
            this.url = undefined;
            if (this.onTextReady !== undefined) this.onTextReady(this);
        }
    }
}

var og_el = document.querySelector('#og')
function update_og(a) {
    og_el.querySelector(".title").value = a.title;
    og_el.querySelector(".hatnotes").innerHTML = "";
    for (var i=0; i<a.hatnotes.length; i++) {
        hn = document.createElement("div");
        hn.innerHTML = a.hatnotes[i];
        hn.className = "hatnote"
        og_el.querySelector(".hatnotes").appendChild(hn);
    }
    og_el.querySelector(".text").innerHTML = a.text;
    og_el.querySelectorAll(".hatnotes a, .text a").forEach(function(link) {
        var href = link.href.split("/");
        href = href[href.length-1];
        link.href = "#from=" + og.lang + "&to=" + tr.lang +
                    "&title=" + href;
    });
    og_el.querySelector(".link").href = a.url;
    tr.findTranslation(og);
}

var tr_el = document.querySelector('#tr')
function update_tr(a) {
    tr_el.querySelector(".title").innerHTML = a.title;
    tr_el.querySelector(".hatnotes").innerHTML = "";
    for (var i=0; i<a.hatnotes.length; i++) {
        hn = document.createElement("div");
        hn.innerHTML = a.hatnotes[i];
        hn.className = "hatnote"
        tr_el.querySelector(".hatnotes").appendChild(hn);
    }
    tr_el.querySelector(".text").innerHTML = a.text;
    tr_el.querySelectorAll(".hatnotes a, .text a").forEach(function(link) {
        var href = link.href.split("/");
        href = href[href.length-1];
        link.href = "#from=" + tr.lang + "&to=" + og.lang +
                    "&title=" + href;
    });
    tr_el.querySelector(".link").href = a.url;
}

function reset() {
    og_el.querySelector(".hatnotes").innerHTML = "";
    og_el.querySelector(".text").innerHTML = "";
    og_el.querySelector(".link").href = "";
    tr_el.querySelector(".title").innerHTML = "";
    tr_el.querySelector(".hatnotes").innerHTML = "";
    tr_el.querySelector(".text").innerHTML = "";
    tr_el.querySelector(".link").href = "";
}

function translate() {
    reset();
    og.setTitle(document.getElementById("og-title").value);
}

function hashChanged() {
    var hash_data = new URL(window.location.href.replace("#", "?"));
    var title = hash_data.searchParams.get("title");
    var from = hash_data.searchParams.get("from");
    var to = hash_data.searchParams.get("to")
    if (from != null) og.lang = from;
    if (to != null) tr.lang = to;
    if (title != null) {
        document.querySelector("#og-title").value = title;
        translate();
    }
}
window.onhashchange = hashChanged;

function invert() {
    window.location.hash = "from=" + tr.lang +
                           "&to=" + og.lang +
                           "&title=" + document.querySelector("#tr-title").innerText;
}

og = new Article();
og.lang = "en";
og.onTextReady = update_og;

tr = new Article();
tr.lang = "pl";
tr.onTextReady = update_tr;

hashChanged();

document.getElementById("og-submit").onclick = function() {
    window.location.hash = "from=" + og.lang +
                           "&to=" + tr.lang +
                           "&title=" + document.querySelector("#og-title").value;
};
document.querySelector("#invert").onclick = invert;

var selector_html = ""
for (var i=0; i<all_langs.length; i++) {
    selector_html += "<option value=\"" + i + "\">" + all_langs[i][1] + " (" + all_langs[i][2] + ")</option>"
}
document.querySelector("#lang-selector").innerHTML = selector_html;
