var debug = undefined;
var user_agent = "WikiTranslator/1.0";
var all_langs = [["ace","Acèh","Acehnese","9 100"],["af","Afrikaans","Afrikaans","83 000"],["ak","Akan","Akan","610"],["als","Alemannisch","Alemannic","26 000"],["an","aragonés","Aragonese","36 000"],["roa-rup","armãneashti","Aromanian","1 200"],["frp","arpetan","Franco-Provençal","3 400"],["ast","asturianu","Asturian","100 000"],["atj","Atikamekw","Atikamekw","1 000"],["gn","Avañe'ẽ","Guarani","3 700"],["ay","Aymar aru","Aymara","4 600"],["az","azərbaycanca","Azerbaijani","150 000"],["bjn","Bahasa Banjar","Banjar","2 500"],["gor","Bahasa Hulontalo","Gorontalo","2 000"],["id","Bahasa Indonesia","Indonesian","480 000"],["ms","Bahasa Melayu","Malay","330 000"],["bm","bamanankan","Bambara","650"],["map-bms","Basa Banyumasan","Banyumasan","13 000"],["su","Basa Sunda","Sundanese","50 000"],["bcl","Bikol Central","Central Bicolano","9 100"],["bi","Bislama","Bislama","1 200"],["bar","Boarisch","Bavarian","28 000"],["bs","bosanski","Bosnian","80 000"],["br","brezhoneg","Breton","67 000"],["zh-min-nan","Bân-lâm-gú","Min Nan","230 000"],["ca","català","Catalan","620 000"],["ceb","Cebuano","Cebuano","5 400 000"],["ch","Chamoru","Chamorro","480"],["cbk-zam","Chavacano de Zamboanga","Chavacano","3 000"],["ny","Chi-Chewa","Chichewa","540"],["sn","chiShona","Shona","4 600"],["tum","chiTumbuka","Tumbuka","580"],["cho","Choctaw","Choctaw","6"],["co","corsu","Corsican","5 700"],["cy","Cymraeg","Welsh","110 000"],["da","dansk","Danish","250 000"],["se","davvisámegiella","Northern Sami","7 500"],["pdc","Deitsch","Pennsylvania German","1 900"],["de","Deutsch","German","2 300 000"],["nv","Diné bizaad","Navajo","8 200"],["dsb","dolnoserbski","Lower Sorbian","3 200"],["na","Dorerin Naoero","Nauruan","1 300"],["mh","Ebon","Marshallese","4"],["et","eesti","Estonian","200 000"],["eml","emiliàn e rumagnòl","Emilian-Romagnol","12 000"],["en","English","English","5 900 000"],["es","español","Spanish","1 500 000"],["eo","Esperanto","Esperanto","260 000"],["ext","estremeñu","Extremaduran","3 100"],["eu","euskara","Basque","340 000"],["ee","eʋegbe","Ewe","350"],["hif","Fiji Hindi","Fiji Hindi","9 800"],["fr","français","French","2 100 000"],["fy","Frysk","West Frisian","42 000"],["ff","Fulfulde","Fula","230"],["fur","furlan","Friulian","3 300"],["fo","føroyskt","Faroese","13 000"],["ga","Gaeilge","Irish","51 000"],["gv","Gaelg","Manx","5 000"],["sm","Gagana Samoa","Samoan","820"],["gag","Gagauz","Gagauz","2 700"],["gl","galego","Galician","160 000"],["gd","Gàidhlig","Scottish Gaelic","15 000"],["ki","Gĩkũyũ","Kikuyu","1 400"],["ha","Hausa","Hausa","3 700"],["haw","Hawaiʻi","Hawaiian","3 700"],["ho","Hiri Motu","Hiri Motu","3"],["hsb","hornjoserbsce","Upper Sorbian","13 000"],["hr","hrvatski","Croatian","210 000"],["io","Ido","Ido","29 000"],["ig","Igbo","Igbo","1 400"],["ilo","Ilokano","Ilocano","13 000"],["ia","interlingua","Interlingua","22 000"],["ie","Interlingue","Interlingue","4 600"],["xh","isiXhosa","Xhosa","800"],["zu","isiZulu","Zulu","1 100"],["it","italiano","Italian","1 500 000"],["ik","Iñupiak","Inupiak","270"],["jv","Jawa","Javanese","56 000"],["kbp","Kabɩyɛ","Kabiye","1 600"],["kl","kalaallisut","Greenlandic","1 700"],["kr","Kanuri","Kanuri","0"],["pam","Kapampangan","Kapampangan","8 600"],["csb","kaszëbsczi","Kashubian","5 300"],["kw","kernowek","Cornish","3 900"],["rw","Kinyarwanda","Kinyarwanda","1 800"],["rn","Kirundi","Kirundi","610"],["sw","Kiswahili","Swahili","52 000"],["kg","Kongo","Kongo","1 200"],["ht","Kreyòl ayisyen","Haitian","56 000"],["ku","kurdî","Kurdish (Kurmanji)","26 000"],["kj","Kwanyama","Kuanyama","4"],["jbo","la .lojban.","Lojban","1 200"],["lad","Ladino","Ladino","3 900"],["ltg","latgaļu","Latgalian","830"],["la","Latina","Latin","130 000"],["lv","latviešu","Latvian","97 000"],["to","lea faka-Tonga","Tongan","1 700"],["lt","lietuvių","Lithuanian","200 000"],["lij","Ligure","Ligurian","3 600"],["li","Limburgs","Limburgish","12 000"],["lfn","Lingua Franca Nova","Lingua Franca Nova","3 500"],["ln","lingála","Lingala","3 100"],["olo","Livvinkarjala","Livvi-Karelian","3 100"],["lg","Luganda","Luganda","1 200"],["lmo","lumbaart","Lombard","39 000"],["lb","Lëtzebuergesch","Luxembourgish","57 000"],["hu","magyar","Hungarian","450 000"],["mg","Malagasy","Malagasy","92 000"],["mt","Malti","Maltese","3 400"],["min","Minangkabau","Minangkabau","220 000"],["mwl","Mirandés","Mirandese","3 800"],["mus","Mvskoke","Muscogee","1"],["cdo","Mìng-dĕ̤ng-ngṳ̄","Min Dong","15 000"],["mi","Māori","Maori","7 200"],["fj","Na Vosa Vakaviti","Fijian","430"],["nap","Napulitano","Neapolitan","15 000"],["nl","Nederlands","Dutch","2 000 000"],["nds-nl","Nedersaksies","Dutch Low Saxon","6 800"],["frr","Nordfriisk","North Frisian","9 100"],["pih","Norfuk / Pitkern","Norfolk","770"],["no","norsk","Norwegian (Bokmål)","510 000"],["nn","norsk nynorsk","Norwegian (Nynorsk)","150 000"],["nrm","Nouormand","Norman","4 200"],["nov","Novial","Novial","1 700"],["nah","Nāhuatl","Nahuatl","7 000"],["cr","Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ","Cree","100"],["oc","occitan","Occitan","86 000"],["om","Oromoo","Oromo","790"],["ng","Oshiwambo","Ndonga","8"],["hz","Otsiherero","Herero","0"],["uz","oʻzbekcha/ўзбекча","Uzbek","130 000"],["pag","Pangasinan","Pangasinan","2 500"],["pap","Papiamentu","Papiamentu","1 900"],["jam","Patois","Jamaican Patois","1 600"],["pcd","Picard","Picard","4 500"],["pms","Piemontèis","Piedmontese","64 000"],["nds","Plattdüütsch","Low Saxon","52 000"],["pl","polski","Polish","1 300 000"],["pt","português","Portuguese","1 000 000"],["pfl","Pälzisch","Palatinate German","2 500"],["aa","Qafár af","Afar","1"],["kaa","Qaraqalpaqsha","Karakalpak","1 900"],["crh","qırımtatarca","Crimean Tatar","6 600"],["ty","reo tahiti","Tahitian","1 200"],["ksh","Ripoarisch","Ripuarian","2 900"],["rmy","romani čhib","Romani","660"],["ro","română","Romanian","400 000"],["rm","rumantsch","Romansh","3 600"],["qu","Runa Simi","Quechua","21 000"],["sc","sardu","Sardinian","6 000"],["sco","Scots","Scots","54 000"],["stq","Seeltersk","Saterland Frisian","4 000"],["st","Sesotho","Sesotho","550"],["nso","Sesotho sa Leboa","Northern Sotho","8 200"],["tn","Setswana","Tswana","650"],["sq","shqip","Albanian","77 000"],["scn","sicilianu","Sicilian","26 000"],["simple","Simple English","Simple English","150 000"],["ss","SiSwati","Swati","470"],["sk","slovenčina","Slovak","230 000"],["sl","slovenščina","Slovenian","160 000"],["so","Soomaaliga","Somali","5 500"],["srn","Sranantongo","Sranan","1 100"],["sh","srpskohrvatski / српскохрватски","Serbo-Croatian","450 000"],["fi","suomi","Finnish","460 000"],["sv","svenska","Swedish","3 700 000"],["sg","Sängö","Sango","260"],["tl","Tagalog","Tagalog","76 000"],["kab","Taqbaylit","Kabyle","3 800"],["roa-tara","tarandíne","Tarantino","9 200"],["tet","tetun","Tetum","1 500"],["din","Thuɔŋjäŋ","Dinka","94"],["vi","Tiếng Việt","Vietnamese","1 200 000"],["tpi","Tok Pisin","Tok Pisin","1 500"],["chy","Tsetsêhestâhese","Cheyenne","620"],["ve","Tshivenda","Venda","270"],["tw","Twi","Twi","670"],["tk","Türkmençe","Turkmen","5 600"],["tr","Türkçe","Turkish","330 000"],["za","Vahcuengh","Zhuang","1 900"],["vep","vepsän kel’","Vepsian","6 000"],["vo","Volapük","Volapük","120 000"],["vec","vèneto","Venetian","12 000"],["fiu-vro","Võro","Võro","5 500"],["wa","walon","Walloon","15 000"],["vls","West-Vlams","West Flemish","6 900"],["war","Winaray","Waray","1 300 000"],["wo","Wolof","Wolof","1 300"],["ts","Xitsonga","Tsonga","590"],["yo","Yorùbá","Yoruba","32 000"],["diq","Zazaki","Zazaki","11 000"],["zea","Zeêuws","Zeelandic","4 600"],["ang","Ænglisc","Anglo-Saxon","3 100"],["is","íslenska","Icelandic","48 000"],["cs","čeština","Czech","430 000"],["szl","ślůnski","Silesian","8 400"],["bat-smg","žemaitėška","Samogitian","17 000"],["el","Ελληνικά","Greek","170 000"],["pnt","Ποντιακά","Pontic","470"],["av","авар","Avar","2 300"],["ady","адыгабзэ","Adyghe","410"],["kbd","Адыгэбзэ","Kabardian","1 600"],["ab","Аҧсшәа","Abkhazian","3 900"],["ba","башҡортса","Bashkir","49 000"],["be","беларуская","Belarusian","170 000"],["be-tarask","беларуская (тарашкевіца)‎","Belarusian (Taraškievica)","68 000"],["bxr","буряад","Buryat","2 200"],["bg","български","Bulgarian","250 000"],["inh","ГӀалгӀай","Ingush","1 000"],["os","Ирон","Ossetian","12 000"],["kv","коми","Komi","5 300"],["krc","къарачай-малкъар","Karachay-Balkar","2 000"],["ky","Кыргызча","Kirghiz","79 000"],["mrj","кырык мары","Hill Mari","10 000"],["lbe","лакку","Lak","1 200"],["lez","лезги","Lezgian","4 000"],["mk","македонски","Macedonian","100 000"],["mdf","мокшень","Moksha","1 200"],["mn","монгол","Mongolian","19 000"],["ce","нохчийн","Chechen","220 000"],["mhr","олык марий","Meadow Mari","10 000"],["koi","Перем Коми","Komi-Permyak","3 400"],["rue","русиньскый","Rusyn","7 200"],["ru","русский","Russian","1 600 000"],["sah","саха тыла","Sakha","12 000"],["cu","словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ","Old Church Slavonic","680"],["sr","српски / srpski","Serbian","620 000"],["tt","татарча/tatarça","Tatar","86 000"],["tg","тоҷикӣ","Tajik","98 000"],["tyv","тыва дыл","Tuvan","1 800"],["udm","удмурт","Udmurt","4 700"],["uk","українська","Ukrainian","920 000"],["xal","хальмг","Kalmyk","2 100"],["cv","Чӑвашла","Chuvash","42 000"],["myv","эрзянь","Erzya","5 700"],["kk","қазақша","Kazakh","220 000"],["hyw","Արեւմտահայերէն","Western Armenian","0"],["hy","հայերեն","Armenian","250 000"],["yi","ייִדיש","Yiddish","15 000"],["he","עברית","Hebrew","250 000"],["ug","ئۇيغۇرچە / Uyghurche","Uyghur","4 100"],["ur","اردو","Urdu","150 000"],["ar","العربية","Arabic","900 000"],["azb","تۆرکجه","Southern Azerbaijani","150 000"],["sd","سنڌي","Sindhi","12 000"],["fa","فارسی","Persian","680 000"],["lrc","لۊری شومالی","Northern Luri","5 400"],["mzn","مازِرونی","Mazandarani","13 000"],["arz","مصرى","Egyptian Arabic","21 000"],["pnb","پنجابی","Western Punjabi","48 000"],["ps","پښتو","Pashto","10 000"],["ckb","کوردی","Kurdish (Sorani)","24 000"],["glk","گیلکی","Gilaki","5 700"],["arc","ܐܪܡܝܐ","Aramaic","1 600"],["dv","ދިވެހިބަސް","Divehi","3 000"],["ks","कॉशुर / کٲشُر","Kashmiri","320"],["gom","गोंयची कोंकणी / Gõychi Konknni","Konkani","3 700"],["dty","डोटेली","Doteli","3 100"],["new","नेपाल भाषा","Newar","72 000"],["ne","नेपाली","Nepali","32 000"],["pi","पालि","Pali","2 500"],["bh","भोजपुरी","Bhojpuri","6 900"],["mr","मराठी","Marathi","54 000"],["mai","मैथिली","Maithili","13 000"],["sa","संस्कृतम्","Sanskrit","11 000"],["hi","हिन्दी","Hindi","130 000"],["as","অসমীয়া","Assamese","5 700"],["bn","বাংলা","Bengali","70 000"],["bpy","বিষ্ণুপ্রিয়া মণিপুরী","Bishnupriya Manipuri","25 000"],["pa","ਪੰਜਾਬੀ","Eastern Punjabi","31 000"],["gu","ગુજરાતી","Gujarati","29 000"],["or","ଓଡ଼ିଆ","Odia","15 000"],["ta","தமிழ்","Tamil","120 000"],["te","తెలుగు","Telugu","71 000"],["kn","ಕನ್ನಡ","Kannada","25 000"],["tcy","ತುಳು","Tulu","1 100"],["ml","മലയാളം","Malayalam","64 000"],["si","සිංහල","Sinhalese","15 000"],["th","ไทย","Thai","130 000"],["lo","ລາວ","Lao","3 400"],["dz","ཇོང་ཁ","Dzongkha","220"],["bo","བོད་ཡིག","Tibetan","5 900"],["my","မြန်မာဘာသာ","Burmese","45 000"],["shn","ၽႃႇသႃႇတႆး","Shan","0"],["xmf","მარგალური","Mingrelian","13 000"],["ka","ქართული","Georgian","130 000"],["ti","ትግርኛ","Tigrinya","170"],["am","አማርኛ","Amharic","15 000"],["iu","ᐃᓄᒃᑎᑐᑦ/inuktitut","Inuktitut","420"],["km","ភាសាខ្មែរ","Khmer","7 600"],["bug","ᨅᨔ ᨕᨘᨁᨗ","Buginese","14 000"],["sat","ᱥᱟᱱᱛᱟᱲᱤ","Santali","900"],["zh","中文","Chinese","1 100 000"],["wuu","吴语","Wu","21 000"],["hak","客家語/Hak-kâ-ngî","Hakka","9 000"],["zh-classical","文言","Classical Chinese","9 700"],["ja","日本語","Japanese","1 200 000"],["zh-yue","粵語","Cantonese","74 000"],["gan","贛語","Gan","6 400"],["ii","ꆇꉙ","Nuosu","3"],["chr","ᏣᎳᎩ","Cherokee","830"],["ko","한국어","Korean","460 000"],["got","𐌲𐌿𐍄𐌹𐍃𐌺","Gothic","600"]];
var all_langs_short = [];
for (var i=0; i<all_langs.length; i++) all_langs_short.push(all_langs[i][0]);
var xhr_queue = []

