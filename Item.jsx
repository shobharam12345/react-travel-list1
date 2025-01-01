import Emoji from "./Emoji";
import styles from "../styles/Item.module.css";

function Item(prop) {
    const { count, name, packed, updateItem, deleteItem } = prop;

    function handleOnchange() {
        updateItem(name, !packed);
    
    }
    function handleDelete() {
        deleteItem(name);

    }

    return (
        <div className={styles.item}>
            <input type="checkbox"
            id={name}
            checked={packed} onChange={handleOnchange}/>
            <label className={packed ? styles.packed : ""} htmlFor={name}>
                <span>
                    {count} {name}
                </span>
            </label>
            <button onClick={handleDelete}>
                <Emoji txt="❌" />
            </button>
        </div>
    );
}

export default Item;