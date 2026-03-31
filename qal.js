let box = $('#box');
let btn = $('#btn');

btn.on("click",function() {
    box.css("background","green");
})

btn.on("dblclick",function() {
    box.css("width","400px");
})

btn.on("mouseenter",function() {
    box.css("background","red");
    box.text("Hovering");
})

btn.on("mouseleave",function() {
    box.css("background","green");
    box.text("");
})

let inputname = $('#name');
let res = $("#result");

inputname.on("input",function() {
    let curentstring = res.html();
    let value = $(this).val();
    res.html(curentstring + "<br>" + value);
    value = $(this).val("");
})

let choose_country = $("#country");

choose_country.on("change",function() {
    let value = $(this).val();
    res.html(value);
});
