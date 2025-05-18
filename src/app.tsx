import { createRoot } from 'react-dom/client';

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
        </>
    )
}

const root = createRoot(document.body);
root.render(<RenderApp/>);