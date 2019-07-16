var debug = undefined;
var user_agent = "Example/1.0";
var all_langs = [["ace","Acèh","Acehnese","9 100"],["af","Afrikaans","Afrikaans","83 000"],["ak","Akan","Akan","610"],["als","Alemannisch","Alemannic","26 000"],["an","aragonés","Aragonese","36 000"],["roa-rup","armãneashti","Aromanian","1 200"],["frp","arpetan","Franco-Provençal","3 400"],["ast","asturianu","Asturian","100 000"],["atj","Atikamekw","Atikamekw","1 000"],["gn","Avañe'ẽ","Guarani","3 700"],["ay","Aymar aru","Aymara","4 600"],["az","azərbaycanca","Azerbaijani","150 000"],["bjn","Bahasa Banjar","Banjar","2 500"],["gor","Bahasa Hulontalo","Gorontalo","2 000"],["id","Bahasa Indonesia","Indonesian","480 000"],["ms","Bahasa Melayu","Malay","330 000"],["bm","bamanankan","Bambara","650"],["map-bms","Basa Banyumasan","Banyumasan","13 000"],["su","Basa Sunda","Sundanese","50 000"],["bcl","Bikol Central","Central Bicolano","9 100"],["bi","Bislama","Bislama","1 200"],["bar","Boarisch","Bavarian","28 000"],["bs","bosanski","Bosnian","80 000"],["br","brezhoneg","Breton","67 000"],["zh-min-nan","Bân-lâm-gú","Min Nan","230 000"],["ca","català","Catalan","620 000"],["ceb","Cebuano","Cebuano","5 400 000"],["ch","Chamoru","Chamorro","480"],["cbk-zam","Chavacano de Zamboanga","Chavacano","3 000"],["ny","Chi-Chewa","Chichewa","540"],["sn","chiShona","Shona","4 600"],["tum","chiTumbuka","Tumbuka","580"],["cho","Choctaw","Choctaw","6"],["co","corsu","Corsican","5 700"],["cy","Cymraeg","Welsh","110 000"],["da","dansk","Danish","250 000"],["se","davvisámegiella","Northern Sami","7 500"],["pdc","Deitsch","Pennsylvania German","1 900"],["de","Deutsch","German","2 300 000"],["nv","Diné bizaad","Navajo","8 200"],["dsb","dolnoserbski","Lower Sorbian","3 200"],["na","Dorerin Naoero","Nauruan","1 300"],["mh","Ebon","Marshallese","4"],["et","eesti","Estonian","200 000"],["eml","emiliàn e rumagnòl","Emilian-Romagnol","12 000"],["en","English","English","5 900 000"],["es","español","Spanish","1 500 000"],["eo","Esperanto","Esperanto","260 000"],["ext","estremeñu","Extremaduran","3 100"],["eu","euskara","Basque","340 000"],["ee","eʋegbe","Ewe","350"],["hif","Fiji Hindi","Fiji Hindi","9 800"],["fr","français","French","2 100 000"],["fy","Frysk","West Frisian","42 000"],["ff","Fulfulde","Fula","230"],["fur","furlan","Friulian","3 300"],["fo","føroyskt","Faroese","13 000"],["ga","Gaeilge","Irish","51 000"],["gv","Gaelg","Manx","5 000"],["sm","Gagana Samoa","Samoan","820"],["gag","Gagauz","Gagauz","2 700"],["gl","galego","Galician","160 000"],["gd","Gàidhlig","Scottish Gaelic","15 000"],["ki","Gĩkũyũ","Kikuyu","1 400"],["ha","Hausa","Hausa","3 700"],["haw","Hawaiʻi","Hawaiian","3 700"],["ho","Hiri Motu","Hiri Motu","3"],["hsb","hornjoserbsce","Upper Sorbian","13 000"],["hr","hrvatski","Croatian","210 000"],["io","Ido","Ido","29 000"],["ig","Igbo","Igbo","1 400"],["ilo","Ilokano","Ilocano","13 000"],["ia","interlingua","Interlingua","22 000"],["ie","Interlingue","Interlingue","4 600"],["xh","isiXhosa","Xhosa","800"],["zu","isiZulu","Zulu","1 100"],["it","italiano","Italian","1 500 000"],["ik","Iñupiak","Inupiak","270"],["jv","Jawa","Javanese","56 000"],["kbp","Kabɩyɛ","Kabiye","1 600"],["kl","kalaallisut","Greenlandic","1 700"],["kr","Kanuri","Kanuri","0"],["pam","Kapampangan","Kapampangan","8 600"],["csb","kaszëbsczi","Kashubian","5 300"],["kw","kernowek","Cornish","3 900"],["rw","Kinyarwanda","Kinyarwanda","1 800"],["rn","Kirundi","Kirundi","610"],["sw","Kiswahili","Swahili","52 000"],["kg","Kongo","Kongo","1 200"],["ht","Kreyòl ayisyen","Haitian","56 000"],["ku","kurdî","Kurdish (Kurmanji)","26 000"],["kj","Kwanyama","Kuanyama","4"],["jbo","la .lojban.","Lojban","1 200"],["lad","Ladino","Ladino","3 900"],["ltg","latgaļu","Latgalian","830"],["la","Latina","Latin","130 000"],["lv","latviešu","Latvian","97 000"],["to","lea faka-Tonga","Tongan","1 700"],["lt","lietuvių","Lithuanian","200 000"],["lij","Ligure","Ligurian","3 600"],["li","Limburgs","Limburgish","12 000"],["lfn","Lingua Franca Nova","Lingua Franca Nova","3 500"],["ln","lingála","Lingala","3 100"],["olo","Livvinkarjala","Livvi-Karelian","3 100"],["lg","Luganda","Luganda","1 200"],["lmo","lumbaart","Lombard","39 000"],["lb","Lëtzebuergesch","Luxembourgish","57 000"],["hu","magyar","Hungarian","450 000"],["mg","Malagasy","Malagasy","92 000"],["mt","Malti","Maltese","3 400"],["min","Minangkabau","Minangkabau","220 000"],["mwl","Mirandés","Mirandese","3 800"],["mus","Mvskoke","Muscogee","1"],["cdo","Mìng-dĕ̤ng-ngṳ̄","Min Dong","15 000"],["mi","Māori","Maori","7 200"],["fj","Na Vosa Vakaviti","Fijian","430"],["nap","Napulitano","Neapolitan","15 000"],["nl","Nederlands","Dutch","2 000 000"],["nds-nl","Nedersaksies","Dutch Low Saxon","6 800"],["frr","Nordfriisk","North Frisian","9 100"],["pih","Norfuk / Pitkern","Norfolk","770"],["no","norsk","Norwegian (Bokmål)","510 000"],["nn","norsk nynorsk","Norwegian (Nynorsk)","150 000"],["nrm","Nouormand","Norman","4 200"],["nov","Novial","Novial","1 700"],["nah","Nāhuatl","Nahuatl","7 000"],["cr","Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ","Cree","100"],["oc","occitan","Occitan","86 000"],["om","Oromoo","Oromo","790"],["ng","Oshiwambo","Ndonga","8"],["hz","Otsiherero","Herero","0"],["uz","oʻzbekcha/ўзбекча","Uzbek","130 000"],["pag","Pangasinan","Pangasinan","2 500"],["pap","Papiamentu","Papiamentu","1 900"],["jam","Patois","Jamaican Patois","1 600"],["pcd","Picard","Picard","4 500"],["pms","Piemontèis","Piedmontese","64 000"],["nds","Plattdüütsch","Low Saxon","52 000"],["pl","polski","Polish","1 300 000"],["pt","português","Portuguese","1 000 000"],["pfl","Pälzisch","Palatinate German","2 500"],["aa","Qafár af","Afar","1"],["kaa","Qaraqalpaqsha","Karakalpak","1 900"],["crh","qırımtatarca","Crimean Tatar","6 600"],["ty","reo tahiti","Tahitian","1 200"],["ksh","Ripoarisch","Ripuarian","2 900"],["rmy","romani čhib","Romani","660"],["ro","română","Romanian","400 000"],["rm","rumantsch","Romansh","3 600"],["qu","Runa Simi","Quechua","21 000"],["sc","sardu","Sardinian","6 000"],["sco","Scots","Scots","54 000"],["stq","Seeltersk","Saterland Frisian","4 000"],["st","Sesotho","Sesotho","550"],["nso","Sesotho sa Leboa","Northern Sotho","8 200"],["tn","Setswana","Tswana","650"],["sq","shqip","Albanian","77 000"],["scn","sicilianu","Sicilian","26 000"],["simple","Simple English","Simple English","150 000"],["ss","SiSwati","Swati","470"],["sk","slovenčina","Slovak","230 000"],["sl","slovenščina","Slovenian","160 000"],["so","Soomaaliga","Somali","5 500"],["srn","Sranantongo","Sranan","1 100"],["sh","srpskohrvatski / српскохрватски","Serbo-Croatian","450 000"],["fi","suomi","Finnish","460 000"],["sv","svenska","Swedish","3 700 000"],["sg","Sängö","Sango","260"],["tl","Tagalog","Tagalog","76 000"],["kab","Taqbaylit","Kabyle","3 800"],["roa-tara","tarandíne","Tarantino","9 200"],["tet","tetun","Tetum","1 500"],["din","Thuɔŋjäŋ","Dinka","94"],["vi","Tiếng Việt","Vietnamese","1 200 000"],["tpi","Tok Pisin","Tok Pisin","1 500"],["chy","Tsetsêhestâhese","Cheyenne","620"],["ve","Tshivenda","Venda","270"],["tw","Twi","Twi","670"],["tk","Türkmençe","Turkmen","5 600"],["tr","Türkçe","Turkish","330 000"],["za","Vahcuengh","Zhuang","1 900"],["vep","vepsän kel’","Vepsian","6 000"],["vo","Volapük","Volapük","120 000"],["vec","vèneto","Venetian","12 000"],["fiu-vro","Võro","Võro","5 500"],["wa","walon","Walloon","15 000"],["vls","West-Vlams","West Flemish","6 900"],["war","Winaray","Waray","1 300 000"],["wo","Wolof","Wolof","1 300"],["ts","Xitsonga","Tsonga","590"],["yo","Yorùbá","Yoruba","32 000"],["diq","Zazaki","Zazaki","11 000"],["zea","Zeêuws","Zeelandic","4 600"],["ang","Ænglisc","Anglo-Saxon","3 100"],["is","íslenska","Icelandic","48 000"],["cs","čeština","Czech","430 000"],["szl","ślůnski","Silesian","8 400"],["bat-smg","žemaitėška","Samogitian","17 000"],["el","Ελληνικά","Greek","170 000"],["pnt","Ποντιακά","Pontic","470"],["av","авар","Avar","2 300"],["ady","адыгабзэ","Adyghe","410"],["kbd","Адыгэбзэ","Kabardian","1 600"],["ab","Аҧсшәа","Abkhazian","3 900"],["ba","башҡортса","Bashkir","49 000"],["be","беларуская","Belarusian","170 000"],["be-tarask","беларуская (тарашкевіца)‎","Belarusian (Taraškievica)","68 000"],["bxr","буряад","Buryat","2 200"],["bg","български","Bulgarian","250 000"],["inh","ГӀалгӀай","Ingush","1 000"],["os","Ирон","Ossetian","12 000"],["kv","коми","Komi","5 300"],["krc","къарачай-малкъар","Karachay-Balkar","2 000"],["ky","Кыргызча","Kirghiz","79 000"],["mrj","кырык мары","Hill Mari","10 000"],["lbe","лакку","Lak","1 200"],["lez","лезги","Lezgian","4 000"],["mk","македонски","Macedonian","100 000"],["mdf","мокшень","Moksha","1 200"],["mn","монгол","Mongolian","19 000"],["ce","нохчийн","Chechen","220 000"],["mhr","олык марий","Meadow Mari","10 000"],["koi","Перем Коми","Komi-Permyak","3 400"],["rue","русиньскый","Rusyn","7 200"],["ru","русский","Russian","1 600 000"],["sah","саха тыла","Sakha","12 000"],["cu","словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ","Old Church Slavonic","680"],["sr","српски / srpski","Serbian","620 000"],["tt","татарча/tatarça","Tatar","86 000"],["tg","тоҷикӣ","Tajik","98 000"],["tyv","тыва дыл","Tuvan","1 800"],["udm","удмурт","Udmurt","4 700"],["uk","українська","Ukrainian","920 000"],["xal","хальмг","Kalmyk","2 100"],["cv","Чӑвашла","Chuvash","42 000"],["myv","эрзянь","Erzya","5 700"],["kk","қазақша","Kazakh","220 000"],["hyw","Արեւմտահայերէն","Western Armenian","0"],["hy","հայերեն","Armenian","250 000"],["yi","ייִדיש","Yiddish","15 000"],["he","עברית","Hebrew","250 000"],["ug","ئۇيغۇرچە / Uyghurche","Uyghur","4 100"],["ur","اردو","Urdu","150 000"],["ar","العربية","Arabic","900 000"],["azb","تۆرکجه","Southern Azerbaijani","150 000"],["sd","سنڌي","Sindhi","12 000"],["fa","فارسی","Persian","680 000"],["lrc","لۊری شومالی","Northern Luri","5 400"],["mzn","مازِرونی","Mazandarani","13 000"],["arz","مصرى","Egyptian Arabic","21 000"],["pnb","پنجابی","Western Punjabi","48 000"],["ps","پښتو","Pashto","10 000"],["ckb","کوردی","Kurdish (Sorani)","24 000"],["glk","گیلکی","Gilaki","5 700"],["arc","ܐܪܡܝܐ","Aramaic","1 600"],["dv","ދިވެހިބަސް","Divehi","3 000"],["ks","कॉशुर / کٲشُر","Kashmiri","320"],["gom","गोंयची कोंकणी / Gõychi Konknni","Konkani","3 700"],["dty","डोटेली","Doteli","3 100"],["new","नेपाल भाषा","Newar","72 000"],["ne","नेपाली","Nepali","32 000"],["pi","पालि","Pali","2 500"],["bh","भोजपुरी","Bhojpuri","6 900"],["mr","मराठी","Marathi","54 000"],["mai","मैथिली","Maithili","13 000"],["sa","संस्कृतम्","Sanskrit","11 000"],["hi","हिन्दी","Hindi","130 000"],["as","অসমীয়া","Assamese","5 700"],["bn","বাংলা","Bengali","70 000"],["bpy","বিষ্ণুপ্রিয়া মণিপুরী","Bishnupriya Manipuri","25 000"],["pa","ਪੰਜਾਬੀ","Eastern Punjabi","31 000"],["gu","ગુજરાતી","Gujarati","29 000"],["or","ଓଡ଼ିଆ","Odia","15 000"],["ta","தமிழ்","Tamil","120 000"],["te","తెలుగు","Telugu","71 000"],["kn","ಕನ್ನಡ","Kannada","25 000"],["tcy","ತುಳು","Tulu","1 100"],["ml","മലയാളം","Malayalam","64 000"],["si","සිංහල","Sinhalese","15 000"],["th","ไทย","Thai","130 000"],["lo","ລາວ","Lao","3 400"],["dz","ཇོང་ཁ","Dzongkha","220"],["bo","བོད་ཡིག","Tibetan","5 900"],["my","မြန်မာဘာသာ","Burmese","45 000"],["shn","ၽႃႇသႃႇတႆး","Shan","0"],["xmf","მარგალური","Mingrelian","13 000"],["ka","ქართული","Georgian","130 000"],["ti","ትግርኛ","Tigrinya","170"],["am","አማርኛ","Amharic","15 000"],["iu","ᐃᓄᒃᑎᑐᑦ/inuktitut","Inuktitut","420"],["km","ភាសាខ្មែរ","Khmer","7 600"],["bug","ᨅᨔ ᨕᨘᨁᨗ","Buginese","14 000"],["sat","ᱥᱟᱱᱛᱟᱲᱤ","Santali","900"],["zh","中文","Chinese","1 100 000"],["wuu","吴语","Wu","21 000"],["hak","客家語/Hak-kâ-ngî","Hakka","9 000"],["zh-classical","文言","Classical Chinese","9 700"],["ja","日本語","Japanese","1 200 000"],["zh-yue","粵語","Cantonese","74 000"],["gan","贛語","Gan","6 400"],["ii","ꆇꉙ","Nuosu","3"],["chr","ᏣᎳᎩ","Cherokee","830"],["ko","한국어","Korean","460 000"],["got","𐌲𐌿𐍄𐌹𐍃𐌺","Gothic","600"]];
var all_langs_short = [];
for (var i=0; i<all_langs.length; i++) all_langs_short.push(all_langs[i][0]);

