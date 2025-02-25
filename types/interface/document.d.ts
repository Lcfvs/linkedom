/**
 * @implements globalThis.Document
 */
export class Document extends NonElementParentNode implements globalThis.Document {
    constructor(type: any);
    /**
     * @type {globalThis.Document['defaultView']}
     */
    get defaultView(): Window & typeof globalThis;
    set doctype(arg: DocumentType | import("../mixin/parent-node.js").NodeStruct);
    get doctype(): DocumentType | import("../mixin/parent-node.js").NodeStruct;
    get documentElement(): import("../mixin/parent-node.js").NodeStruct;
    createAttribute(name: any): Attr;
    createComment(textContent: any): Comment;
    createDocumentFragment(): DocumentFragment;
    createElement(localName: any): Element;
    createRange(): Range;
    createTextNode(textContent: any): Text;
    createTreeWalker(root: any, whatToShow: any): TreeWalker;
    createEvent(name: any): any;
    importNode(externalNode: any, ...args: any[]): any;
    getElementsByTagNameNS(_: any, name: any): NodeList;
    createAttributeNS(_: any, name: any): Attr;
    createElementNS(nsp: any, localName: any, options: any): Element | SVGElement;
    [CUSTOM_ELEMENTS]: {
        active: boolean;
        registry: any;
    };
    [MUTATION_OBSERVER]: {
        active: boolean;
        class: any;
    };
    [MIME]: any;
    /** @type {DocumentType} */
    [DOCTYPE]: DocumentType;
    [DOM_PARSER]: any;
    [IMAGE]: {
        new (width: any, height: any, ...args: any[]): {
            height: any;
            width: any;
            alt: any;
            sizes: any;
            src: any;
            srcset: any;
            title: any;
            ownerDocument: any;
            localName: any;
            blur(): void;
            click(): void;
            readonly accessKeyLabel: string;
            readonly isContentEditable: boolean;
            contentEditable: any;
            draggable: any;
            hidden: any;
            spellcheck: any;
            accessKey: any;
            dir: any;
            lang: any;
            onabort: any;
            onblur: any;
            oncancel: any;
            oncanplay: any;
            oncanplaythrough: any;
            onchange: any;
            onclick: any;
            onclose: any;
            oncontextmenu: any;
            oncuechange: any;
            ondblclick: any;
            ondrag: any;
            ondragend: any;
            ondragenter: any;
            ondragleave: any;
            ondragover: any;
            ondragstart: any;
            ondrop: any;
            ondurationchange: any;
            onemptied: any;
            onended: any;
            onerror: any;
            onfocus: any;
            oninput: any;
            oninvalid: any;
            onkeydown: any;
            onkeypress: any;
            onkeyup: any;
            onload: any;
            onloadeddata: any;
            onloadedmetadata: any;
            onloadstart: any;
            onmousedown: any;
            onmouseenter: any;
            onmouseleave: any;
            onmousemove: any;
            onmouseout: any;
            onmouseover: any;
            onmouseup: any;
            onmousewheel: any;
            onpause: any;
            onplay: any;
            onplaying: any;
            onprogress: any;
            onratechange: any;
            onreset: any;
            onresize: any;
            onscroll: any;
            onseeked: any;
            onseeking: any;
            onselect: any;
            onshow: any;
            onstalled: any;
            onsubmit: any;
            onsuspend: any;
            ontimeupdate: any;
            ontoggle: any;
            onvolumechange: any;
            onwaiting: any;
            onauxclick: any;
            ongotpointercapture: any;
            onlostpointercapture: any;
            onpointercancel: any;
            onpointerdown: any;
            onpointerenter: any;
            onpointerleave: any;
            onpointermove: any;
            onpointerout: any;
            onpointerover: any;
            onpointerup: any;
            readonly isConnected: boolean;
            readonly parentElement: any;
            readonly previousSibling: any;
            readonly nextSibling: any;
            readonly previousElementSibling: any;
            readonly nextElementSibling: any;
            before(...nodes: any[]): void;
            after(...nodes: any[]): void;
            replaceWith(...nodes: any[]): void;
            remove(): void;
            id: any;
            className: string;
            readonly nodeName: any;
            readonly tagName: any;
            readonly classList: import("../dom/token-list.js").DOMTokenList;
            readonly dataset: import("../dom/string-map.js").DOMStringMap;
            nonce: any;
            readonly style: import("./css-style-declaration.js").CSSStyleDeclaration;
            tabIndex: number;
            readonly innerText: string;
            textContent: string;
            innerHTML: string;
            outerHTML: string;
            readonly attributes: any;
            focus(): void;
            getAttribute(name: any): any;
            getAttributeNode(name: any): import("../mixin/parent-node.js").NodeStruct;
            getAttributeNames(): NodeList;
            hasAttribute(name: any): boolean;
            hasAttributes(): boolean;
            removeAttribute(name: any): void;
            removeAttributeNode(attribute: any): void;
            setAttribute(name: any, value: any): void;
            setAttributeNode(attribute: any): import("../mixin/parent-node.js").NodeStruct;
            toggleAttribute(name: any, force: any, ...args: any[]): boolean;
            readonly shadowRoot: any;
            attachShadow(init: any): import("./shadow-root.js").ShadowRoot;
            matches(selectors: any): any;
            closest(selectors: any): any;
            insertAdjacentElement(position: any, element: any): any;
            insertAdjacentHTML(position: any, html: any): void;
            insertAdjacentText(position: any, text: any): void;
            cloneNode(deep?: boolean): any;
            toString(): string;
            toJSON(): any[];
            getAttributeNS(_: any, name: any): any;
            getElementsByTagNameNS(_: any, name: any): NodeList;
            hasAttributeNS(_: any, name: any): boolean;
            removeAttributeNS(_: any, name: any): void;
            setAttributeNS(_: any, name: any, value: any): void;
            setAttributeNodeNS(attr: any): import("../mixin/parent-node.js").NodeStruct;
            [CLASS_LIST]: import("../dom/token-list.js").DOMTokenList;
            [DATASET]: import("../dom/string-map.js").DOMStringMap;
            [STYLE]: import("./css-style-declaration.js").CSSStyleDeclaration;
            readonly childNodes: NodeList;
            readonly children: NodeList;
            readonly firstChild: import("../mixin/parent-node.js").NodeStruct;
            readonly firstElementChild: import("../mixin/parent-node.js").NodeStruct;
            readonly lastChild: any;
            readonly lastElementChild: any;
            readonly childElementCount: number;
            prepend(...nodes: any[]): void;
            append(...nodes: any[]): void;
            replaceChildren(...nodes: any[]): void;
            getElementsByClassName(className: any): NodeList;
            getElementsByTagName(tagName: any): NodeList;
            querySelector(selectors: any): import("../mixin/parent-node.js").NodeStruct;
            querySelectorAll(selectors: any): NodeList;
            appendChild(node: any): any;
            contains(node: any): boolean;
            insertBefore(node: any, before?: any): any;
            normalize(): void;
            removeChild(node: any): any;
            replaceChild(node: any, replaced: any): any;
            [PRIVATE]: any;
            [NEXT]: import("../mixin/parent-node.js").NodeStruct;
            [END]: import("../mixin/parent-node.js").NodeStruct;
            nodeType: any;
            parentNode: any;
            readonly ELEMENT_NODE: number;
            readonly ATTRIBUTE_NODE: number;
            readonly TEXT_NODE: number;
            readonly COMMENT_NODE: number;
            readonly DOCUMENT_NODE: number;
            readonly DOCUMENT_FRAGMENT_NODE: number;
            readonly DOCUMENT_TYPE_NODE: number;
            nodeValue: any;
            hasChildNodes(): boolean;
            isSameNode(node: any): boolean;
            compareDocumentPosition(target: any): number;
            isEqualNode(node: any): boolean;
            getRootNode(): any;
            [PREV]: any;
        };
        readonly observedAttributes: any[];
        readonly ELEMENT_NODE: number;
        readonly ATTRIBUTE_NODE: number;
        readonly TEXT_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_TYPE_NODE: number;
    };
    [EVENT_TARGET]: any;
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
import { DocumentType } from "./document-type.js";
import { Attr } from "./attr.js";
import { Comment } from "./comment.js";
import { DocumentFragment } from "./document-fragment.js";
import { Element } from "./element.js";
import { Range } from "./range.js";
import { Text } from "./text.js";
import { TreeWalker } from "./tree-walker.js";
import { NodeList } from "./node-list.js";
import { SVGElement } from "../svg/element.js";
import { CUSTOM_ELEMENTS } from "../shared/symbols.js";
import { MUTATION_OBSERVER } from "../shared/symbols.js";
import { MIME } from "../shared/symbols.js";
import { DOCTYPE } from "../shared/symbols.js";
import { DOM_PARSER } from "../shared/symbols.js";
import { IMAGE } from "../shared/symbols.js";
import { NEXT } from "../shared/symbols.js";
import { END } from "../shared/symbols.js";
import { EVENT_TARGET } from "../shared/symbols.js";
