import { useState } from 'react';
import { ThemeSwitcher } from '../../../shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Navbar.module.scss';
import { RulesModal } from '../../../widgets/RulesModal';

const Navbar = () => {
    const [rulesIsOpen, setRulesIsOpen] = useState(false);
    const toogleRules = () => {
        setRulesIsOpen(!rulesIsOpen);
    }
    return (
        <div className={cls.Navbar}>
            <h1 className={cls.title}>Wordle</h1>
            <div className={cls.interface}>
                <RulesModal isOpen={rulesIsOpen} isClose={toogleRules} />
                <button className={cls.rulesBtn} onClick={toogleRules}>FAQ</button>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Navbar;