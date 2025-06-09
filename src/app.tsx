import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, NavLink, Route, Routes } from 'react-router';

function RenderApp()
{
    const action_fn = () =>
    {
        const p = window.MY_APP_NAMESPACE.openDialog();
        p.then(
            (value) => console.log(value),
            (error) => console.log(error)
            
        )
    }

    // Backend call 
    const [randomInt, setRandInt] = useState(0);
    const get_number = () => 
    {
        fetch('http://localhost:5000/')
            .then((response) => console.log(response.text().then((val) => setRandInt(Number(val)))))
            .catch((response) => console.error(response));
    }

    return (
        <>
        <h1>Hello world</h1>
        <h2>A react example</h2>
        <button onClick={action_fn}>Click Me</button>
        <HashRouter>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/page_1"}>Page 1</NavLink>
            <NavLink to={"/page_2"}>Page 2</NavLink>
            <NavLink to={"/random_page"}>Random Page</NavLink>
            <Routes>
                <Route path='/' element={<h1>Home</h1>}/>
                <Route path='/page_1' element={<h1>PageOne</h1>}/>
                <Route path='/page_2' element={<h1>PageTwo</h1>}/>
                <Route path='/random_page' element={<button onClick={get_number}>RandNumber: {randomInt}</button>}/>
            </Routes>
        </HashRouter>
        </>
    )
}

const root = createRoot(document.body);
root.render(<RenderApp/>);