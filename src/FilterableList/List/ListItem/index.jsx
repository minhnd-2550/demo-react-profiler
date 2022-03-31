import { memo } from "react";
import "./styles.css";

const ListItem = ({ value }) => <div className='item'>{value}</div>;

export default memo(ListItem);
