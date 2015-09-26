// Create dictionary content for Weblio(Japanese)
function createCont4Weblio(query, highSp) {

    // Based content
    var cont = "<iframe id=wltab src=#URL# width=1000 height=700 sandbox=#SANDBOX#></iframe>";

    // Add Sandbox
    if (highSp == 1) {
      cont = cont.replace("#SANDBOX#", "'allow-forms'");
    } else {
      cont = cont.replace("#SANDBOX#", "'allow-forms allow-scripts allow-same-origin'");
    }
    
    // Dictionary site URL
    var dicUrl = "http://ejje.weblio.jp/content_find?query=#QUERY#&searchType=exact&x=0&y=0";

    // Replace to URL command for Weblio
    query = query.replace('-', '+');

    // Create URL with selected word
    dicUrl = dicUrl.replace("#QUERY#", query);

    cont = cont.replace("#URL#", dicUrl);

    var rtn = {'name' : 'weblio', 'cont' : cont};

    return rtn;
}

// Create dictionary content for Daum English Dictionary(Korean)
function createCont4Daum(query, highSp) {

    // Based content
    var cont = "<iframe id=wltab src=#URL# width=1001 height=700 sandbox=#SANDBOX#></iframe>";

    // Add Sandbox
    if (highSp == 1) {
      cont = cont.replace("#SANDBOX#", "'allow-forms'");
    } else {
      cont = cont.replace("#SANDBOX#", "'allow-forms allow-scripts allow-same-origin'");
    }
    
    // Dictionary site URL
    var dicUrl = "http://dic.daum.net/search.do?q=#QUERY#&dic=eng";

    // Replace to URL command for Weblio
    query = query.replace('-', '%20');

    // Create URL with selected word
    dicUrl = dicUrl.replace("#QUERY#", query);

    cont = cont.replace("#URL#", dicUrl);

    var rtn = {'name' : 'Daum', 'cont' : cont};

    return rtn;
}

// Create dictionary content for Cambridge Dictionaries(English)
function createCont4Cambridge(query, highSp) {

    // Based content
    var cont = "<iframe src=#URL# width=1010 height=700 sandbox=#SANDBOX#></iframe>";

    // Add Sandbox
    if (highSp == 1) {
      cont = cont.replace("#SANDBOX#", "'allow-forms'");
    } else {
      cont = cont.replace("#SANDBOX#", "'allow-forms allow-scripts allow-same-origin'");
    }

    // Dictionary site URL
    var dicUrl = "http://dictionary.cambridge.org/us/search/english/direct/?q=#QUERY#";

    // Replace to URL command for Cambridge
    query = query.replace('-', '+');

    // Create URL with selected word
    dicUrl = dicUrl.replace("#QUERY#", query);

    cont = cont.replace("#URL#", dicUrl);

    var rtn = {'name' : 'Cambridge', 'cont' : cont};

    return rtn;
}

// Create dictionary content for Oxford Dictionaries(English)
function createCont4Oxford(query, highSp) {

    // Based content
    var cont = "<iframe src=#URL# width=1000 height=700 sandbox=#SANDBOX#></iframe>";

    // Add Sandbox
    if (highSp == 1) {
      cont = cont.replace("#SANDBOX#", "'allow-forms'");
    } else {
      cont = cont.replace("#SANDBOX#", "'allow-forms allow-scripts allow-same-origin'");
    }

    // Dictionary site URL
    var dicUrl = "http://www.oxforddictionaries.com/search/?direct=1&multi=1&dictCode=american_english&q=#QUERY#";

    // Replace to URL command for Oxford
    query = query.replace('-', '+');

    // Create URL with selected word
    dicUrl = dicUrl.replace("#QUERY#", query);

    cont = cont.replace("#URL#", dicUrl);

    var rtn = {'name' : 'Oxford', 'cont' : cont};

    return rtn;
}

// Create english language content
function createCont4EnglishLanguage(engDic, query, highSp) {

  var r = "";

  if (engDic == 'ox') {
    r = createCont4Oxford(query, highSp);
  } else if (engDic == 'cm') {
    r = createCont4Cambridge(query, highSp);
  } else {
    r = createCont4Oxford(query, highSp);
  }

  return r;
}

// Create other language content
function createCont4OtherLanguage(othDic, query, highSp) {

  var r = "";

  if (othDic == 'jp') {
    r = createCont4Weblio(query, highSp);
  } else if (othDic == 'kr') {
    r = createCont4Daum(query, highSp);
  } else if (othDic == 'sp') {
    r = createCont4Oxford(query, highSp);
  } else {
    r = createCont4Weblio(query, highSp);
  }

  return r;
}

