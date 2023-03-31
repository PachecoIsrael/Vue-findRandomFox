import axios from 'axios'
import $ from 'jquery'

// setInterval(function(){
// },3000)
const teste = axios.get('https://randomfox.ca/floof').then(function(data){
            $('#imagem-raposa').attr('src', data.data.image)
        })
        console.log(teste)
class FoxReload{

    reloadFox(){
        const teste = axios.get('https://randomfox.ca/floof').then(function(data){
            $('#imagem-raposa').attr('src', data.data.image)
        })
        console.log(teste)
    }
}

// reloadFox()

export default new FoxReload()

// $('#btn-reload').on('click', function(){
//     reloadFox()
// })
