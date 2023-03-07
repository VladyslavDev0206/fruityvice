import axios from 'axios';
import { baseURI } from '../../configs/baseURI';

export const GET_FRUITS = 'GET FRUITS';

export function getFruits(favorite) {
    let url;
    if (!favorite)
        url = baseURI + "fruits";
    else url = baseURI + "favoriteFruits";

    const request = axios.get(url);

    return (dispatch) =>
        request.then((response) => {
            return dispatch({
                type: GET_FRUITS,
                payload: response.data
            })
        }
        );
}