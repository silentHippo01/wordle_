import { Modal } from '../../Modal';
import cls from './RulesModal.module.scss';


interface RulesModalProps {
    isOpen?: boolean;
    isClose: () => void;
}

export const RulesModal = (props: RulesModalProps) => {
    const {
        isOpen,
        isClose,
    } = props;

    return (
        <Modal isOpen={isOpen}>
            <div className={cls.Rules}>
                <h1>
                    Wordle — это игра, где нужно угадать всего лишь одно
                    англоязычное слово из пяти букв. На это даётся шесть попыток.
                    Для начала нужно вписать любое слово в верхнюю строчку
                    игрового поля.
                </h1>

                <div>
                    <p>
                        Если хотя бы одна буква в вашем слове соответствует
                        загаданному, то она подсветится зелёным, когда стоит
                        в нужном месте, и жёлтым, когда стоит не там, где надо.
                        Если все ячейки вашего слова остаются серыми, значит в
                        искомом слове вообще нет этих букв.
                    </p>

                    <p>
                        Далее, учитывая угаданные буквы, вы можете вписать
                        новое слово, а потом и следующее — пока не угадаете
                        загаданное или у вас не кончатся попытки.
                    </p>
                </div>

                <button onClick={isClose}>Закрыть</button>
            </div>

        </Modal>

    );
};
