import BOOKS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";

const createListTemplate = () => /*html*/`
    <ul>
        ${BOOKS_DATA.map((book) => createBookTemplate().join(''))}
    </ul>
`;

export default createListTemplate;