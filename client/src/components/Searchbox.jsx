import React, { useState } from 'react'
import axios from 'axios';

const Searchbox = () => {
    const [searchtext, setSearchtext] = useState('');
    const [result, setResult] = useState([]);

    const hs = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.get(`http://localhost:6700/products?search=${searchtext}`);
            setResult(res.data.products);
        } catch (err) {
            console.error('error', err);
        }
    }


    return <>
        <div style={{marginLeft:"400px"}}>
            <form onSubmit={hs}>
                <input
                    type='text'
                    placeholder='serach...'
                    value={searchtext}
                    onChange={(e) => setSearchtext(e.target.value)}
                />
                <br></br>
                <button type='submit'>Search</button>
                <div>
                    {result.length > 0 ? (
                        result.map(x => (
                            <div>
                                <h4>{x.name}</h4>
                                <h4>{x.category}</h4>
                                <h4>{x.price}</h4>
                            </div>
                        ))
                    ): (
                        <p>no data found</p>
                    )
                    }
                </div>
            </form>
        </div>
    </>
}

export default Searchbox