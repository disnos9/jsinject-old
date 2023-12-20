let inject_button = document.getElementById("inject");
let url_input = document.getElementById("url"); 
let js_input = document.getElementById("js");

inject_button.addEventListener("click", () => {
    let js = js_input.value;
    
    
    let win = window.open();
    let script = win.document.createElement("script");
    script.innerHTML = js;
    win.document.body.appendChild(script);

})

/* 3RD PARTY SCRIPTS */
let 3rd-car-axle-client = document.getElementById("3rd-car-axle-client");

3rd-car-axle-client.addEventListener("click", () => {
    js_input.value = `fetch("https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/dist/build.js")
                .then((res) => res.text())
                .then((js) => eval(js));`;

    let js = js_input.value;
    
    
    let win = window.open();
    let script = win.document.createElement("script");
    script.innerHTML = js;
    win.document.body.appendChild(script);
})
