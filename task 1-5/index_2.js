//======= part 1
var url = (window.location.href);
function getUrlVars() {
    var vars = {}
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value
    })
    return vars
}
url = 'http://любой_домен/filter?size=M&color=1,2&manufacturer=aaa,eee'
var size = getUrlVars()["size"];
var color = getUrlVars()['color']
var manufacturer = getUrlVars()['manufacturer']


var form = document.forms.first
form.elements.size.value = size


var colorArr = color.split(",");
for (let i = 0; i < form.elements.color.length; i++) {
    for (let j = 0; j < colorArr.length; j++) {
        if (form.elements.color[i].value === colorArr[j])
            form.elements.color[i].checked = 'true';
    }
}

var manufacturerArr = manufacturer.split(",");
var manufacturerEl = document.querySelector('#manufacturer');
for (let i = 0; i < manufacturerEl.length; i++) {
    for (let j = 0; j < manufacturerArr.length; j++) {
        if (manufacturerEl[i].value === manufacturerArr[j])
            manufacturerEl[i].selected = 'true';
    }
}

//=======part 2

document.getElementById('all_color').addEventListener('input', createNewUrl);
document.getElementById('all_size').addEventListener('input', createNewUrl);
document.getElementById('manufacturer').addEventListener('input', createNewUrl);

var urlObj = {};
urlObj.first_part_url = `http://любой_домен/filter?`;
urlObj.size_part_url = 'size=';
urlObj.color_part_url = '&color=';
urlObj.manufacturer_part_url = '&manufacturer=';


function createNewUrl() {
    var let_size = form.elements.size.value;
    var z = '';

    for (let i = 0; i < form.elements.color.length; i++) {
        if (form.elements.color[i].checked)
            z += `${form.elements.color[i].value},`;
    }

    if (z.length > 1)
        z = z.substring(0, z.length - 1);

    var let_color = z;
    var result = '';

    for (let i = 0; i < manufacturerEl.length; i++) {
        if (manufacturerEl[i].selected)
            result += `${manufacturerEl[i].value},`;
    }

    if (result.length > 1)
        result = result.substring(0, result.length - 1);

    var let_manufacturerEl = result;

    urlObj.size_part_url = `size=${let_size}`;
    urlObj.color_part_url = `&color=${let_color}`;
    urlObj.manufacturer_part_url = `&manufacturer=${let_manufacturerEl}`;
    urlObj.full_url = urlObj.first_part_url + urlObj.size_part_url + urlObj.color_part_url + urlObj.manufacturer_part_url;
    consoleLog(urlObj.full_url);
}

function consoleLog(url) {
    console.log(url);
}