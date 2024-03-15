function toggleMode() {
  const html = document.documentElement
  // esta é outra (maneira simplificada)
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/light-mode.png')
    img.setAttribute('alt', 'Livia sorrindo no sol')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/dark-mode-op1.png')
    img.setAttribute('alt', 'Livia com filtro de foguindo.')
  }
}