// Container of all data for a particular article
class Article {
    constructor() {
        this.name = "";
        this.lang = undefined;
        this.langId = undefined;
        this.resetParams();
        this.onLangReady = undefined;
        this.onPropsReady = undefined;
        this.onTextReady = undefined;
    }

    resetParams() {
        this.title = "";
        this.section = undefined;
        this.hatnotes = [];
        this.langlinks = undefined;
        if (this.name == "from") {
            this.text = "<p>Welcome to the WikiTranslator!</p> <p>You can select languages above, and then type in your query in the input field. A matching article in the second language will be found and displayed to the right. You can then verify the translation is correct by comparing the summaries.</p>";
        } else {
            this.text = "";
        }
        this.url = "";
    }

    setLang(lang) {
        if (lang == this.lang || lang == this.langId) {
            if (this.onLangReady !== undefined) this.onLangReady(this);
            return;
        };
        if (all_langs[lang] !== undefined) {
            this.langId = lang;
            this.lang = all_langs[lang][0];
        } else {
            this.lang = lang;
            this.langId = all_langs_short.indexOf(lang);
        }
        setCookie(this.name, this.lang);
        setRecent(this.lang);
        this.resetParams();
        if (this.onLangReady !== undefined) this.onLangReady(this);
        if (this.onTextReady !== undefined) this.onTextReady(this);
    }

