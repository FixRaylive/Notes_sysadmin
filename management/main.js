fetch('assets/library/config.json')
.then(response=>response.json())
.then(config=>{
    //Константы объектов
    const header=document.createElement("h1");
    const description=document.createElement("p");
    header.textContent = `${config.header}`;
    description.textContent=`${config.description}`;
    const container=document.getElementById("container");
    const hrefBut =document.createElement("a");
    //hrefBut.textContent="тык";
    const imgTg = document.createElement("img");
    imgTg.src = "assets/img/tgIcon.png";
    imgTg.alt = "Иконка";
    imgTg.width = 40;
    imgTg.height = 40;
    const hObj = config.general.text;
    
    //Добавление в контейнер
    container.appendChild(header);
    container.appendChild(description);
    
   function createtext(v) {
   const el = document.createElement("div");
        el.className = 'text-i';
        el.innerHTML = `<span class="v">${v}</span>`;
        return el;
    };
    function createTextPad(v) {
        const el = document.createElement("div");
        el.className = 'text-h1';
        el.innerHTML = `<span class="v">${v}</span>`;
        return el;
    };
    function createlist(v) {
    const el = document.createElement("div");
        el.className= 'text-l';
        el.innerHTML = `<span class="v">• ${v}</span>`;
        return el;
    };
     Object.entries(hObj).forEach(([k, v])=>{
    const n = parseInt(k.replace('h', ''));
    if(n===1) {
        const textPadding = createTextPad(v);
         container.appendChild(textPadding);
    } else if(n>=5&&n<=11) {
        const list = createlist(v);
        container.appendChild(list);
    } else {
        const text = createtext(v);
        container.appendChild(text);
    }
    });
    container.appendChild(hrefBut);
    hrefBut.appendChild(imgTg);
    
    //Кнопки
    hrefBut.addEventListener("click",function(){
        window.location.href = 'https://t.me/Fixray_govorit';
    });
});
