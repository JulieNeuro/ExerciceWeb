function affichesujets(articles) {
    
    articles.forEach(function (article) {
        var articlesElt = document.getElementById("id");
        
         var titreElt = document.createElement("h2");
        var titreEltdate = document.createElement("h2");
        var titreEltsex = document.createElement("h2");
        titreElt.textContent = 'identifiant du sujet';
        var identElt = document.createElement("p");
        identElt.textContent = article.id;
        titreEltdate.textContent = 'Date de naissance';
        var dateElt = document.createElement("p");
        dateElt.textContent = article.birth_year;
        titreEltsex.textContent = 'Sex du sujet';
        var sexElt = document.createElement("p");
        sexElt.textContent = article.sex;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(titreEltdate);
        articlesElt.appendChild(titreEltsex);
        titreElt.appendChild(identElt);
        titreEltdate.appendChild(dateElt);
        titreEltsex.appendChild(sexElt);
        
        });
    return 0;
   
}

function affichesujet(article) {
    var articlesElt = document.getElementById("id");
        
        var titreElt = document.createElement("h2");
        var titreEltdate = document.createElement("h2");
        var titreEltsex = document.createElement("h2");
        titreElt.textContent = 'identifiant du sujet';
        var identElt = document.createElement("p");
        identElt.textContent = article.id;
        titreEltdate.textContent = 'Date de naissance';
        var dateElt = document.createElement("p");
        dateElt.textContent = article.birth_year;
        titreEltsex.textContent = 'Sex du sujet';
        var sexElt = document.createElement("p");
        sexElt.textContent = article.sex;
        var imageElt = document.createElement("img");
        imageElt.src = "../../images/sujet.jpg";
        
        articlesElt.appendChild(imageElt);
    
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(titreEltdate);
        articlesElt.appendChild(titreEltsex);
        titreElt.appendChild(identElt);
        titreEltdate.appendChild(dateElt);
        titreEltsex.appendChild(sexElt);
    return 0;
        
        };


function affichecenter(article) {
    var articlesElt = document.getElementById("id");
        
        var titrenom = document.createElement("h2");
        var titreid = document.createElement("h2");
        titrenom.textContent = 'Nom du Centre';
        var nomEltcen = document.createElement("p");
        nomEltcen.textContent = article.name;
        titreid.textContent = 'Identifiant du centre';
        var idEltcen = document.createElement("p");
        idEltcen.textContent = article.id;
        var imageElt = document.createElement("img");
        imageElt.src = "../../images/hopital.jpg";
        
        articlesElt.appendChild(imageElt);
        
        articlesElt.appendChild(titreid);
        articlesElt.appendChild(titrenom);
        titreid.appendChild(idEltcen);
        titrenom.appendChild(nomEltcen);
    return 0;
        
        };

function affichevisit(article) {
    location.reload();
     var articlesElt = document.getElementById("id");

        var titrevisite = document.createElement("h3");
        titrevisite.textContent = ('Date de la visite: ' +article.when);
        var idvisite = document.createElement("h3");
        idvisite.textContent = ('ID de la visite: '+article.id);

        articlesElt.appendChild(titrevisite);
        articlesElt.appendChild(idvisite);
     
    
    
    return 0;
        
        };


function affichedata(article) {
     var articlesElt = document.getElementById("id");
        
        var titre_nb1 = document.createElement("h2");
        titre_nb1.textContent = 'Nombre 1';
        var nb1 = document.createElement("p");
        nb1.textContent = article.a_number;
        var titre_st1 = document.createElement("h2");
        titre_st1.textContent = 'String 1';
        var st1 = document.createElement("p");
        st1.textContent = article.a_string;
        var titre_nb2 = document.createElement("h2");
        titre_nb2.textContent = 'Nombre 2';
        var nb2 = document.createElement("p");
        nb2.textContent = article.another_number;
        var titre_st2 = document.createElement("h2");
        titre_st2.textContent = 'String 2';
        var st2 = document.createElement("p");
        st2.textContent = article.another_string;
        var titre_id = document.createElement("h2");
        titre_id.textContent = 'Identifiant DATA';
        var iddata = document.createElement("p");
        iddata.textContent = article.id;
        var imageElt = document.createElement("img");
        imageElt.src = "../../images/data.jpg";
        
        articlesElt.appendChild(imageElt);
        
        articlesElt.appendChild(titre_id);
        articlesElt.appendChild(titre_nb1);
        articlesElt.appendChild(titre_st1);
        articlesElt.appendChild(titre_nb2);
        articlesElt.appendChild(titre_st2);
        titre_nb1.appendChild(nb1);
        titre_st1.appendChild(st1);
        titre_nb2.appendChild(nb2);
        titre_st2.appendChild(st2);
        titre_id.appendChild(iddata);
    
    
    return 0;
        
        };


/////////////////////////////////////////////////////////////////////


ajaxGet("https://cointepas.net/example/visits", function (reponse) {
    // Transforme la réponse en un tableau d'articles
   var articles = JSON.parse(reponse);

    //test= articles.slice(1,4);
//    affichesujets(test);
    //test= articles[1];
    //affichesujet(test)
    test = articles;
    
    // Affichage du code de nationalité choisi
document.getElementById("visit").addEventListener("change", function (e) {
    console.log("id visit : " + e.target.value);
 
    test.forEach(function (article) {
    if (e.target.value == article.when) {
        infocenter=article.center_id;
        infosujet = article.subject_id;
        infodata = article.data_id;
    affichevisit(article);
                                    }
                                        })
     
   });
    ////////////////CENTRE
    ajaxGet("https://cointepas.net/example/centers", function (reponse) {
    // Transforme la réponse en un tableau d'articles
   var articles2 = JSON.parse(reponse);
    

    //test= articles.slice(1,4);
//    affichesujets(test);
    //test= articles[1];
    //affichesujet(test)
    test2 = articles2;
 
    // Affichage de la demande de confirmation d'inscription
       
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
    test2.forEach(function (article2) {
            if (e.target.checked && article2.id== infocenter) {
                affichecenter(article2);
                                    }});    
        
   });
        })
    /////////////////
    
        ////////////////SUJET
    ajaxGet("https://cointepas.net/example/subjects", function (reponse) {
    // Transforme la réponse en un tableau d'articles
   var articles3 = JSON.parse(reponse);
    
    test3 = articles3;
 
    // Affichage de la demande de confirmation d'inscription
       
document.getElementById("subject").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
    test3.forEach(function (article3) {
            if (e.target.checked && article3.id== infosujet) {
                affichesujet(article3);
                                    }});    
        
   });
        })
    /////////////////
        
      ////////////////DATA
    ajaxGet("https://cointepas.net/example/data", function (reponse) {
    // Transforme la réponse en un tableau d'articles
   var articles4 = JSON.parse(reponse);
    
    test4 = articles4;
 
    // Affichage de la demande de confirmation d'inscription
       
document.getElementById("data").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
    test4.forEach(function (article4) {
            if (e.target.checked && article4.id== infodata) {
                console.log("ici");
                affichedata(article4);
            }else{
                console.log("vide");
                                    }});    
        
   });
        })
    /////////////////
    
        
});