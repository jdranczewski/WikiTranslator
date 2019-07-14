var debug = undefined;

class Article {
    constructor() {
        this.lang = undefined;
    }

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
        data = JSON.parse(data)
        debug = data;
        console.log(data);
    }
}
