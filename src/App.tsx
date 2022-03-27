import logo from './images/avatar-2.png'
import Counter from './Counter'
import './app.css'
export const App = () => {
    return (
        <div className='app'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <h1>My create React APP.</h1>
            <Counter />
        </div>
    )
}
