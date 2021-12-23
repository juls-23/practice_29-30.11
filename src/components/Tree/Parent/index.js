import React from 'react';
import { WithLang } from '../../HOCs';
import ChildWithLang from '../Child';
import CONTENT from '../content';

const Parent = (props) => {
  const {currentLang} = props;
   return (
    <div>
      <h2>{CONTENT[currentLang].PARENT}</h2>
      <ChildWithLang />
    </div>
  );
}

const ParentWithLang = WithLang(Parent)

export default ParentWithLang;
