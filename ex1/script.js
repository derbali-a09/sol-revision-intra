var btnShow = document.getElementById('btnShow')
if (btnShow != null) {
    btnShow.addEventListener('click', function () {
        fetch("ex1.json")
            .then(reponse => {
                return reponse.json()
            })
            .then(data => {
                let emp = data.data //mettre le contenu du fichier dans un array emp
                let tableEmp = document.getElementById("tableEmp") //Aller chercher le tableau parent
                // vider le tableau
                while (tableEmp.firstChild) {
                    tableEmp.firstChild.remove()
                }
                //Verification du btn radio selectionner
                if(document.getElementById("radioAll").checked) {
                    //boucle for pour ramplir le tableau
                    for (let index = 0; index < emp.length; index++) {
                        let ligne = document.createElement("tr");
                        let colNom = document.createElement("td");
                        colNom.innerHTML = emp[index].fullName;
                        let colSal = document.createElement("td");
                        colSal.innerHTML = emp[index].salary;
                        //append les td au tr et le tr au parent
                        ligne.appendChild(colNom);
                        ligne.appendChild(colSal);
                        tableEmp.appendChild(ligne);
                    }
                }
                else if (document.getElementById("radioTop5").checked) {
                    // trier le tableau emp par order décroissant des salaires
                    emp.sort(function (a, b) {return  b.salary - a.salary});
                    //Ajouter les tops 5 
                    for (let index = 0; index < 5; index++) {
                        let ligne = document.createElement("tr");
                        let colNom = document.createElement("td");
                        colNom.innerHTML = emp[index].fullName;
                        let colSal = document.createElement("td");
                        colSal.innerHTML = emp[index].salary;
                        //append les td au tr et le tr au parent
                        ligne.appendChild(colNom);
                        ligne.appendChild(colSal);
                        tableEmp.appendChild(ligne);
                    }
                }
            })
    })
}
