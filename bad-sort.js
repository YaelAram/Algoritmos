const bubble = ( ...values ) => {
    for( let i = 0 ; i<values.length ; i++ )
        for( let j = 0 ; j<( values.length - 1 ) ; j++ )
            if( values[ j ]>values[ j + 1 ] ) [ values[ j ], values[ j + 1 ] ] = [ values[ j + 1 ], values[ j ] ];
    return values;
};

const sort = ( ...values ) => {
    console.log( `Function: ${ values }` );
    if( values.length === 1 ) return values;
    else if ( values.length === 2 ) return bubble( ...values );
    else{
        const pivot = Math.round( values.length / 2 );
        const left = sort( ...values.slice( 0, pivot ) );
        const right = sort( ...values.slice( pivot ) );
        return bubble( ...left, ...right );
    }
};

console.log( sort( 3, 1, 2, 6, 8, -1, 0, 5, 10, 50, 100, -100, 3, 1, 2, 6, 8, -1, 0, 5, 10, 50, 100, -100 ) );
