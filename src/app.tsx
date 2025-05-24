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

    return (
        <>
        <h1>Hello world</h1>
        <h2>A react example</h2>
        <button onClick={action_fn}>Click Me</button>
        <HashRouter>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/page_1"}>Page 1</NavLink>
            <NavLink to={"/page_2"}>Page 2</NavLink>
            <Routes>
                <Route path='/' element={<h1>Home</h1>}/>
                <Route path='/page_1' element={<h1>PageOne</h1>}/>
                <Route path='/page_2' element={<h1>PageTwo</h1>}/>
            </Routes>
        </HashRouter>
        </>
    )
}

const root = createRoot(document.body);
root.render(<RenderApp/>);