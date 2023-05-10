import { nanoid } from "nanoid";
import css from './form.module.css';

const Form = ({submit, contacts}) => {


    const handleSubmit = evt => {
        evt.preventDefault()
        const form = evt.currentTarget;

        (contacts.find(contact =>
            contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
        ))
            ? alert(`${form.elements.name.value} is already in contacts.`)
            : submit({
                id: nanoid(),
                name: form.elements.name.value,
                number: form.elements.number.value,
            });
        form.reset();
    };


    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={css.form}>
                <label > Name:
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label > Number:
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