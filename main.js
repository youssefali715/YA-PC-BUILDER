var select = document.getElementById('cpu');
var value = select.options[select.selectedIndex].value;

var select2 = document.getElementById('MotherBoard');
var value2 = select2.options[select2.selectedIndex].value;

var select3 = document.getElementById('Memory');
var value3 = select3.options[select3.selectedIndex].value;

var select4 = document.getElementById('Video');
var value4 = select4.options[select4.selectedIndex].value;

var select5 = document.getElementById('Case');
var value5 = select5.options[select5.selectedIndex].value;

var select6 = document.getElementById('Power');
var value6 = select6.options[select6.selectedIndex].value;

var select7 = document.getElementById('Storage');
var value7 = select7.options[select7.selectedIndex].value;

var select8 = document.getElementById('Cooler');
var value8 = select8.options[select8.selectedIndex].value;

var select9 = document.getElementById('OS');
var value9 = select9.options[select9.selectedIndex].value;


window.onload = () => {

    [...document.querySelector(`#cpu`).options].filter(x => x.value === value)[0].setAttribute('selected', true);
};
window.load = () => {
    
    [...document.querySelector(`#Motherboard`).options].filter(y => y.value2 === value2)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Memory`).options].filter(y => y.value3 === value3)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Video`).options].filter(y => y.value4 === value4)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Case`).options].filter(y => y.value5 === value5)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Power`).options].filter(y => y.value6 === value6)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Storage`).options].filter(y => y.value7 === value7)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#Cooler`).options].filter(y => y.value8 === value8)[0].setAttribute('selected', true);
}
window.load = () => {
    
    [...document.querySelector(`#OS`).options].filter(y => y.value9 === value9)[0].setAttribute('selected', true);
}
function save(){
    value = select.options[select.selectedIndex].value;
    console.log(value); // en
    let myclass = document.getElementById("imgs")
    if (value == "i9-12900k"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/19-118-339-05.jpg")
        myclass.appendChild(div2)
    }else if(value == "i7-12700k"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/19-118-343-05.jpg")
        myclass.appendChild(div2)
    }else if(value == "i5-12600K"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/19-118-347-05.jpg")
        myclass.appendChild(div2)
    }

    value2 = select2.options[select2.selectedIndex].value;
    console.log(value2); // en
    if (value2 == "ASUS STRIX Z690-E GAMING WIFI ATX Intel Motherboard"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/13-119-512-V01.jpg")
        myclass.appendChild(div2)
    }else if(value2 == "ASUS Prime Z690-P D4 LGA 1700 Intel Motherboard"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/13-119-511-V01.jpg")
        myclass.appendChild(div2)
    }else if(value2 == "ASUS STRIX Z690-A GAMING WIFI D4 ATX Intel Motherboard"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/13-119-505-V07.jpg")
        myclass.appendChild(div2)
    }
    
    value3 = select3.options[select3.selectedIndex].value;
    console.log(value3); // en
    if (value3 == "Crucial 8GB DDR5 4800"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/20-156-283-V01.jpg")
        myclass.appendChild(div2)
    }else if(value3 == "Crucial 8GB * 2 DDR5 4800"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/20-156-286-V01.jpg")
        myclass.appendChild(div2)
    }else if(value3 == "OLOy Blade RGB 8GB * 2 DDR5 5600"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/20-821-490-V01.jpg")
        myclass.appendChild(div2)
    }

    value4 = select4.options[select4.selectedIndex].value;
    console.log(value4); // en
    if (value4 == "GIGABYTE GEFORCE RTX 3060 Ti"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/14-932-469-V01.jpg")
        myclass.appendChild(div2)
    }else if(value4 == "EVGA GEFORCE RTX 2080 Ti"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/1FT-001K-003E4-V21.jpg")
        myclass.appendChild(div2)
    }else if(value4 == "MSI GEFORCE GT 710"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/14-127-931-01.jpg")
        myclass.appendChild(div2)
    }

    value5 = select5.options[select5.selectedIndex].value;
    console.log(value5); // en
    if (value5 == "Antec Dark League DF600 FLUX, Mid-Tower ATX Gaming Case"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/11-129-268-36.jpg")
        myclass.appendChild(div2)
    }else if(value5 == "Corsair iCUE 5000X RGB Tempered Glass Mid-Tower ATX PC Smart Case"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/11-139-163-20.jpg")
        myclass.appendChild(div2)
    }else if(value5 == "Corsair 4000D Airflow CC-9011200-WW Black Steel"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/11-139-156-V01.jpg")
        myclass.appendChild(div2)
    } 

    value6 = select6.options[select6.selectedIndex].value;
    console.log(value6); // en
    if (value6 == "CORSAIR CX-F RGB Series CX750F RGB 750W 80 PLUS Bronze Fully Modular ATX Power Supply"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/17-139-261-01.jpg")
        myclass.appendChild(div2)
    }else if(value6 == "ASUS ROG STRIX 850G 850W White Edition Power Supply"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/17-139-278-01.jpg")
        myclass.appendChild(div2)
    }else if(value6 == "EVGA SuperNOVA 650 G5"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/17-438-163-Z01.jpg")
        myclass.appendChild(div2)
    } 

    value7 = select7.options[select7.selectedIndex].value;
    console.log(value7); // en
    if (value7 == "Seagate 2TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/22-184-773-V01.jpg")
        myclass.appendChild(div2)
    }else if(value7 == "Seagate 4TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/22-184-797-V04.jpg")
        myclass.appendChild(div2)
    }else if(value7 == "WD 8TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/")
        myclass.appendChild(div2)
    } 
     else if(value7 == "WD 18TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/A994S2102127RkcW.jpg")
        myclass.appendChild(div2)
     } else if(value7 == "WD 8TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/")
        myclass.appendChild(div2)
     }else if(value7 == "Samsung EVO 1TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/20-147-790-V01.jpg")
        myclass.appendChild(div2)
     } else if(value7 == "Samsung EVO 2TB"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/20-147-796-V01.jpg")
        myclass.appendChild(div2)
     }

    value8 = select8.options[select8.selectedIndex].value;
    console.log(value8); // en
    if(value8 == "Thermaltake 120mm"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll300/35-106-691-01.jpg")
        myclass.appendChild(div2)
     } else if(value8 == "Vetroo 240mm"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll300/APNCS2206070K7Q6UDB.jpg")
        myclass.appendChild(div2)
     }else if(value8 == "CORSAIR 120mm"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll300/35-181-216-V01.jpg")
        myclass.appendChild(div2)
     } else if(value8 == "MSI 240mm"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "https://c1.neweggimages.com/ProductImageCompressAll125/35-846-027-V01.jpg")
        myclass.appendChild(div2)
     }

    value9 = select9.options[select9.selectedIndex].value;
    console.log(value9); // en
    if(value9 == "Windows 10 Home" ||  value9 == "Windows 10 Pro"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "windows-10-logo-46FA00B9A1-seeklogo.com.png")
        myclass.appendChild(div2)
    } else if(value9 == "Windows 10 Pirated $0 + Free Virus"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "rickroll.png")
        myclass.appendChild(div2)
     }else if(value9 == "Windows 11 Home" ||  value9 == "Windows 11 Pro"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "Windows-11-logo.jpg")
        myclass.appendChild(div2)
     } else if(value9 == "Windows 11 Pirated $0 + Free Virus"){
        div2 = document.createElement("img")
        div2.setAttribute("src", "Untitled.png")
        myclass.appendChild(div2)
     }
}


