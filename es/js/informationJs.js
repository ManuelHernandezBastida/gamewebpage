

function checkThisLinks(linkId){
    
    var panel = document.getElementById("informationPanel");
    panel.removeAttribute("hidden");
    var texto = document.getElementById("texto");
    var texto2 = document.getElementById("texto2");
    var titulo = document.getElementById("title");
    var registerPanel = document.getElementById("registerPanel");
    var loginPanel = document.getElementById("loginPanel");
    
    switch(linkId){
        case "cookies":
            titulo.innerHTML="Politica de cookies";
            texto.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
            texto2.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
            break;
        case "privacidad":
            titulo.innerHTML="Politica de privacidad";
            texto.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
            
            texto2.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
            
            break;
            
        case "uso":
             titulo.innerHTML="Terminos de uso";
            texto.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
           
            texto2.innerHTML ='Irure quibusdam in quid enim qui ubi tamen aut magna, an minim singulis illustriora ex commodo fore quae proident veniam nam do eu ipsum magna dolore,  tamen si lorem, te nam consectetur, deserunt de varias. Duis cupidatat eiusmod  iis laborum malis admodum proident, hic summis summis cillum pariatur, deserunt aute ubi ullamco voluptatibus, quibusdam amet eram ut aliqua, senserit enim mandaremus cupidatat a nam est veniam expetendis, e amet cohaerescant. Sunt ingeniis ubi incididunt eu do incididunt do iudicem ubi ne fugiat elit nisi officia ita hic elit quid velit ullamco aut eiusmod ea proident ea esse coniunctione mandaremus summis aliquip ab sed et ipsum vidisse ab labore admodum aliquip. Voluptate noster malis eu dolor, officia minim malis eu ipsum, qui ipsum ullamco voluptate se voluptate cillum ingeniis commodo. Si dolor magna tamen fabulas eu amet officia ex nescius. Incurreret irure dolore consequat anim, fabulas summis nescius cupidatat.';
            
             break;
            
        case "login":
            
            registerPanel.setAttribute("hidden",true);
            loginPanel.removeAttribute("hidden");
            break;
            
        case "register":
                        
            loginPanel.setAttribute("hidden",true);
            registerPanel.removeAttribute("hidden");
            document.getElementById("registerButton").disabled = true;
            break;
            
    }
    
}

function comeBack(){
    var panel = document.getElementById("informationPanel");
    var loginPanel = document.getElementById("loginPanel");
    var registerPanel = document.getElementById("registerPanel");
    panel.setAttribute("hidden",true);
    loginPanel.setAttribute("hidden",true);
    registerPanel.setAttribute("hidden",true);
}