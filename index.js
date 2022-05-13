//최애 프로그래밍 언어 박스 클릭//
const firstbox = document.querySelector("button");
const dropbox = document.querySelector("div.option");
const click = document.querySelector("ul");
const menu = document.querySelectorAll("li");

firstbox.addEventListener('click', () => {
        if (click.style.display === "none") {
            click.style.display = "block"
            document.querySelector("button").style.borderColor = "#9B51E0";
            document.querySelector("button").style.outlineColor = "#F8E4FF";
            document.querySelector("button").style.backgroundImage = "URL('Polygon2.png')";
        } else {
            click.style.display = "none";
            document.querySelector("button").style.borderColor = "#c4c4c4";
            document.querySelector("button").style.outlineColor = "transparent";
            document.querySelector("button").style.backgroundImage = "URL('Polygon1.png')";
        }
    });
    
    
    for(let i=0; i<menu.length; i++){
        menu[i].addEventListener('click', (e) => {
            firstbox.innerText = e.target.innerText;
        });
    };
    
    click.addEventListener('click', () => {
        click.style.display = "none";
        document.querySelector("button").style.borderColor = "#c4c4c4";
        document.querySelector("button").style.outlineColor = "transparent";
        document.querySelector("button").style.backgroundImage = "URL('Polygon1.png')";
    });
