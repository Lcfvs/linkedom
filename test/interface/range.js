const assert = require('../assert.js').for('Range');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div class="test">abc</div></html>');

let node = document.getElementsByClassName('test')[0];

let element = document.createElement('element');

let range = document.createRange();
element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneRange().extractContents());
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append extracted content');
assert(element.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
range.deleteContents();
assert(element.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneContents());
assert(element.innerHTML, '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>', 'extractContents');
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append cloned content');

assert(document.importNode(node, true).toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'importNode');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(element.firstChild);
range.setEndAfter(element.lastChild);
range.deleteContents();
assert(element.innerHTML, '<p>a</p>', 'deleteContents startafter endafter');


element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(element.firstChild);
range.setEndBefore(element.lastChild);
range.deleteContents();
assert(element.innerHTML, '<p>a</p><p>e</p>', 'deleteContents startafter endbefore');

range = document.createRange();
range.selectNode(document.createTextNode('!'));
let h1 = document.createElement('h1');
range.surroundContents(h1);
assert(h1.toString(), '<h1>!</h1>', 'surroundContents');

range = document.createRange();
range.selectNode(h1.firstChild);
range.insertNode(document.createTextNode('?'));
assert(h1.toString(), '<h1>?!</h1>', 'insertNode');

range = document.createRange();
range.createContextualFragment('<h1>?!</h1>')
assert(range.extractContents().childNodes.join(''), '<h1>?!</h1>', 'createContextualFragment');

