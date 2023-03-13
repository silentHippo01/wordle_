import cls from './Navbar.module.scss';
import classNames from 'classnames';

const Navbar = () => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <h1>Wordle</h1>
        </div>
    );
};

export default Navbar;