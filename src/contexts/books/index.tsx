import React, { createContext, useState } from 'react';
import { IBooksProps } from '../../@types/books';
import { IBooksContextProps } from './index.d';

const BooksContext = createContext<IBooksContextProps[]>([]);

const BooksProvider = ({ children }) => {
    const [booksFiltered, setBooksFiltered] = useState<IBooksContextProps[]>([])
    return (
        <BooksContext.Provider value={{
            booksFiltered, 
            setBooksFiltered
            }}>

        </BooksContext.Provider>
    )
}

export default BooksProvider;