    // Used to change the article data stored in the object
    setTitle(title) {
        if (this.title == title) {
            if (this.onPropsReady !== undefined) this.onPropsReady(this);
            if (this.onTextReady !== undefined) this.onTextReady(this);
            return;
        }
        if (title == "") {
            this.resetParams();
            if (this.onPropsReady !== undefined) this.onPropsReady(this);
            if (this.onTextReady !== undefined) this.onTextReady(this);
            return;
        }
        this.title = title;
        this.section = title.split("#")[1];
        this.url = "https://" + this.lang + ".wikipedia.org/wiki/" + title
        var xhr = new XMLHttpRequest();
        xhr_queue.push(xhr);
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
        if (data["language_links"] !== undefined) {
            this.langlinks = data["language_links"];
        } else {
            this.langlinks = [];
        }
        this.text = undefined;
        if (this.onPropsReady !== undefined) this.onPropsReady(this);
    }

    // Gets the summary text for the article
    getText() {
        var xhr = new XMLHttpRequest();
        xhr_queue.push(xhr);
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
        if (this.section !== undefined) {
            this.hatnotes.unshift("<b>" + this.section.split("_").join(" ") + "</b> is a section of this article.")
        }
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
        xhr_queue.push(xhr);
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
        xhr.setRequestHeader("Api-User-Agent", user_agent);
        xhr.send();
    }

