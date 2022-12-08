let barraMusica = document.querySelector('div.barra')
let PausarComecar = document.querySelector('div.btn_play_musica')
let musicaSelecionada = document.querySelector('div#imagem_musica')
let nomeMusica = document.querySelector('a#nomeMusica')
let containerMusicas = document.querySelector('div.center_musicas')

const musicaLista = [
    {
        nomeMusica: 'Royalty',
        descricaoMusica: 'Musica Royalty',
        imagemMusica: `images/img-royalty.jpg`,
        linkMusica: 'music/royalty.mp3',
        tempo: 221,
        id: 0
    },
    {
        nomeMusica: 'Miss you',
        descricaoMusica: 'Musica Oliver Tree',
        imagemMusica: `images/img-missyou.jpg`,
        linkMusica: 'music/Oliver Tree .mp3',
        tempo: 169,
        id: 1
    },
    {
        nomeMusica: 'Heat Waves',
        descricaoMusica: 'Musica Glass Animals',
        imagemMusica: `images/img-heatwaves.jpg`,
        linkMusica: 'music/Glass Animals - Heat Waves (Lyrics).mp3',
        tempo: 237,
        id: 2
    },
    {
        nomeMusica: 'Heat Instrumental',
        descricaoMusica: 'Musica Heat Instrumental',
        imagemMusica: `images/img-heatinstrumental.jpg`,
        linkMusica: 'music/heatinstrumental.mp3',
        tempo: 204,
        id: 3
    }
]

function comecarMusica() {
    PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg role="img" onclick="pausarMusica()" class="btn_play_svg" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>`+`
    <audio src="${musicaLista[idMusica].linkMusica}" autoplay></audio>`/* Musica a ser tocada */

    musicaSelecionada.innerHTML = `<img src="${musicaLista[idMusica].imagemMusica}" alt="Banner Musica">`

    nomeMusica.innerHTML = musicaLista[idMusica].nomeMusica
}

function pausarMusica () {
    let PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg onclick="comecarMusica()" class="btn_play_svg" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>`
}
function proximaMusica() {
    if(idMusica < 3){
        clickMusica(idMusica + 1)
    }

}

function voltarMusica() {
    if(idMusica == 0){
        clickMusica(idMusica)
    }else {
        clickMusica(idMusica - 1)
    }
}

let estadobtn = 'comecar'
function progressoBarra() {
    if(estadobtn == 'comecar'){
        barraMusica.innerHTML = `
        <div class="barra-completar" style="animation: audio ${musicaLista[idMusica].tempo}s;"></div>`
        estadobtn = 'pausar'
    }else if(estadobtn == 'pausar') {
        barraMusica.innerHTML = `
        <div class="barra-completar"></div>`

        estadobtn = 'comecar'
    }
}

spotify = () => {//AParecer Musicas
    musicaLista.map((value)=> {
        containerMusicas.innerHTML += `
        <div onclick="clickMusica(${value.id})" class="container_musica_play" id="${value.id}">
            <img src="${value.imagemMusica}" alt="Musica">
            <p class="nome_musica">
                ${value.nomeMusica}
            </p>
            <p class="descricao_musica">
                ${value.descricaoMusica}
            </p>
        </div>`
    })
}

spotify()

let idMusica
function clickMusica (id) {//Escolher Musica por id
    idMusica = id
    comecarMusica()
    estadobtn = 'comecar'
    progressoBarra()
}
