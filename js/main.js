var debug = undefined;

class Article {
    constructor() {
        this.lang = undefined;
        this.id = undefined;
        this.title = undefined;
        this.redirect = false;
        this.redirectFrom = undefined;
        this.disambiguation = false;
        this.text = undefined;
        this.onPropsReady = undefined;
        this.onTextReady = undefined;
    }

    // Used to change the article data stored in the object
    set_title(title) {
        var xhr = new XMLHttpRequest();
        var url = "https://";
        url += this.lang;
        url += ".wikipedia.org/w/api.php?";
        url += "origin=*&";
        url += "action=query&";
        url += "format=json&";
        url += "prop=langlinks|pageprops&";
        url += "redirects&";
        url += "ppprop=disambiguation&";
        url += "titles=" + title;
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
        this.id = Object.keys(data["query"]["pages"])[0];
        var page = data["query"]["pages"][this.id];
        this.title = page["title"];
        this.redirect = data['query']['redirects'] !== undefined;
        if (this.redirect) {
            this.redirectFrom = data['query']['redirects'][0]["from"];
        } else {
            this.redirectFrom = undefined;
        }
        this.disambiguation = page["pageprops"] !== undefined &&
                              page["pageprops"]["disambiguation"] !== undefined;
        this.text = undefined;
        if (this.onPropsReady !== undefined) this.onPropsReady();
    }
}
