import React from 'react';
import Cookie from 'js-cookie';

function getCookies(username) {
  return (
    Cookie.get(username)
  )
}

export default getCookies