    // Given another Article object, check if it contains a link to a page in
    // this article's language, and if so, request and ingest it
    findTranslation(a) {
        if (a.title == "") {
            this.resetParams();
            if (this.onTextReady !== undefined) this.onTextReady(this);
        } else {
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
                this.resetParams();
                this.title = "No translation";
                this.text = "<!--WTNoTranslation-->";
                if (this.onTextReady !== undefined) this.onTextReady(this);
            }
        }
    }
}

class Search {
    constructor () {
        this.onResultsReady = undefined;
        this.results = [];
        this.xhr = new XMLHttpRequest();
    }

    query(text) {
        if (this.xhr.readyState != 4) {
            this.xhr.abort();
        }
        this.xhr = new XMLHttpRequest();
        xhr_queue.push(this.xhr);
        var url = "https://";
        url += og.lang;
        url += ".wikipedia.org/w/api.php?";
        url += "origin=*&";
        url += "action=query&";
        url += "format=json&";
        url += "list=prefixsearch&";
        url += "pslimit=5&";
        url += "pssearch=" + text;
        this.xhr.open("GET", url, true);
        // 'this' changes meaning inside a function()
        var this_class = this;
        this.xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                this_class.parseData(this.responseText);
            }
        }
        this.xhr.setRequestHeader("Api-User-Agent", user_agent);
        this.xhr.send();
    }

    parseData(data) {
        // Debug
        data = JSON.parse(data);
        debug = data;
        console.log(data);

        this.results = [];
        var results = data["query"]["prefixsearch"];
        for (var i=0; i<results.length; i++) {
            this.results.push(results[i]["title"]);
        }
        if (this.onResultsReady !== undefined) this.onResultsReady(this);
    }
}

