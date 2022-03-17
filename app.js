
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
                     <img  src="./poke.png" class="face1-img"> 
                        <p class="num">#${i+1}</p>
                        <div class="content">
                            <img class="img-poke" src="${image}">
                        <h3 class="name-poke"> ${name.toUpperCase()}</h3>
                        </div>
                        <p class="type type${i}">Cargando...</p>
                    </div>
                    <div class="face  face2 typess${i}">
                        <div class="content">
                        <section class="stat-xp">
                            <p class="stat-tittle">Experiencia</p>
                            <p class="xp xp${i}">Cargando...</p>
                        </section>
                        <section class="stats-column">
                            <section class="stat">
                                <p class="stat-tittle ">HP</p>
                                <p class="hp${i} cant">Cargando...</p>
                            </section>
                            <section class="stat">
                                <p class="stat-tittle">Ataque</p>
                                <p class="attack${i} cant">Cargando...</p>
                            </section>
                            <section class="stat">
                                <p class="stat-tittle">Defensa</p>
                                <p class="defense${i} cant">Cargando...</p>
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
            let typePoke;
            let typePoke2;
            let allTypes;
          
            
            xp      = data.base_experience
            hp      = data.stats[0].base_stat
            attack  = data.stats[1].base_stat
            defense = data.stats[2].base_stat
            type    = data.types[0].type.name
            type2   = data.types;
            

            if (type2[1] == undefined){
                typePoke2 = ''
            }else{   
                typePoke2 = data.types[1].type.name
                    
            }
           
            typePoke  = translateType(type)
            type2Poke = translateType(typePoke2)
 
            myDiv = document.querySelector(`.types${i}`)

            if(type == 'fire' ){
                myDiv.classList.add('type-fire')
            }else{
                myDiv.classList.add(`type-${type}`)
            }

            myDiv2 = document.querySelector(`.typess${i}`)
            if(type == 'fire' ){
                myDiv2.classList.add('type-fire')
            }else{
                myDiv2.classList.add(`type-${type}`)
            }

            if (typePoke2 == ''){
                allTypes = `<p class="types-esp">${typePoke}</p`
            }else{
               allTypes =
                 `
               <section class="all-types">
                <p class="types-esp">${typePoke}</p>
                <p class="types-esp">${type2Poke}</p>
                </section>
                ` 
            }

            document.querySelector(`.xp${i}`).innerHTML = xp  
            document.querySelector(`.hp${i}`).innerHTML = hp  
            document.querySelector(`.attack${i}`).innerHTML = attack  
            document.querySelector(`.defense${i}`).innerHTML = defense
            document.querySelector(`.type${i}`).innerHTML = allTypes
        }
       
    }


    const translateType = (type) => {
        switch(type){
            case 'steel'    : typePoke =  'Acero'
                break;
            case 'water'    : typePoke =  'Agua'
                break;
            case 'bug'      : typePoke =  'Bicho'
                break;
            case 'dragon'   : typePoke =  'Dragón'
                break;
            case 'electric' : typePoke =  'Eléctrico'
                break;
            case 'ghost'    : typePoke =  'Fantasma'
                break;
            case 'fire'     : typePoke =  'Fuego'
                break;
            case 'fairy'    : typePoke =  'Hada'
                break;
            case 'ice'      : typePoke =  'Hielo'
                break;
            case 'fighting' : typePoke =  'Lucha'
                break;
            case 'normal'   : typePoke =  'Normal'
                break;
            case 'grass'    : typePoke =  'Planta'
                break;
            case 'psychic'  : typePoke =  'Psíquico'
                break;
            case 'rock'     : typePoke =  'Roca'
                break;
            case 'dark'     : typePoke =  'Siniestro'
                break;
            case 'ground'   : typePoke =  'Tierra'
                break;
            case 'poison'   : typePoke =  'Veneno'
                break;
            case 'flying'   : typePoke =  'Volador'
                break;
            default: typePoke = '' 
           }
           
           return typePoke;
           
    }

    const main = () => {
        getData()
        setTimeout(() =>{
            getStats(),
            1000
        });
    }



    main()

  



 



