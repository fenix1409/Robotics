function FormData() {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbx1jcBGSdXStxl-EubsHgvjXZomEfQiN3TIgngEQgf6N8M-_fg0cUz4STi9Aqtat9P0fA/exec";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: (`Name=${e.target.name.value}&Surname=${e.target.surname.value}&Phone=${e.target.phone.value}&Age=${e.target.age.value}&Course=${e.target.course.value}`)

        }).then(res => res.text()).then(data => {
            alert(data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='name' /><br />
            <input name='surname' placeholder='surname' /><br />
            <input name='phone' placeholder='phone' /><br />
            <input name='age' placeholder='age' /><br />
            <input name='course' placeholder='course' /><br />
            <button>add</button>
        </form>
    )
}

export default FormData