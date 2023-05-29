import { useDispatch } from 'react-redux';
import { register } from 'store/auth/operations';
import style from './RegForm.module.css';

export const RegForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={style.label}>
                <span className={style.title}>Username</span>
                <input type="text" name="name" />
            </label>
            <label className={style.label}>
                <span className={style.title}>Email</span>
                <input type="email" name="email" />
            </label>
            <label className={style.label}>
                <span className={style.title}>Password</span>
                <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