// Get cookies
function getCookies() {
    var cookies = document.cookie.split("; ");
    var ret = {};
    for (var i=0; i<cookies.length; i++) {
        var cookie = cookies[i].split("=");
        ret[cookie[0]] = cookie[1];
    }
    return ret;
}

// Set cookie
function setCookie(key, value) {
    document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Set recent languages
function setRecent(lang) {
    var recents = getCookies()["recent"];
    if (recents === undefined) {
        setCookie("recent", lang);
    } else {
        recents = recents.split("&");
        var index  = recents.indexOf(lang);
        if (index !== -1) {
            recents.splice(index, 1);
            recents.unshift(lang);
        } else {
            if (recents.length >= 6) recents.pop();
            recents.unshift(lang);
        }
        setCookie("recent", recents.join("&"));
    }
    displayRecent();
}

// Update the displayed data based on parameters of the original article
var og_el = document.querySelector('#og');
function update_og_title(a) {
    og_el.querySelector(".title").value = a.title;
    if (a.title == "") {
        document.title = "WikiTranslator";
    } else {
        document.title = "WikiTranslator - " + a.title.split("_").join(" ");
    }
    tr.findTranslation(og);
}

function update_og(a) {
    og_el.querySelector(".title").value = a.title;
    if (a.title !== "") {
        document.querySelector("#gt a").href = "https://translate.google.com/#view=home&op=translate&sl="+og.lang+"&tl="+tr.lang+"&text="+a.title;
        document.querySelector("#gt").style.display = "block";
    }
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
    if (a.url !== "") {
        og_el.querySelector(".article-link").href = a.url;
        og_el.querySelector(".article-link").classList.remove("disabled");
    }
    document.querySelector("#lang-selector-container").style.pointerEvents = "";
}

function update_og_lang(a) {
    var lang = all_langs[a.langId];
    og_el.querySelector(".lang-name").innerText = lang[1] + " (" + lang[2] + ")";
    og_el.querySelector(".lang-number").innerText = lang[3];
    og_el.querySelector(".text").lang = lang[0];
}

// Update the displayed data based on parameters of the translated article
var tr_el = document.querySelector('#tr');
function update_tr_title(a) {
    tr_el.querySelector(".title").value = a.title;
}

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
    if (a.url !== "") {
        tr_el.querySelector(".article-link").href = a.url;
        tr_el.querySelector(".article-link").classList.remove("disabled");
    }
}

