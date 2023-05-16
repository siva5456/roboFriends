

import{ useEffect, useRef } from 'react'

function Useref() {
    const inputRef = useRef(null)
    const MyInputRef = useRef(1)


    // console.log(inputRef.current);

    let handleSUbmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        // console.log(inputRef.current);
        // console.log(inputRef);

        // inputRef.current.value="shiva"
        // console.log(inputRef.current.value);

    }


    useEffect(() => {
        MyInputRef.current.focus();
    }, [])

    let handleIncrement = () => {
        MyInputRef.current.value = Number(MyInputRef.current.value) + 1
        let {current:{value}}=MyInputRef
        console.log('====================================');
        console.log(value);
        console.log('====================================');
    }
    let handleDecrement = () => {
        MyInputRef.current.value = parseInt(MyInputRef.current.value) - 1
        let {current:{value}}=MyInputRef
        console.log('-------------------------------------');
        console.log(value);
        console.log('-------------------------------------');
    }


    return (
        <div>

            <form onSubmit={handleSUbmit} >
                <input type="text" ref={inputRef} />
                {/* <button type="submit">submit</button> */}
                <input type="submit" value="submitt" />
                <br /> <br />
                <label htmlFor="n">Enter value</label>
                <input id='n' type="number" ref={MyInputRef}  />
                <br /> <br />
                <button type="text" onClick={handleIncrement}>+</button>
                <button type="text" onClick={handleDecrement}>-</button>
            </form>

        </div>
    )
}

export default Useref