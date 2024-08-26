function App() {
    const sub1 = {color : 'red', backgroundColor:'blue'}
    const sub2 = {color : 'orange' , backgroundColor :'blue'}

    const fname = ['Thanchol']
    const lname = ['Charoenrang']

    const calAge = (birthyear) => {
        const currentyear = new Date().getFullYear()
        return currentyear - birthyear 
    }


    return (
        <div style={{}}>
             <h1 style={sub1}>{fname} {lname}</h1>
             <p style = {sub2}>Age : {(calAge(1991))} Years old</p>
            
     

        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)