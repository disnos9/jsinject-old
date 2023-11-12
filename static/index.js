let inject_button = document.getElementById("inject");
let url_input = document.getElementById("url"); 
let js_input = document.getElementById("js");

inject_button.addEventListener("click", () => {
    let js = js_input.value;

    let win = window.open();
    let script = win.document.body.createElement("script");
    script.innerHTML = js;
    console.log(script);
    win.document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            win.document.body.appendChild(script);
        }, 1000);
    })
})

let inject_car_axle_client = document.getElementById("inject-car-axle-client");

inject_car_axle_client.addEventListener("click", () => {
    js_input.value = `fetch("https://raw.githubusercontent.com/car-axle-client/car-axle-client/v5/docs/testing/index.js")
                .then((res) => res.text())
                .then((js) => eval(js));`;

    let js = js_input.value;
    
    
    let win = window.open();
    let script = win.document.createElement("script");
    script.innerHTML = js;
    console.log(js);
    win.document.body.appendChild(script);
})
