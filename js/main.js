var debug = undefined;
var user_agent = "Example/1.0";
var all_langs = [["ace","Acèh","Acehnese",9100],["af","Afrikaans","Afrikaans",83000],["ak","Akan","Akan",610],["als","Alemannisch","Alemannic",26000],["an","aragonés","Aragonese",36000],["roa-rup","armãneashti","Aromanian",1200],["frp","arpetan","Franco-Provençal",3400],["ast","asturianu","Asturian",100000],["atj","Atikamekw","Atikamekw",1000],["gn","Avañe\'ẽ","Guarani",3700],["ay","Aymar aru","Aymara",4600],["az","azərbaycanca","Azerbaijani",150000],["bjn","Bahasa Banjar","Banjar",2500],["gor","Bahasa Hulontalo","Gorontalo",2000],["id","Bahasa Indonesia","Indonesian",480000],["ms","Bahasa Melayu","Malay",330000],["bm","bamanankan","Bambara",650],["map-bms","Basa Banyumasan","Banyumasan",13000],["su","Basa Sunda","Sundanese",50000],["bcl","Bikol Central","Central Bicolano",9100],["bi","Bislama","Bislama",1200],["bar","Boarisch","Bavarian",28000],["bs","bosanski","Bosnian",80000],["br","brezhoneg","Breton",67000],["zh-min-nan","Bân-lâm-gú","Min Nan",230000],["ca","català","Catalan",620000],["ceb","Cebuano","Cebuano",5400000],["ch","Chamoru","Chamorro",480],["cbk-zam","Chavacano de Zamboanga","Chavacano",3000],["ny","Chi-Chewa","Chichewa",540],["sn","chiShona","Shona",4600],["tum","chiTumbuka","Tumbuka",580],["cho","Choctaw","Choctaw",6],["co","corsu","Corsican",5700],["cy","Cymraeg","Welsh",110000],["da","dansk","Danish",250000],["se","davvisámegiella","Northern Sami",7500],["pdc","Deitsch","Pennsylvania German",1900],["de","Deutsch","German",2300000],["nv","Diné bizaad","Navajo",8200],["dsb","dolnoserbski","Lower Sorbian",3200],["na","Dorerin Naoero","Nauruan",1300],["mh","Ebon","Marshallese",4],["et","eesti","Estonian",200000],["eml","emiliàn e rumagnòl","Emilian-Romagnol",12000],["en","English","English",5900000],["es","español","Spanish",1500000],["eo","Esperanto","Esperanto",260000],["ext","estremeñu","Extremaduran",3100],["eu","euskara","Basque",340000],["ee","eʋegbe","Ewe",350],["hif","Fiji Hindi","Fiji Hindi",9800],["fr","français","French",2100000],["fy","Frysk","West Frisian",42000],["ff","Fulfulde","Fula",230],["fur","furlan","Friulian",3300],["fo","føroyskt","Faroese",13000],["ga","Gaeilge","Irish",51000],["gv","Gaelg","Manx",5000],["sm","Gagana Samoa","Samoan",820],["gag","Gagauz","Gagauz",2700],["gl","galego","Galician",160000],["gd","Gàidhlig","Scottish Gaelic",15000],["ki","Gĩkũyũ","Kikuyu",1400],["ha","Hausa","Hausa",3700],["haw","Hawaiʻi","Hawaiian",3700],["ho","Hiri Motu","Hiri Motu",3],["hsb","hornjoserbsce","Upper Sorbian",13000],["hr","hrvatski","Croatian",210000],["io","Ido","Ido",29000],["ig","Igbo","Igbo",1400],["ilo","Ilokano","Ilocano",13000],["ia","interlingua","Interlingua",22000],["ie","Interlingue","Interlingue",4600],["xh","isiXhosa","Xhosa",800],["zu","isiZulu","Zulu",1100],["it","italiano","Italian",1500000],["ik","Iñupiak","Inupiak",270],["jv","Jawa","Javanese",56000],["kbp","Kabɩyɛ","Kabiye",1600],["kl","kalaallisut","Greenlandic",1700],["kr","Kanuri","Kanuri",0],["pam","Kapampangan","Kapampangan",8600],["csb","kaszëbsczi","Kashubian",5300],["kw","kernowek","Cornish",3900],["rw","Kinyarwanda","Kinyarwanda",1800],["rn","Kirundi","Kirundi",610],["sw","Kiswahili","Swahili",52000],["kg","Kongo","Kongo",1200],["ht","Kreyòl ayisyen","Haitian",56000],["ku","kurdî","Kurdish (Kurmanji)",26000],["kj","Kwanyama","Kuanyama",4],["jbo","la .lojban.","Lojban",1200],["lad","Ladino","Ladino",3900],["ltg","latgaļu","Latgalian",830],["la","Latina","Latin",130000],["lv","latviešu","Latvian",97000],["to","lea faka-Tonga","Tongan",1700],["lt","lietuvių","Lithuanian",200000],["lij","Ligure","Ligurian",3600],["li","Limburgs","Limburgish",12000],["lfn","Lingua Franca Nova","Lingua Franca Nova",3500],["ln","lingála","Lingala",3100],["olo","Livvinkarjala","Livvi-Karelian",3100],["lg","Luganda","Luganda",1200],["lmo","lumbaart","Lombard",39000],["lb","Lëtzebuergesch","Luxembourgish",57000],["hu","magyar","Hungarian",450000],["mg","Malagasy","Malagasy",92000],["mt","Malti","Maltese",3400],["min","Minangkabau","Minangkabau",220000],["mwl","Mirandés","Mirandese",3800],["mus","Mvskoke","Muscogee",1],["cdo","Mìng-dĕ̤ng-ngṳ̄","Min Dong",15000],["mi","Māori","Maori",7200],["fj","Na Vosa Vakaviti","Fijian",430],["nap","Napulitano","Neapolitan",15000],["nl","Nederlands","Dutch",2000000],["nds-nl","Nedersaksies","Dutch Low Saxon",6800],["frr","Nordfriisk","North Frisian",9100],["pih","Norfuk / Pitkern","Norfolk",770],["no","norsk","Norwegian (Bokmål)",510000],["nn","norsk nynorsk","Norwegian (Nynorsk)",150000],["nrm","Nouormand","Norman",4200],["nov","Novial","Novial",1700],["nah","Nāhuatl","Nahuatl",7000],["cr","Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ","Cree",100],["oc","occitan","Occitan",86000],["om","Oromoo","Oromo",790],["ng","Oshiwambo","Ndonga",8],["hz","Otsiherero","Herero",0],["uz","oʻzbekcha/ўзбекча","Uzbek",130000],["pag","Pangasinan","Pangasinan",2500],["pap","Papiamentu","Papiamentu",1900],["jam","Patois","Jamaican Patois",1600],["pcd","Picard","Picard",4500],["pms","Piemontèis","Piedmontese",64000],["nds","Plattdüütsch","Low Saxon",52000],["pl","polski","Polish",1300000],["pt","português","Portuguese",1000000],["pfl","Pälzisch","Palatinate German",2500],["aa","Qafár af","Afar",1],["kaa","Qaraqalpaqsha","Karakalpak",1900],["crh","qırımtatarca","Crimean Tatar",6600],["ty","reo tahiti","Tahitian",1200],["ksh","Ripoarisch","Ripuarian",2900],["rmy","romani čhib","Romani",660],["ro","română","Romanian",400000],["rm","rumantsch","Romansh",3600],["qu","Runa Simi","Quechua",21000],["sc","sardu","Sardinian",6000],["sco","Scots","Scots",54000],["stq","Seeltersk","Saterland Frisian",4000],["st","Sesotho","Sesotho",550],["nso","Sesotho sa Leboa","Northern Sotho",8200],["tn","Setswana","Tswana",650],["sq","shqip","Albanian",77000],["scn","sicilianu","Sicilian",26000],["simple","Simple English","Simple English",150000],["ss","SiSwati","Swati",470],["sk","slovenčina","Slovak",230000],["sl","slovenščina","Slovenian",160000],["so","Soomaaliga","Somali",5500],["srn","Sranantongo","Sranan",1100],["sh","srpskohrvatski / српскохрватски","Serbo-Croatian",450000],["fi","suomi","Finnish",460000],["sv","svenska","Swedish",3700000],["sg","Sängö","Sango",260],["tl","Tagalog","Tagalog",76000],["kab","Taqbaylit","Kabyle",3800],["roa-tara","tarandíne","Tarantino",9200],["tet","tetun","Tetum",1500],["din","Thuɔŋjäŋ","Dinka",94],["vi","Tiếng Việt","Vietnamese",1200000],["tpi","Tok Pisin","Tok Pisin",1500],["chy","Tsetsêhestâhese","Cheyenne",620],["ve","Tshivenda","Venda",270],["tw","Twi","Twi",670],["tk","Türkmençe","Turkmen",5600],["tr","Türkçe","Turkish",330000],["za","Vahcuengh","Zhuang",1900],["vep","vepsän kel’","Vepsian",6000],["vo","Volapük","Volapük",120000],["vec","vèneto","Venetian",12000],["fiu-vro","Võro","Võro",5500],["wa","walon","Walloon",15000],["vls","West-Vlams","West Flemish",6900],["war","Winaray","Waray",1300000],["wo","Wolof","Wolof",1300],["ts","Xitsonga","Tsonga",590],["yo","Yorùbá","Yoruba",32000],["diq","Zazaki","Zazaki",11000],["zea","Zeêuws","Zeelandic",4600],["ang","Ænglisc","Anglo-Saxon",3100],["is","íslenska","Icelandic",48000],["cs","čeština","Czech",430000],["szl","ślůnski","Silesian",8400],["bat-smg","žemaitėška","Samogitian",17000],["el","Ελληνικά","Greek",170000],["pnt","Ποντιακά","Pontic",470],["av","авар","Avar",2300],["ady","адыгабзэ","Adyghe",410],["kbd","Адыгэбзэ","Kabardian",1600],["ab","Аҧсшәа","Abkhazian",3900],["ba","башҡортса","Bashkir",49000],["be","беларуская","Belarusian",170000],["be-tarask","беларуская (тарашкевіца)\u200e","Belarusian (Taraškievica)",68000],["bxr","буряад","Buryat",2200],["bg","български","Bulgarian",250000],["inh","ГӀалгӀай","Ingush",1000],["os","Ирон","Ossetian",12000],["kv","коми","Komi",5300],["krc","къарачай-малкъар","Karachay-Balkar",2000],["ky","Кыргызча","Kirghiz",79000],["mrj","кырык мары","Hill Mari",10000],["lbe","лакку","Lak",1200],["lez","лезги","Lezgian",4000],["mk","македонски","Macedonian",100000],["mdf","мокшень","Moksha",1200],["mn","монгол","Mongolian",19000],["ce","нохчийн","Chechen",220000],["mhr","олык марий","Meadow Mari",10000],["koi","Перем Коми","Komi-Permyak",3400],["rue","русиньскый","Rusyn",7200],["ru","русский","Russian",1600000],["sah","саха тыла","Sakha",12000],["cu","словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ","Old Church Slavonic",680],["sr","српски / srpski","Serbian",620000],["tt","татарча/tatarça","Tatar",86000],["tg","тоҷикӣ","Tajik",98000],["tyv","тыва дыл","Tuvan",1800],["udm","удмурт","Udmurt",4700],["uk","українська","Ukrainian",920000],["xal","хальмг","Kalmyk",2100],["cv","Чӑвашла","Chuvash",42000],["myv","эрзянь","Erzya",5700],["kk","қазақша","Kazakh",220000],["hyw","Արեւմտահայերէն","Western Armenian",0],["hy","հայերեն","Armenian",250000],["yi","ייִדיש","Yiddish",15000],["he","עברית","Hebrew",250000],["ug","ئۇيغۇرچە / Uyghurche","Uyghur",4100],["ur","اردو","Urdu",150000],["ar","العربية","Arabic",900000],["azb","تۆرکجه","Southern Azerbaijani",150000],["sd","سنڌي","Sindhi",12000],["fa","فارسی","Persian",680000],["lrc","لۊری شومالی","Northern Luri",5400],["mzn","مازِرونی","Mazandarani",13000],["arz","مصرى","Egyptian Arabic",21000],["pnb","پنجابی","Western Punjabi",48000],["ps","پښتو","Pashto",10000],["ckb","کوردی","Kurdish (Sorani)",24000],["glk","گیلکی","Gilaki",5700],["arc","ܐܪܡܝܐ","Aramaic",1600],["dv","ދިވެހިބަސް","Divehi",3000],["ks","कॉशुर / کٲشُر","Kashmiri",320],["gom","गोंयची कोंकणी / Gõychi Konknni","Konkani",3700],["dty","डोटेली","Doteli",3100],["new","नेपाल भाषा","Newar",72000],["ne","नेपाली","Nepali",32000],["pi","पालि","Pali",2500],["bh","भोजपुरी","Bhojpuri",6900],["mr","मराठी","Marathi",54000],["mai","मैथिली","Maithili",13000],["sa","संस्कृतम्","Sanskrit",11000],["hi","हिन्दी","Hindi",130000],["as","অসমীয়া","Assamese",5700],["bn","বাংলা","Bengali",70000],["bpy","বিষ্ণুপ্রিয়া মণিপুরী","Bishnupriya Manipuri",25000],["pa","ਪੰਜਾਬੀ","Eastern Punjabi",31000],["gu","ગુજરાતી","Gujarati",29000],["or","ଓଡ଼ିଆ","Odia",15000],["ta","தமிழ்","Tamil",120000],["te","తెలుగు","Telugu",71000],["kn","ಕನ್ನಡ","Kannada",25000],["tcy","ತುಳು","Tulu",1100],["ml","മലയാളം","Malayalam",64000],["si","සිංහල","Sinhalese",15000],["th","ไทย","Thai",130000],["lo","ລາວ","Lao",3400],["dz","ཇོང་ཁ","Dzongkha",220],["bo","བོད་ཡིག","Tibetan",5900],["my","မြန်မာဘာသာ","Burmese",45000],["shn","ၽႃႇသႃႇတႆး","Shan",0],["xmf","მარგალური","Mingrelian",13000],["ka","ქართული","Georgian",130000],["ti","ትግርኛ","Tigrinya",170],["am","አማርኛ","Amharic",15000],["iu","ᐃᓄᒃᑎᑐᑦ/inuktitut","Inuktitut",420],["km","ភាសាខ្មែរ","Khmer",7600],["bug","ᨅᨔ ᨕᨘᨁᨗ","Buginese",14000],["sat","ᱥᱟᱱᱛᱟᱲᱤ","Santali",900],["zh","中文","Chinese",1100000],["wuu","吴语","Wu",21000],["hak","客家語/Hak-kâ-ngî","Hakka",9000],["zh-classical","文言","Classical Chinese",9700],["ja","日本語","Japanese",1200000],["zh-yue","粵語","Cantonese",74000],["gan","贛語","Gan",6400],["ii","ꆇꉙ","Nuosu",3],["chr","ᏣᎳᎩ","Cherokee",830],["ko","한국어","Korean",460000],["got","𐌲𐌿𐍄𐌹𐍃𐌺","Gothic",600],]

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

    // Given another Article object, check if it contains a link to a page in
    // this article's language, and if so, request and ingest it
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

