import React from 'react';
import Cookie from 'js-cookie';

function removeCookies(username) {
  return (
    Cookie.remove(username)
  )
}

export default removeCookies
