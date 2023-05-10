// import css from './ContactsItem.module.css';

const ContactsItem = ({ arrContacts, onDeleteContact }) => {


    return (
        <>
            {arrContacts.map(({ id, name, number }) => (
                <li key={id}>
                    <span>{name}: </span>
                    <span>{number}</span>
                    <button
                        type="button"
                        onClick={()=>onDeleteContact(id)}
                    >Delete
                    </button>
                </li>
                    
            ))}
        </>)
}

export default ContactsItem;