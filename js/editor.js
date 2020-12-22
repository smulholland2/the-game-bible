let content = document.querySelector('.content');
let fontSize = document.querySelector('.font-size');
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let underline = document.querySelector('.underline');
let strike = document.querySelector('.strike');
let subscript = document.querySelector('.subscript');
let superscript = document.querySelector('.superscript');
let code = document.querySelector('.code');
let alignLeft = document.querySelector('.align-left');
let alignCenter = document.querySelector('.align-center');
let alignRight = document.querySelector('.align-right');
let alignJust = document.querySelector('.align-just');
let indentIn = document.querySelector('.indent-in');
let indentOut = document.querySelector('.indent-out');
let save = document.querySelector('.save');

fontSize.addEventListener('change', changeFont);
bold.addEventListener('click', setBold);
italic.addEventListener('click', setItalic);
underline.addEventListener('click', setUnderline);
strike.addEventListener('click', setStrike);
subscript.addEventListener('click', setSub);
superscript.addEventListener('click', setSup);
code.addEventListener('click', setCode);
alignLeft.addEventListener('click', function(){setAlign('left')});
alignCenter.addEventListener('click', function(){setAlign('center')});
alignRight.addEventListener('click', function(){setAlign('right')});
alignJust.addEventListener('click', function(){setAlign('just')});
indentIn.addEventListener('click', function(){setIndent('ind')});
indentOut.addEventListener('click', function(){setIndent('out')});
save.addEventListener('click', saveContent);

function changeFont() {
    let newSize = fontSize.value;
    format('fontSize', newSize);
}

function setBold() {
    format('bold');
}

function setItalic() {
    format('italic');
}

function setUnderline() {
    format('underline');
}

function setStrike() {
    format('strikeThrough');
}

function setSub() {
    format('subscript');
}

function setSup() {
    format('superscript');
}

function setCode() {
    console.log('code');
    format('formatBlock');
}

function setAlign(a) {
    switch (a) {
        case 'left':
            format('justifyLeft');
            break;
        case 'center':
            format('justifyCenter');
            break;
        case 'right':
            format('justifyRight');
            break;
        case 'just':
            format('justifyFull');
            break;
        default:
            break;
    }
}

function setIndent(d) {
    switch (d) {
        case 'ind':
            format('indent');
            break;
        case 'out':
            format('outdent')
            break;
        default:
            break;
    }
}

function saveContent() {
    console.log(content.innerHTML);
}

function format(command, value) {    
    document.execCommand(command, false, value);
}