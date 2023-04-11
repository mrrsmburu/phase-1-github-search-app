document.addEventListener('DOMContentLoaded', init)


const baseUrl = 'https://api.github.com/search/users?q='

const init = {} =>{
    const userform = document.getElementById('github-form')

userForm.addEventListener('submit', (event) => {
event.preventDefault();

// get our user input value
let userInput = event.target.search.value

// invoke get user function
//getUsers(userInput)
getRepos(userInput)
})
}

const configs = {
    methods: 'GET',
    headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "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,
        //"X-Github-Api-Version": "2022-11-28"
    }
}

const getUsers = (user) => {
    
    fetch(${baseUrl}${user})
    .then((res)=> res.json{})
    .then({data} => renderItems(data['items']))
    }


const renderItems = {data} => {
    console.log('data', data);

    let ul = document.getElementById('user-list')

     data.forEach(element => {
        console.log{'abc',element};
        let li = document.createElement('li')
        li.textContent = $ {element.login} - ${element.url}
        ul.appendChild(li) 

    });
}

document.addEventListener('DOMContentLoaded',init)


