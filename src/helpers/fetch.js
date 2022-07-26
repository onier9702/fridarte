

export const fetchEmail = ( data ) => {

    const baseUrl = process.env.REACT_APP_API_URL;
    const url     = `${baseUrl}/email/`;
    console.log(url);

    return fetch( url, {
        method: 'POST',
        // headers: {
        //     'Content-type': 'application/json',
        // },
        body: JSON.stringify( data ) 
    });
        
};
