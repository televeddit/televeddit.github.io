
function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

function getSubredditName() {
    return document.getElementsByClassName("redditname")[0].innerText;
}

function getSubredditId() {
    return shows[getSubredditName()] || false;
}

function buildDropdown(response) {
    let srLeftContainer = document.getElementById('srLeftContainer');
    let div = document.createElement("div");
    let sep = document.createElement("span");
    sep.classList.add('separator');
    sep.innerText = "-";
    div.style.display = 'flex';
    div.style.float = 'left';
    div.style.position = 'relative';
    div.innerHTML = '<div id="epDropdownContainer"><a href="javascript:;">Episode Filter</a></div>';
    div.appendChild(sep);
    srLeftContainer.insertBefore(div, srLeftContainer.firstChild);

    /**
        position: absolute;
        display: block;
        top: 18px;
        max-height: calc(100vh - 40px);
        left: 0px;
        z-index: 9999;
        background-color: rgb(250, 250, 250);
        width: 320px;
        overflow-y: auto;
        overscroll-behavior-y: contain;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(0, 0, 0);
        border-image: initial;
    **/
    let epListContainer = document.createElement('div');
    epListContainer.setAttribute("id", "epList");
}

function showDropdownAndLimit(response) {
    buildDropdown(response); // also check for selected
}

if (getSubredditId()) {
    // chrome.storage.sync.clear();
    chrome.storage.sync.get({[getSubredditId()]: 'not yet stored'}, async function(result) {
        let response = null;
        if (result[getSubredditId()] === 'not yet stored') {
            response = await makeRequest('GET', `https://api.tvmaze.com/shows/${getSubredditId()}/episodes`);
            response = JSON.parse(response);
            response.forEach((show) => {
                delete show["url"];
                delete show["airdate"];
                delete show["airtime"];
                delete show["runtime"];
                delete show["image"];
                delete show["summary"];
                delete show["_links"];
            });
            chrome.storage.sync.set({[getSubredditId()]: response});
        } else {
            response = await result[getSubredditId()];
        }
        await showDropdownAndLimit(response);
    });
}
