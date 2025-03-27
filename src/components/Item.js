import styles from './Item.module.css';
import PropTypes from 'prop-types';

function Item({ item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <h2 className={styles.itemTitle}>{item.name}</h2>
        <p className={styles.itemDescription}>{item.description}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;