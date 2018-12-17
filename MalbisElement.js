let Name=Symbol();
let Value=Symbol();
export default class MalbisElement extends HTMLElement
{
    get name(){
        return this[Name];
    }
    set name(val){
        if(val===this[Name]) return;
        this[Name]=val;
        if(this.children[0]) this.children[0].innerText=val+": ";
    }
    get value(){
        return this[Value];
    }
    set value(val){
        if(val===this[Value]) return;
        this[Value]=val;
        if(this.children[1]) this.children[1].innerText=val;
    }
    connectedCallback(){
        this.appendChild(document.createElement("span"));
        this.appendChild(document.createElement("span"));
        this.children[0].innerText=this.name+": ";
        this.children[1].innerText="???";
    }
}