import React from 'react';
import Cookie from 'js-cookie'

function setCookis(cookiesname,userlink) {
    Cookie.set(cookiesname,userlink,{
        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'
    })
}

export default setCookis;
