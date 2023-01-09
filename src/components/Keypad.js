// Code Keypad Component Here

import React, { useState } from 'react';

function enterPassword() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input onChange={enterPassword} type ="password" />
        </div>
    )
}

export default Keypad;