// Get query from URL parameter
function getQuery() {
  var u = window.location.href;
  q = u.split('?')[1];
  i = q.indexOf('q=') + 2;
  r = q.substring(i);
  return r;
}

// Change left menu separate
function changeLmSep(sepType) {
  var wHght = $(window).height();
  if(sepType == 3) {
    var hght4menu = wHght / 3;
    $('#menuDic1').css('height', hght4menu + 'px');
    $('#menuDic2').css('height', hght4menu + 'px');
    $('#menuClose').css('height', hght4menu + 'px');
    $('.mb-p').css('padding', '20% 0 0 0');
  } else {
    var hght4menu = wHght / 2;
    $('#menuDic1').css('height', hght4menu + 'px');
    $('#menuDic2').css('height', hght4menu + 'px');
    $('#menuClose').css('height', hght4menu + 'px');
    $('.mb-p').css('padding', '35% 0 0 0');
  }
}

// Change left menu
function changeLm(d1, d2) {
  $('#menuDic1').css('display', d1);
  $('#menuDic2').css('display', d2);
  if( d1 === 'block' && d2 === 'block' ) {
    changeLmSep(3);
  } else {
    changeLmSep(2);
  }
}

function resizeCont() {
  // Resize iframe ajested by window size
  var wHght = $(window).height();
  var hght4tab = wHght - 55;
  $('#leftMenu').css('height', wHght);
  $('iframe').css('height', hght4tab + 'px');
  $('#setCont').css('height', hght4tab + 'px');
  $('#tabs-3').css('padding-bottom', '10px');

  if( $('#menuDic1').css('display') === 'block' && $('#menuDic2').css('display') === 'block' ) {
    changeLmSep(3);
  } else {
    changeLmSep(2);
  }
}

// Click button of dictionary tab 1
$('#dic1').on('click', function() {
  changeLm('none', 'block');
});

// Click button of dictionary tab 2
$('#dic2').on('click', function() {
  changeLm('block', 'none');
});

// Click button of dictionary tab 1
$('#setting').on('click', function() {
  changeLm('block', 'block');
});

// Click button of close
$('#close, #menuClose').on('click', function() {
  //window.close();
  chrome.tabs.getCurrent(function(tab) {
    // Focus last tab after closing
    var i = tab.index - 1;
    chrome.tabs.move(tab.id, {index: i}, function() {
      window.close();
    });
  });
});

// Hide left menu when mouse over out of main content
$('#leftMenu').mouseleave(function() {
    // Hide left menu
    $('#leftMenu').hide('slide', {direction: 'left'}, 'fast');
});

// Left menu button
$('#menuDic1').click(function() {
  var active = $('#tabs').tabs('option', 'active');
  $('#tabs').tabs('option', 'active', 0);
  $('#leftMenu').hide('slide', {direction: 'left'}, 'fast', function() {
    changeLm('none', 'block');
  });
});

$('#menuDic2').click(function() {
  var active = $('#tabs').tabs('option', 'active');
  $('#tabs').tabs('option', 'active', 1);
  $('#leftMenu').hide('slide', {direction: 'left'}, 'fast', function() {
    changeLm('block', 'none');
  });
});

// Resize contents when window resize
$(window).resize(function() {
  resizeCont();
});

// Initial execute
$(function() {

  // Load UI
  $('#tabs').tabs();
  $('#tabs').hoverdir();

  // Get opsions
  var dd = localStorage['defDisp'];
  var ed = localStorage['engDic'];
  var od = localStorage['othDic'];
  var hs = localStorage['highSp'];

  // Get query
  var q = getQuery();

  // Get dictionary contents
  var engCont = createCont4EnglishLanguage(ed, q, hs);
  var othCont = createCont4OtherLanguage(od, q, hs);

  // Append dictonary contents
  if (dd == 'eng') {
    $(engCont.cont).appendTo('#dicContent1');
    $('#menuDic1 > div').text(engCont.name);
    $('#dic1').text(engCont.name);

    $(othCont.cont).appendTo('#dicContent2');
    $('#menuDic2 > div').text(othCont.name);
    $('#dic2').text(othCont.name);

  } else {
    $(othCont.cont).appendTo('#dicContent1');
    $('#menuDic1 > div').text(othCont.name);
    $('#dic1').text(othCont.name);

    $(engCont.cont).appendTo('#dicContent2');
    $('#menuDic2 > div').text(engCont.name);
    $('#dic2').text(engCont.name);
  }

  // Resize iframe ajested by window size
  resizeCont();

  $('#setCont').css('display', 'block');
  $('ul').css('display', 'block');
});