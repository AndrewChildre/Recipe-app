import React, { useState, useEffect} from 'react';


const APIfile = () => {

    const [movie1, setMovie1] = useState([]);

        useEffect(() => {
               fetch('https://code-challenge.spectrumtoolbox.com/api/movies', {
			headers: {
				Authorization: 'Api-Key q3MNxtfep8Gt',
			},
		})
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            setMovie1(movie1)
        }) 
        }, [])

    return (
        <div>
            
        </div>
    );
};

export default APIfile;