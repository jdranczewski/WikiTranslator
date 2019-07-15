var debug = undefined;
var user_agent = "Example/1.0";

// Container of all data for a particular article
class Article {
    constructor() {
        this.lang = undefined;
        this.title = undefined;
        this.section = undefined;
        this.hatnotes = undefined;
        this.langlinks = undefined;
        this.text = undefined;
        this.onPropsReady = undefined;
        this.onTextReady = undefined;
    }

    // Used to change the article data stored in the object
    setTitle(title) {
        this.title = title;
        this.section = title.split("#")[1];
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

        this.title = data["displaytitle"];
        if (data["type"] == "disambiguation") {
            this.hatnotes.unshift("This is a disambiguation page.")
            this.getFullText();
        } else {
            this.text = data["extract_html"]
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
            }
        }
        xhr.setRequestHeader("Api-User-Agent", "Example/1.0");
        xhr.send();
    }
}
