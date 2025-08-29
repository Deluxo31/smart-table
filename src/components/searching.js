import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(
        ['skipEmptyTargetValues'], // Массив имен правил
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)] // Пользовательские правила
    );



    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
         return data.filter(item => compare(item, state));
    }
}