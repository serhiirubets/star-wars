import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchPeoples} from './peoples.action';
import {selectPeoples} from './peoples.selectors';
import {useAppSelector} from '../../app/hooks';

import { Table, Tag, Space } from 'antd';
import {getTableColumns} from './helpers/peoplesComponent.helper';

import WithLoader from '../../hocs/withLoaderHOC';
import {PeopleTableProps} from './peoples.types';

const TableWithLoader = WithLoader<PeopleTableProps & { isLoading: boolean }>(Table)
export const PeoplesComponent = () => {
  const peoples = useAppSelector(selectPeoples);
  const dispatch = useDispatch();

  console.log(peoples);

  useEffect(() => {
    dispatch(fetchPeoples)
  }, []);

  if (peoples?.peoples) {
    return <TableWithLoader isLoading={peoples.isLoading} rowKey="name" columns={getTableColumns()} dataSource={peoples.peoples.results} />
  }

  return null;
}
