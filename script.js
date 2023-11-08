console.log("hey");
let addcart = document.getElementById('addcart')
let product = [
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        price: "220$"
    },
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle2",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        price: "165$"
    },
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle3",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        price: "145$"
    },
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle4",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        btn: "Add to cart",
        price: "198$"
    },
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle5",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        price: "104$"
    },
    {
        imgsrc: "https://www.sefiles.net/merchant/91/images/site/giant_defy_composite_3_compact_12_z-slimC.jpg?t=1517345073613",
        name: "Road Cycle6",
        des: "Touring bicycles are another special type of road bike. They are designed to be ridden on pavement,but are more durable for use on self-supported long-distance riding. They have all of the necessary mounting bolts for cargo racks and fenders, and although they still have a drop handlebar, theyusually have a more relaxed frame design so that the rider is more upright, for more comfort when riding long distances for multiple days at a time. They have a lower gear range compared to regular road bikes, to allow for carrying heavy loads up steep hills. They also make good commuter bicycles , because of their durability and ability to carry heavy loads.",
        price: "165$"
    }
]
for (let i = 0; i < product.length; i++) {
    let value = product[i]
    let a = document.createElement('div')
    let h3 = document.createElement('h4')
    let img = document.createElement('img')
    let h4 = document.createElement('h4')
    let name_cycle = document.createElement('h3')
    let desp = document.createElement('p')
    let h2 = document.createElement('h2')
    let span = document.createElement('span')
    let button = document.createElement('button')
    button.innerHTML = "Add to Cart"
    h4.innerHTML = `Description`
    h3.innerHTML = `${value.name}`
    desp.innerHTML = `${value.des}`
    img.src = value.imgsrc
    h2.innerHTML = `Price`
    name_cycle.innerHTML = `Name of cycle`
    span.innerHTML = `${value.price}`
    button.setAttribute("onclick", "making(this)");
    // button.addEventListener("click", (e) => {
    //     // making(value.imgsrc, value.name, value.price, value);
    // })
    a.setAttribute("class", "cartdiv");
    a.appendChild(img)
    a.appendChild(h4)
    a.appendChild(desp)
    a.appendChild(name_cycle)
    a.appendChild(h3)
    a.appendChild(h2)
    a.appendChild(span)
    a.appendChild(button)
    addcart.appendChild(a)
}


let getcartdiv = document.getElementById('getcart')
function making(e) {
    console.log(e.parentNode);
    console.log("hey");



    let creatediv = document.createElement('div')
    let img = document.createElement('img')
    let p4_cyclename = document.createElement('p')
    let p4_cycleprice = document.createElement('p')
    let btnforonetimedel = document.createElement('button')
    let quantity = document.createElement('h3')

    


    creatediv.setAttribute('class', 'cartDiv')
    quantity.setAttribute("class" , "quan")
    btnforonetimedel.setAttribute("onclick", "deltetecart(this)")



    
    btnforonetimedel.style.width = "10%"
    img.style.marginLeft = "5%";
    img.style.marginRight = "10%";
    img.style.width = "15%"
    img.src = e.parentNode.firstElementChild.src
    p4_cycleprice.style.marginLeft = "48px";
    creatediv.style.display = "flex"




    p4_cycleprice.innerHTML = e.parentNode.childNodes[6].innerHTML
    p4_cyclename.innerHTML = e.parentNode.childNodes[4].innerHTML
    quantity.innerHTML = 1
    btnforonetimedel.innerHTML = "Delete"


    
    creatediv.appendChild(img)
    creatediv.appendChild(p4_cyclename)
    creatediv.appendChild(p4_cycleprice)
    creatediv.appendChild(quantity)
    creatediv.appendChild(btnforonetimedel)
    getcartdiv.prepend(creatediv)
}
function onclickerdiv(e) {
    console.log(e);
}
function deltetecart(e) {
    e.parentNode.innerHTML = ""
}
function delall() {
    getcartdiv.innerHTML = ""
}