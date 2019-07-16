var debug = undefined;
var user_agent = "Example/1.0";

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
    if (title != null) document.querySelector("#og-title").value = title;
    translate();
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
