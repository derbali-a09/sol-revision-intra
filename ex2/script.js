var btnCrypterV1 = document.getElementById("crypterv1")
if(btnCrypterV1!=null){
    btnCrypterV1.addEventListener('click', function() {
        let str = document.getElementById("textev1").value
        let crypte = ""

        for (let index = 0; index < str.length; index++) {
            var c = str[index];
            switch (c) {
                case 'a':
                    crypte += '1'
                    break
                case 'A':
                    crypte += '1'
                    break
                case 'e':
                    crypte += '2'
                    break
                case 'E':
                    crypte += '2'
                    break
                case 'i':
                    crypte += '3'
                    break
                case 'I':
                    crypte += '3'
                    break
                case 'o':
                    crypte += '4'
                    break
                case 'O':
                    crypte += '4'
                    break
                case 'u':
                    crypte += '5'
                    break
                case 'U':
                    crypte += '5'
                    break
                case 'y':
                    crypte += '6'
                    break;
                case 'Y':
                    crypte += '6'
                    break
                default:
                    crypte += c
                    break
            }
        }
        document.getElementById('resultatv1').innerHTML = "Texte crypté: " + crypte
    
    })
}


var btnCrypterV2 = document.getElementById("crypterv2")
if(btnCrypterV2!=null){
    btnCrypterV2.addEventListener('click', function() {
        let str = document.getElementById("textev2").value
        let select  = document.getElementById('selectv2')
        let N = parseInt(select.options[select.selectedIndex].innerHTML)
        let strCrypt = ""
        for (let index = 0; index < str.length; index++) {
            if(str[index] == " "){
                strCrypt += str[index]
                continue
            }    
            let code =  str.charCodeAt(index); //code ASCII
            // lettre majuscule
            if (code >= 65 && code <= 90) { //A-Z
                code = (code - 65 + N) % 26 + 65; //circulaire
            } else if (code >= 97 && code <= 122) { // lettre miniscule a -z
                code = (code - 97 + N) % 26 + 97; //circulaire 
            } 
            strCrypt += String.fromCharCode(code);
        }
        // afficher la chaine de charactere cryptee
        document.getElementById('resultatv2').innerHTML = "Texte crypté V2: " + strCrypt
    })
}

