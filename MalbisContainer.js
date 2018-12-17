const Update=Symbol();
export default class MalbisContainer extends HTMLElement
{
    connectedCallback(){
        fetch('/addresses.json')
            .then(r=>r.json())
            .then(addresses=>{
                for(let i=0;i<addresses.length;i++)
                {
                    let element=document.createElement("malbis-element");
                    element.name=addresses[i].name;
                    this.appendChild(element);
                }
            });
        this[Update]();
        setInterval(() => this[Update](),1000);
    }
    [Update](){
        fetch("/out.json").then(r=>r.json())
        .then(data=>{
            for(let i=0;i<data.length;i++)
            {
                this.children[i].value=data[i];
            }
        })
    }
}