function update_tr_lang(a) {
    var lang = all_langs[a.langId];
    tr_el.querySelector(".lang-name").innerText = lang[1] + " (" + lang[2] + ")";
    tr_el.querySelector(".lang-number").innerText = lang[3];
    tr_el.querySelector(".text").lang = lang[0];
}

// Reset the displayed data
function reset() {
    document.querySelector("#gt").style.display = "none";
    document.querySelector("#lang-selector-container").style.pointerEvents = "none";
    og_el.querySelector(".hatnotes").innerHTML = "";
    og_el.querySelector(".text").innerHTML = "<p>Loading...</p>";
    og_el.querySelector(".article-link").href = "";
    og_el.querySelector(".article-link").classList.add("disabled");
    tr_el.querySelector(".title").innerHTML = "";
    tr_el.querySelector(".hatnotes").innerHTML = "";
    tr_el.querySelector(".text").innerHTML = "<p>Loading...</p>";
    tr_el.querySelector(".article-link").href = "";
    tr_el.querySelector(".article-link").classList.add("disabled");
}

// Stop all xhrs
function stop_all_ajax() {
    for (var i=0; i<xhr_queue.length; i++) {
        xhr_queue[i].abort();
    }
    xhr_queue = [];
}

// Start a translation
function translate() {
    reset();
    og.setTitle(document.getElementById("og-title").value);
}

