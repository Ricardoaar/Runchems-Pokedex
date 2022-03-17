
const container  = document.querySelector(".app")
let htmlContent = '';
var cant = 898;
const URL = `https://pokeapi.co/api/v2/pokemon?limit=${cant}`

    const getData = async () => {

    const response = await fetch(URL);
    const data = await response.json();
   
        for(let i = 0; i < cant; i++){
            const name = data.results[i].name
            let image;
            

            // const xp = data.base_experience.[i];

            // const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
            if(i < 9){
                image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i+1}.png`
            }else if(i < 99){
                image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i+1}.png`
            }
            else{
                image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i+1}.png`
              
            }
             
            
            htmlContent += 
            `
            <div class="container">
                <div class="card"> 
                    <div class="face face1 types${i}" >
                        <p class="num">#${i+1}</p>
                        <div class="content">
                            <img src="${image}">
                        <h3> ${name.toUpperCase()}</h3>
                        </div>
                        <p class="type type${i}">Cargando...</p>
                    </div>
                    <div class="face face2">
                        <div class="content">
                        <section class="stat-xp">
                            <p class="stat-tittle">Experiencia</p>
                            <p class="xp xp${i}">Cargando...</p>
                        </section>
                        <section class="stats-column">
                            <section class="stat">
                                <p class="stat-tittle ">Vida</p>
                                <p class="hp${i}">Cargando...</p>
                            </section>
                            <section class="stat">
                                <p class="stat-tittle">Ataque</p>
                                <p class="attack${i}">Cargando...</p>
                            </section>
                            <section class="stat">
                                <p class="stat-tittle">Defensa</p>
                                <p class="defense defense${i}">Cargando...</p>
                            </section
                        </section>
                        </div>
                    </div>
                </div>
              </div>
              `
        }
        container.innerHTML = htmlContent;
    }


    const getStats = async () => {
        for(let i = 0; i < cant; i++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            const data = await response.json();
            
            xp      = data.base_experience
            hp      = data.stats[0].base_stat
            attack  = data.stats[1].base_stat
            defense = data.stats[2].base_stat
            type    = data.types[0].type.name
            myDiv = document.querySelector(`.types${i}`)

            if(type == 'fire' ){
                myDiv.classList.add('type-fire')
            }else{
                myDiv.classList.add(`type-${type}`)

            
            
            }
            

            document.querySelector(`.xp${i}`).innerHTML = xp  
            document.querySelector(`.hp${i}`).innerHTML = hp  
            document.querySelector(`.attack${i}`).innerHTML = attack  
            document.querySelector(`.defense${i}`).innerHTML = defense
            document.querySelector(`.type${i}`).innerHTML = type.toUpperCase()

            
        }
       
    }




    const main = () => {
        getData()
        setTimeout(() =>{
            getStats(),
            1000
        });
    }

    main()

  



 



