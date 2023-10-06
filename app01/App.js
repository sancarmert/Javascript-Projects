import React, { useEffect} from 'react';
import getData from './getData';

function App(){

    useEffect(() => {
        getData(1)
        .then((userData) => {
            console.log('Kullanıcı Verileri', userData);
        })
        .catch((error) => {
            console.error('Hata',error);
        });  
}, [] );

return(
    <div className="App">
        {/* Uygulama içeriği */}
    </div>
);
}

export default App;