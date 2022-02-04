var app = new Vue({
    el: '#app',
    data: {
        //Exemplo V-bind
        teste: 'Que bacana!',
        //Exemplo V-model
        inputUsuario: '',
        //Exemplo V-if
        mostrar: 'Esconder',
        //Exemplo V-for
        lista: [{nome: 'craque', idade:'22'}, {nome: 'maestro', idade: '34'}]
    }
})

