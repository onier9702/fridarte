


export const getPortrait = (element, amount) => {

    const arr   = [];
    for (let i=1; i<amount; i++){
        arr.push(`${element}${i}`);
    };

    return arr;
  
}
