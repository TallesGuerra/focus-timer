let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    
    const mode = darkMode ? 'light' : 'dark' //se p darkMode for verdadeiro ENTAO usar o light, senão, usar o dark.    
    
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode // diz que o valor autal é o contrário (!) do valor inicial, toda vez que o botão for clicado o darkMode é trocado entre True e False
} )