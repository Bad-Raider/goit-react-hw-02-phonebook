import ContactsItem from "./ContactsItem/contactsItem";
// import css from './contacts.module.css';


const Contacts = ({ arrContacts, onDeleteContact }) => {
    return (
        <>
            <ul>
                <ContactsItem
                    arrContacts={arrContacts}
                    onDeleteContact={onDeleteContact}
                />
            </ul>
        </>
    );
};

export default Contacts;

