// 
import css from './contactsItem.module.css'

const ContactsItem = ({ arrContacts, onDeleteContact }) => {


    return (
        <>
            {arrContacts.map(({ id, name, number }) => (
                <li className={css.item }
                    key={id}>
                    <span className={css.span}>{name}: </span>
                    <span className={css.spanNum}>{number}</span>
                    <button
                    className={css.itemBtn}
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >X
                    </button>
                </li>
            ))}
        </>)
}

export default ContactsItem;