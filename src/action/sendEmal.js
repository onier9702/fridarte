
import { fetchEmail } from "../helpers/fetch";

export const startSendEmail = (data) => {

    return async(dispatch) => {

        try {
    
            const resp = await fetchEmail(data);
            const body = await resp.json();

            if (body.msg){ 
                return {
                    ok: false,
                    msg: body.msg
                };
            } else {
                return {
                    ok: true,
                    body
                };
            };
            
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                msg: 'No se ejecuto el fetch email'
            };
        };


    };


};