// Update the displayed data based on parameters of the original article
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

// Update the displayed data based on parameters of the translated article
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

// Reset the displayed data
function reset() {
    og_el.querySelector(".hatnotes").innerHTML = "";
    og_el.querySelector(".text").innerHTML = "";
    og_el.querySelector(".link").href = "";
    tr_el.querySelector(".title").innerHTML = "";
    tr_el.querySelector(".hatnotes").innerHTML = "";
    tr_el.querySelector(".text").innerHTML = "";
    tr_el.querySelector(".link").href = "";
}

// Start a translation
function translate() {
    reset();
    og.setTitle(document.getElementById("og-title").value);
}

// Handle a change of the url hash. This is the best way to initiate a translation
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

// Invert the languages
function invert() {
    window.location.hash = "from=" + tr.lang +
                           "&to=" + og.lang +
                           "&title=" + document.querySelector("#tr-title").innerText;
}

// Create two Article objects
og = new Article();
og.lang = "en";
og.onTextReady = update_og;

tr = new Article();
tr.lang = "pl";
tr.onTextReady = update_tr;

// Check if there's valid data in the hash on page load
hashChanged();

// Probably a placeholder for submiting for translation
document.getElementById("og-submit").onclick = function() {
    window.location.hash = "from=" + og.lang +
                           "&to=" + tr.lang +
                           "&title=" + document.querySelector("#og-title").value;
};
document.querySelector("#invert").onclick = invert;

// Handle language selection:

// First, populate the selector dropdown
var selector_html = ""
for (var i=0; i<all_langs.length; i++) {
    selector_html += "<option value=\"" + i + "\">" + all_langs[i][1] + " (" + all_langs[i][2] + ")</option>"
}
document.querySelector("#lang-selector").innerHTML = selector_html;
