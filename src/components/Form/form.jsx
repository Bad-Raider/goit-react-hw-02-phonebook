import css from './form.module.css';
import { nanoid } from "nanoid";

const Form = ({onSubmit}) => {
    

    const handleSubmit = evt => {
        evt.preventDefault()
        const form = evt.currentTarget;

        onSubmit({
            id: nanoid(),
            name: form.elements.name.value,
            number: form.elements.number.value,
        })
        console.log(`я оновив cтейт`)
    };


    return (
        <>
            <h1>Phonebook</h1>
            <form
                onSubmit={handleSubmit}
                className={css.form}>
                <label > Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label > Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button
                    className={css.formBtn}
                    type="submit">Add contacts
                </button>
            </form>
        </>
    )
}

export default Form;