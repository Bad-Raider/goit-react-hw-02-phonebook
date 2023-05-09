import Filter from "components/Filter/filter";
// import css from './contacts.module.css';

const Contacts = ({ state, input, onChange }) => {
    return (
        <>
            <h2>Contacts</h2>
            <Filter
                input={input}
                onChange={onChange}
            />
            <ul>
                {state.map(({ id,name,number}) => (
                    
                    <li key={id}>{name}: { number}</li>
                ))}
            </ul>
        </>
    );
};

export default Contacts;