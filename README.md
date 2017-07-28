follow by facebook

---------------------------------------------------------------------------------

rr/ r /r snippets for es6 es7

imr [Import React]

import React from 'react';

imrc [Import React Component]

import React, { Component } from 'react';

imrn [Import React-Native Element]

import { $1 } from 'react-native';

ims [Import Styled-Components]

import styled from 'styled-components';

imsn [Import Styled-Components Native]

import styled from 'styled-components/native';

rct [Redux Constant]

export const $1 = '$1';

crr [Connect Redux]

import { connect } from 'react-redux';

sl [Stateless Component]

const $1 = () => (

  $2

);

export default $1;

slr [Stateless Component Return]

const $1 = () => {

  return (

    $2

  );

}

export default $1;

slc [Stateless Component Function]

function $1($2) {

  $3

}

export default $1;

ccs [Component Class]

class $1 extends Component {

  state = { $2 }

  render() {

    return (

      $3

    );

  }

}

export default $1;

edccs [Export default Component Class]

export default class $1 extends Component {

  state = { $2 }

  render() {

    return (

      $3

    );

  }

}
rrd [Redux Reducer]

export default (state = $1, action) => {

  switch (action.type) {

    case $2:

      $3

    default:

      return state;

  }

};

rpf [Redux pure function]

export const $1 = '$1';

export function $2($3) {

  return {

    type: $1,

    $3

  }

}
rpc [Redux pure function const]

export const $1 = '$1';

export const $2 = $3 => ({

  type: $1,

  $3

});

cwm [ComponentWillMount]

componentWillMount() {

  $1

}
cwu [ComponentWillUpdate]

componentWillUpdate() {

  $1

}
cdu [ComponentDidUpdate]

componentDidUpdate(prevProps, prevState) {

  $1

}
cdm [ComponentDidMount]

componentDidMount() {

  $1

}
cwum [ComponentWillUnmount]

componentWillUnmount() {

  $1

}
cwrp [ComponentWillReceiveProps]

componentWillReceiveProps(nextProps) {

  $1

}
ess [EStyleSheet]

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

  $1

});

export default styles;

ed [Export default]

export default $1;

edl [Eslint Disable Line]

// eslint-disable-line

styc [Styled Component]

const $1 = styled.$2`

  $3
`
estyc [Export Styled Component]

export const $1 = styled.$2`
  $3
`
edstyc [Export default Styled Component]

export default styled.$1`
  $2
`
cmmb [Comment Big Block]

/**
|--------------------------------------------------
| $1
|--------------------------------------------------
*/

log [Console Log]

console.log('====================================');

console.log($1);

console.log('====================================');

tdesc [Test Describe]

describe('$1', () => {

  $2

});

tit [Test It]

it('should $1', $2($3) => {

  $4
  
});