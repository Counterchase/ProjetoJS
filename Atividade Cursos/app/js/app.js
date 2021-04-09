
const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
spinner.style.display="none"
async function getCursoss(){
    const url = "http://localhost:3000/Cursos"
    spinner.style.display="block"
    const response = await axios.get(url)
    spinner.style.display="none"
    const CursosList = Array.from(response.data)
    CursosList.forEach(async function(Cursos){
        apiData.innerHTML+=`
            <div class="card m-2" style="width:220px">
               <img src="${Cursos.municipio}">
                <section class="card-body">
                    <h5 class="card-curso">${Cursos.curso}</h5>
                    <p>
                        Ano: ${Cursos.duracao}
                    </p>
                    <p>
                        Genero: ${Cursos.nivel}
                    </p>
                </section>
            </div>
        `
    })   
}

async function search(query){
    const url =  `http://localhost:3000/Cursos?q=${query}`
   
    
    const response = await axios.get(url);
    const CursosList = Array.from(response.data)
    apiData.innerHTML=""
    CursosList.forEach(function(Cursos){
        apiData.innerHTML+=`
            <div class="card m-2" style="width:220px">
               <img src="${Cursos.municipio}">
                <section class="card-body">
                    <h5 class="card-curso">${Cursos.curso}</h5>
                    <p>
                        Ano: ${Cursos.duracao}
                    </p>
                    <p>
                        Genero: ${Cursos.nivel}
                    </p>
                </section>
            </div>
          `
    })
}
const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    search(inputSearch.value)
})
getCursoss()



  






