import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchPeoples} from './peoples.action';
import {selectPeoples} from './peoples.selectors';
import {useAppSelector} from '../../app/hooks';

import { Table, Tag, Space } from 'antd';
import {getTableColumns} from './helpers/peoplesComponent.helper';

export const PeoplesComponent = () => {
  const peoples = useAppSelector(selectPeoples);
  console.log(peoples?.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeoples)
  }, []);

  if (peoples) {
    return <Table rowKey="name"  columns={getTableColumns()} dataSource={peoples.results} />
  }

  return <p>hi</p>
}
