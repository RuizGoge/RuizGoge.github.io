window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let kilosFrutilla = document.getElementById('kilos-frutilla')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad') 


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            //ubicación actual    
           const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=89ae159780399c8176b212fe7b63d92e`

           //ubicación por ciudad
           //const url = `https://api.openweathermap.org/data/2.5/weather?q=Santa Cruz&lang=es&units=metric&appid=89ae159780399c8176b212fe7b63d92e`

           console.log(url)

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                console.log(data)
                
                let temp = Math.round(data.main.temp)
                //console.log(temp)
                temperaturaValor.textContent = `${temp} ° C`
                a ='5 y 10'
                b ='13 y 14'
                c = '15 y 16'
                d = '18 y 19'
                e = '22 y 23'
                f = '25 y 30'
                g = '27 y 33'
                h = '29 y 35'
                i = '45 y 50'
                j = '65 y 70'
                k = '85 y 90'
                l = '130 y 145'
                m = '135 y 150'
                n = '150 y 155'
                o = '155 y 160'

                
                switch (temp) {
                  case 6:
                    console.log(a)
                    kilosFrutilla.textContent = `Comprar entre ${a} kg`
                    break;
                  case 7:
                    console.log(a)
                    kilosFrutilla.textContent = `Comprar entre ${a} kg` 
                    break;
                  case 8:
                    console.log(b)
                    kilosFrutilla.textContent = `Comprar entre ${b} kg` 
                    break;
                  case 9:
                    console.log(b)
                    kilosFrutilla.textContent = `Comprar entre ${b} kg` 
                    break;
                  case 10:
                    console.log(c)
                    kilosFrutilla.textContent = `Comprar entre ${c} kg` 
                    break;
                  case 11:
                    console.log(c)
                    kilosFrutilla.textContent = `Comprar entre ${c} kg` 
                    break;
                  case 12:
                    console.log(d)
                    kilosFrutilla.textContent = `Comprar entre ${d} kg` 
                    break;
                  case 13:
                    console.log(d)
                    kilosFrutilla.textContent = `Comprar entre ${d} kg` 
                    break;
                  case 14:
                    console.log(e)
                    kilosFrutilla.textContent = `Comprar entre ${e} kg` 
                    break;
                  case 15:
                    console.log(e)
                    kilosFrutilla.textContent = `Comprar entre ${e} kg` 
                    break;
                  case 16:
                    console.log(f)
                    kilosFrutilla.textContent = `Comprar entre ${f} kg` 
                    break;
                  case 17:
                    console.log(f)
                    kilosFrutilla.textContent = `Comprar entre ${f} kg` 
                    break;
                  case 18:
                    console.log(g)
                    kilosFrutilla.textContent = `Comprar entre ${g} kg` 
                    break;
                  case 19:
                    console.log(g)
                    kilosFrutilla.textContent = `Comprar entre ${g} kg` 
                    break;
                  case 20:
                    console.log(h)
                    kilosFrutilla.textContent = `Comprar entre ${h} kg` 
                    break;
                  case 21:
                    console.log(h)
                    kilosFrutilla.textContent = `Comprar entre ${h} kg` 
                    break;
                  case 22:
                    console.log(i)
                    kilosFrutilla.textContent = `Comprar entre ${i} kg` 
                    break;
                  case 23:
                    console.log(i)
                    kilosFrutilla.textContent = `Comprar entre ${i} kg` 
                    break;
                  case 24:
                    console.log(j)
                    kilosFrutilla.textContent = `Comprar entre ${j} kg` 
                    break;
                  case 25:
                    console.log(j)
                    kilosFrutilla.textContent = `Comprar entre ${j} kg` 
                    break;
                  case 26:
                    console.log(k)
                    kilosFrutilla.textContent = `Comprar entre ${k} kg` 
                    break;
                  case 27:
                    console.log(k)
                    kilosFrutilla.textContent = `Comprar entre ${k} kg` 
                    break;
                  case 28:
                    console.log(l)
                    kilosFrutilla.textContent = `Comprar entre ${l} kg` 
                    break;
                  case 29:
                    console.log(l)
                    kilosFrutilla.textContent = `Comprar entre ${l} kg` 
                    break;
                  case 30:
                    console.log(m)
                    kilosFrutilla.textContent = `Comprar entre ${m} kg` 
                    break;
                  case 31:
                    console.log(m)
                    kilosFrutilla.textContent = `Comprar entre ${m} kg` 
                    break;
                  case 32:
                    console.log(n)
                    kilosFrutilla.textContent = `Comprar entre ${n} kg` 
                    break;
                  case 33:
                    console.log(n)
                    kilosFrutilla.textContent = `Comprar entre ${n} kg` 
                    break;
                  case 34:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 35:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 36:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 37:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 38:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 39:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
                  case 40:
                    console.log(o)
                    kilosFrutilla.textContent = `Comprar entre ${o} kg` 
                    break;
              
                  default:
                    kilosFrutilla.textContent = `Este programa contempla entre 6 y 40 grados`
                    break;
                }               

                //console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                
                //para iconos estáticos
                //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                //icono.src = urlIcon
                //console.log(data.weather[0].icon)

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='cloudy-day-1.svg'
                      console.log('por defecto');
                  }

            })
            .catch( error => {
                //console.log(error)
            })
       })
          
    }
})
