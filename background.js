chrome.contextMenus.create({
    title: "「%s」を検索する(ver 0.8)",
    contexts:["selection"],   // To use when search with seleceted word
    onclick: function(info, tab) {

        // Get selected text
        var sltText = info.selectionText;

        // Make URL parameter
        var urlPram = sltText.replace(' ', '-');


        // Index what next current tab
        var tabIdx = tab.index + 1;

        // Create new tab
        chrome.tabs.create({url : "content.html?q=" + urlPram, index : tabIdx}, function(tab) {

            // Send msg to content.js
            //chrome.tabs.sendMessage(tab.id, {sltText: sltText});

        });
    }
})