// Handle a change of the url hash. This is the best way to initiate a translation
function hashChanged() {
    var hash_data = new URL(window.location.href.replace("#", "?"));
    var title = hash_data.searchParams.get("title") + hash_data.hash;
    var from = hash_data.searchParams.get("from");
    var to = hash_data.searchParams.get("to")
    if (from != null) og.setLang(from);
    if (to != null) tr.setLang(to);
    if (hash_data.searchParams.get("title") != null) {
        document.querySelector("#og-title").value = title;
    } else {
        document.querySelector("#og-title").value = "";
        document.title = "WikiTranslator";
    }
    stop_all_ajax();
    translate();
}
window.onhashchange = hashChanged;

// Invert the languages
function invert() {
    temp = og;
    og = tr;
    tr = temp;
    assignArticleBase();
    if (og.text == "<!--WTNoTranslation-->") {
        og.resetParams();
        document.querySelector("#tr-title").innerText = "";
    }
    if (og.title == "") og.resetParams();
    window.location.hash = "from=" + og.lang +
                           "&to=" + tr.lang +
                           "&title=" + document.querySelector("#tr-title").innerText;
}

// Create two Article objects
og = new Article();
tr = new Article();

function assignArticleBase() {
    og.name = "from";
    og.onLangReady = update_og_lang;
    og.onPropsReady = update_og_title;
    og.onTextReady = update_og;
    tr.name = "to";
    tr.onLangReady = update_tr_lang;
    tr.onPropsReady = update_tr_title;
    tr.onTextReady = update_tr;
}
assignArticleBase();

var cookies = getCookies();
var slang = "none";
if (cookies["from"] !== undefined) {
    og.setLang(cookies["from"]);
    slang = cookies["from"];
} else {
    og.setLang("en");
}
if (cookies["to"] !== undefined) {
    tr.setLang(cookies["to"]);
} else {
    tr.setLang("pl");
}

var lang_current = og;

// Check if there's valid data in the hash on page load
hashChanged();

// Probably a placeholder for submiting for translation
document.querySelector("#invert").onclick = invert;

// Handle language selection:

// First, populate the selector dropdown
var selector_html = ""
for (var i=0; i<all_langs.length; i++) {
    selector_html += "<option value=\"" + i + "\">" + all_langs[i][1] + " (" + all_langs[i][2] + ")</option>"
}
document.querySelector("#lang-selector-dropdown").innerHTML = selector_html;

// Populate the language buttons
function displayRecent() {
    if (getCookies()["recent"] !== undefined) {
        var recents = getCookies()["recent"].split("&");
        var recent_buttons_html = "";
        for (var i=0; i<recents.length; i++) {
            var index = all_langs_short.indexOf(recents[i]);
            var lang = all_langs[index];
            recent_buttons_html += "<div class=\"lang-button\" id=\"lbp-"+index+"\"><div class=\"lang-button-name\">"+lang[1]+" ("+lang[2]+")</div><div class=\"lang-button-number\">"+lang[3]+" articles</div></div>";
        }
        document.querySelector("#recent-lang-buttons").innerHTML = recent_buttons_html;
        langButtonAssign();
    }
}
var pop_buttons_html = "";
var pop = [45, 52, 38,224,46, 76, 138, 297, 293, 139];
for (var i=0; i<pop.length; i++) {
    var lang = all_langs[pop[i]];
    pop_buttons_html += "<div class=\"lang-button\" id=\"lb-"+pop[i]+"\"><div class=\"lang-button-name\">"+lang[1]+" ("+lang[2]+")</div><div class=\"lang-button-number\">"+lang[3]+" articles</div></div>";
}
document.querySelector("#popular-lang-buttons").innerHTML = pop_buttons_html;

// Update the lang_current variable based on what's been clicked
document.querySelector("#og-lang").onclick = function(e) {
    if (lang_current.name == "from") {
        document.querySelector("#lang-selector-container").classList.toggle("active");
        document.querySelector("#og-lang").classList.toggle("active");
    } else {
        document.querySelector("#lang-selector-container").classList.add("active");
        document.querySelector("#og-lang").classList.add("active");
    }
    lang_current = og;
    document.querySelector("#tr-lang").classList.remove("active");

}

