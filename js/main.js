var debug = undefined;

class Article {
    constructor() {
        this.lang = undefined;
        this.id = undefined;
        this.title = undefined;
        this.hatnotes = undefined;
        this.langlinks = undefined;
        this.text = undefined;
        this.onPropsReady = undefined;
        this.onTextReady = undefined;
    }

    // Used to change the article data stored in the object
    set_title(title) {
        this.title = title;
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
                this_class.parse_data(this.responseText);
            }
        }
        xhr.setRequestHeader("Api-User-Agent", "Example/1.0");
        xhr.send();
    }

    parse_data(data) {
        // Debug
        data = JSON.parse(data);
        debug = data;
        console.log(data);

        // Set article details and fire callback once done
        this.hatnotes = []
        if (data["hatnotes"] !== undefined) {
            for (var i=0; i<data["hatnotes"].length; i++) {
                console.log(data["hatnotes"][i])
                if (data["hatnotes"][i]["section"] == 0) {
                    this.hatnotes.push(data["hatnotes"][i]["html"]);
                }
            }
        };
        this.langlinks = data["language_links"];
        this.text = undefined;
        if (this.onPropsReady !== undefined) this.onPropsReady(this);

        // Get a summary. If article is a disambiguation, get full text
        if (this.disambiguation) {
            this.getHtml();
        } else {
            // this.getSummary();
        }
    }

    getHtml() {
        console.log("getting HTML");
        var xhr = new XMLHttpRequest();
        var url = "https://";
        url += this.lang;
        url += ".wikipedia.org/api/rest_v1/page/html/";
        url += this.title;
        url += "?redirect=true";
        xhr.open("GET", url, true);
        // 'this' changes meaning inside a function()
        var this_class = this;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                document.body.innerHTML = this.responseText;
            }
        }
        xhr.setRequestHeader("Api-User-Agent", "Example/1.0");
        xhr.send();
    }
}
