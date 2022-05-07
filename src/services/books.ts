import api from './api.default';
import { successObject , failedObject} from '../utils/buildResponse';

const listBooks = async () => {
    try {
        const { data } = await api.get('/books?page=1');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}

export default listBooks;