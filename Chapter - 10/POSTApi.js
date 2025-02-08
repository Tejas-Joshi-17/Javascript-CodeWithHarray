const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)                         // { title: 'Harry2', body: 'bhai2', userId: 1100, id: 101 }
    console.log(await getTodo(5))
    // {
    //     userId: 1,
    //     id: 5,
    //     title: 'nesciunt quas odio',
    //     body: 'repudiandae veniam quaerat sunt sed\n' +
    //       'alias aut fugiat sit autem sed est\n' +
    //       'voluptatem omnis possimus esse voluptatibus quis\n' +
    //       'est aut tenetur dolor neque'
    //   }
}

mainFunc()