// Container of all data for a particular article
class Article {
    constructor() {
        this.lang = undefined;
        this.langId = undefined;
        this.title = undefined;
        this.section = undefined;
        this.hatnotes = [];
        this.langlinks = undefined;
        this.text = undefined;
        this.url = undefined;
        this.onLangReady = undefined;
        this.onTextReady = undefined;
    }

    setLang(lang) {
        if (all_langs[lang] !== undefined) {
            this.langId = lang;
            this.lang = all_langs[lang][0];
        } else {
            this.lang = lang;
            this.langId = all_langs_short.indexOf(lang);
        }
        this.title = undefined;
        this.section = undefined;
        this.hatnotes = [];
        this.langlinks = undefined;
        this.text = "";
        this.url = undefined;
        if (this.onLangReady !== undefined) this.onLangReady(this);
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

function update_og_lang(a) {
    var lang = all_langs[a.langId];
    og_el.querySelector(".lang-name").innerText = lang[1] + " (" + lang[2] + ")";
    og_el.querySelector(".lang-number").innerText = lang[3];
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

function update_tr_lang(a) {
    var lang = all_langs[a.langId];
    tr_el.querySelector(".lang-name").innerText = lang[1] + " (" + lang[2] + ")";
    tr_el.querySelector(".lang-number").innerText = lang[3];
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
    if (from != null) og.setLang(from);
    if (to != null) tr.setLang(to);
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
og.onLangReady = update_og_lang;
og.setLang("en");
og.onTextReady = update_og;

tr = new Article();
tr.onLangReady = update_tr_lang;
tr.setLang("pl");
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
document.querySelector("#lang-selector-dropdown").innerHTML = selector_html;
