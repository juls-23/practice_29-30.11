import React from 'react';
import UserCardWithUser from '../UserCard';
import CONTENT from '../content';
import { WithLang } from '../../HOCs';

const Child = (props) => {
  const {currentLang} = props;
  return (
    <div>
      <h2>{CONTENT[currentLang].CHILD}</h2>
      <UserCardWithUser />
    </div>
  );
}

const ChildWithLang = WithLang(Child)

export default ChildWithLang;
