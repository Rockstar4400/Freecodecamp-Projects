import React from 'react';
import ReactDOM from 'react-dom';

import Message from '../Message';

import { render } from '@testing-library/react';

it("renders message correctly",()=>{
    render (<Message id='1'>message="test"</Message>)
})