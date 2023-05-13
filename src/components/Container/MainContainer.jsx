import css from './MainContainer.module.css';

const Container = ({ children }) => {
    return (
        <section className={css.section}>{children }</section>
    )
}

export default Container;