;(() => {
  const btnTheme = document.querySelector('.btn-theme')
  const title = document.querySelector('.title')
  const body = document.querySelector('body')
  const benefits = document.querySelector('.benefits')
  const containerTreino = document.querySelector('.container-treino')
  const hero = document.querySelector('.hero')
  const containerEspecial = document.querySelector('#container-especial')
  const navbar = document.querySelector('.navbar')
  const footer = document.querySelector('.footer2')
  const toggle = document.querySelector('.navbar-toggler')

  let currentTheme = 'ligth'

  btnTheme.addEventListener('click', () => {
    if (currentTheme === 'light') {
      currentTheme = 'dark'
      btnTheme.src = '/assets/button-dark.png'
      body.style.setProperty('--background-color', '#242424')
      body.style.setProperty('color', '#FFF')
      title.style.setProperty('color', '#FFF')
      benefits.style.setProperty('color', '#FFF')
      containerTreino.style.setProperty('color', '#FFF')
      hero.style.setProperty(
        '--background-gradient',
        'linear-gradient(273.14deg, #fb301c 0%, #d5ad42 100%)'
      )
      containerEspecial.style.setProperty(
        '--card-background-gradient',
        'linear-gradient(273.14deg, #fb301c 0%, #d5ad42 100%)'
      )
      navbar.style.setProperty(
        '--navbar-background-gradient',
        'linear-gradient(273.14deg, #fb301c 0%, #d5ad42 100%)'
      )
      footer.style.setProperty(
        '--footer-background-color',
        'linear-gradient(273.14deg, #fb301c 0%, #d5ad42 100%)'
      )
      toggle.style.setProperty('--background-color', 'none')
    } else {
      currentTheme = 'light'
      btnTheme.src = '/assets/button-light.png'
      body.style.setProperty('--background-color', '#FFF')
      body.style.setProperty('color', '#242424')
      title.style.setProperty('color', '#242424')
      benefits.style.setProperty('color', '#242424')
      containerTreino.style.setProperty('color', '#242424')
      hero.style.setProperty(
        '--background-gradient',
        'linear-gradient(180deg, #0a2c9c 0%, #3c79e4 100%)'
      )
      containerEspecial.style.setProperty(
        '--card-background-gradient',
        'linear-gradient(180deg, #0a2c9c 0%, #3c79e4 100%)'
      )
      navbar.style.setProperty(
        '--navbar-background-gradient',
        'linear-gradient(180deg, #0a2c9c 0%, #3c79e4 100%)'
      )
      footer.style.setProperty(
        '--footer-background-color',
        'linear-gradient(180deg, #0a2c9c 0%, #3c79e4 100%)'
      )
      toggle.style.setProperty('--background-color', '#fff')
    }
  })
})()
