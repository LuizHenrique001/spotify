let barraMusica = document.querySelector('div.barra')
let PausarComecar = document.querySelector('div.btn_play_musica')
let musicaSelecionada = document.querySelector('div#imagem_musica')
let nomeMusica = document.querySelector('a#nomeMusica')

const musicasGlobal = {//Todas as musicas
    nomeMusica: 'Royalty',
    imagemMusica: `images/banner-musica.jpg`,
    linkMusica: 'music/royalty.mp3',
    tempo: 221,
    id: 1
}

function comecarMusica() {
    PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg role="img" onclick="pausarMusica()" class="btn_play_svg" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>` + `
    <audio src="${musicasGlobal.linkMusica}" autoplay></audio>`/* Musica a ser tocada */

    musicaSelecionada.innerHTML = `<img src="${musicasGlobal.imagemMusica}" alt="Banner Musica">`

    nomeMusica.innerHTML = musicasGlobal.nomeMusica
}

function pausarMusica () {
    let PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg onclick="comecarMusica()" class="btn_play_svg" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>`
}
let estadobtn = 'comecar'
function progressoBarra() {
    if(estadobtn == 'comecar'){
        barraMusica.innerHTML = `
        <div class="barra-completar" style="animation: audio ${musicasGlobal.tempo}s;"></div>`
        estadobtn = 'pausar'
    }else if(estadobtn == 'pausar') {
        barraMusica.innerHTML = `
        <div class="barra-completar"></div>`

        estadobtn = 'comecar'
    }
}

/*
const blcok = [
    {
        nome: 'Luiz'
    }
]
console.log(blcok[0].nome)

Criar uma lista com map() pegar o id da musica e adicionar no blcok[0].linkMusica
*/