document.querySelector("#tr-lang").onclick = function(e) {
    if (lang_current.name == "to") {
        document.querySelector("#lang-selector-container").classList.toggle("active");
        document.querySelector("#tr-lang").classList.toggle("active");
    } else {
        document.querySelector("#lang-selector-container").classList.add("active");
        document.querySelector("#tr-lang").classList.add("active");
    }
    lang_current = tr;
    document.querySelector("#og-lang").classList.remove("active");
}

document.querySelector("#lsc-close").onclick = function() {
    document.querySelector("#og-lang").classList.remove("active");
    document.querySelector("#tr-lang").classList.remove("active");
    document.querySelector("#lang-selector-container").classList.remove("active");
}

// Handle language changes: buttons...
function langButtonAssign() {
    document.querySelectorAll(".lang-button").forEach(function(lb) {
        lb.onclick = function() {
            lang = this.id.split("-")[1]
            lang_current.setLang(lang);
            window.location.hash = "from=" + og.lang +
                                   "&to=" + tr.lang +
                                   "&title=" + document.querySelector("#og-title").value;
           document.querySelector("#lang-selector-container").classList.remove("active");
           document.querySelector("#og-lang").classList.remove("active");
           document.querySelector("#tr-lang").classList.remove("active");
        }
    });
}
langButtonAssign();

// ...and the dropdown
document.querySelector("#lang-selector-dropdown").onchange = function() {
    lang_current.setLang(this.value);
    window.location.hash = "from=" + og.lang +
                           "&to=" + tr.lang +
                           "&title=" + document.querySelector("#og-title").value;
    document.querySelector("#lang-selector-container").classList.remove("active");
    document.querySelector("#og-lang").classList.remove("active");
    document.querySelector("#tr-lang").classList.remove("active");
}

// Handle search
function update_search(s) {
    var cont = document.querySelector("#search-results");
    cont.innerHTML = "";
    cont.style.display = "block";
    for (var i=0; i<s.results.length; i++) {
        var sr = document.createElement("div");
        sr.className = "search-result";
        sr.innerHTML = s.results[i];
        sr.onclick = search_click;
        sr.onmousedown = search_click;
        cont.appendChild(sr);
    }
    cont.firstChild.classList.add("active");
}

function search_click(e) {
    var title = e.target.innerHTML;
    document.querySelector("#og-title").value = title;
    window.location.hash = "from=" + og.lang +
                           "&to=" + tr.lang +
                           "&title=" + document.querySelector("#og-title").value;
    document.querySelector("#search-results").innerHTML = "";
}

document.querySelector("#og-title").onkeyup = function(e) {
    var active = document.querySelector(".search-result.active");
    if (e.keyCode == 40 && active.nextSibling !== null) {
        active.nextSibling.classList.add("active");
        active.classList.remove("active");
    } else if (e.keyCode == 38 && active.previousSibling !== null) {
        active.previousSibling.classList.add("active");
        active.classList.remove("active");
    } else if (e.keyCode == 13) {
        active.click();
    }
}

document.querySelector("#og-title").onblur = function(e) {
    document.querySelector("#search-results").style.display = "none";
}

search = new Search();
search.onResultsReady = update_search;
document.querySelector("#og-title").oninput = function(e) {
    search.query(e.target.value);
}

// Stop lang selector from appearing onload as it animates into opacity 0
window.setTimeout(function() {
    document.querySelector("#lang-selector-container").style.display = "block";
}, 500);

// Cookie notice
if (getCookies()["ok"] === undefined) {
    document.querySelector("#cookies").style.display = "block";
}

document.querySelector("#cok").onclick = function() {
    document.querySelector("#cookies").style.display = "";
    setCookie("ok", "yes");
}

// Simple analytics: sends only a hit and a referrer domain (not the full
// address). Zero PII.
var xs = new XMLHttpRequest();
xs.open("POST", "https://jdranczewski.cba.pl/SimpleWebStats.php", true);
xs.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var d = new Date();
var now = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
var referrer = document.referrer.split("/")[2];
var mobile = (window.innerWidth <= 700);
xs.send("visit&lang="+encodeURIComponent(slang)
+"&usertime="+encodeURIComponent(now)
+"&mobile="+encodeURIComponent(mobile)
+"&referrer="+encodeURIComponent(referrer)
);
