import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchPeoples} from './peoples.action';
import {selectPeoples} from './peoples.selectors';
import {useAppSelector} from '../../app/hooks';

import {Table} from 'antd';
import {getTableColumns} from './helpers/peoplesComponent.helper';

import WithLoader from '../../hocs/withLoaderHOC';
import {PeopleTableProps} from './peoples.types';

const TableWithLoader = WithLoader<PeopleTableProps & { isLoading: boolean }>(Table)
export const PeoplesComponent = () => {
  const peoples = useAppSelector(selectPeoples);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState('1');

  function onChange(pageNumber: string) {
    dispatch(fetchPeoples(pageNumber));
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    if (!peoples.peoples.results) {
      dispatch(fetchPeoples())
    }
  }, []);

  if (peoples?.peoples) {
    return <
      TableWithLoader
      isLoading={peoples.isLoading}
      rowKey="name"
      columns={getTableColumns()}
      dataSource={peoples.peoples.results}
      pagination={{
        current: currentPage,
        total: peoples.peoples.count,
        showSizeChanger: false,
        onChange
      }
      }
    />
  }

  return null;
}
