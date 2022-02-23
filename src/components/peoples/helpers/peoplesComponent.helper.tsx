import {Button, Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import {FETCH_TYPE, People, SearchedParams} from '../peoples.types';
import {apiConfig} from '../../../config/api.config';

function ActionButtons ({ id }: { id: string}) {
  return <Row>
    <Col span={11} offset={1}>
      <Button type="primary" size="middle"><Link to={`/people/${id}`}>Details</Link></Button>
    </Col>
    <Col span={12}><Button type="primary" size="middle"><Link to={`/people/edit/${id}`}>Edit</Link></Button></Col>
  </Row>
}

export const getTableColumns = () => ([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a:any, b:any) => a.name > b.name ? 1 : -1,
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'Hair Color',
    dataIndex: 'hairColor',
    key: 'hairColor',
  },
  {
    title: 'Skin Color',
    key: 'skinColor',
    dataIndex: 'skinColor',
  },
  {
    title: 'Eye Color',
    key: 'eyeColor',
    dataIndex: 'eyeColor',
  },
  {
    title: 'Actions',
    key: 'actions',
    width: '20%',
    render(people: People) {
      return <ActionButtons id={people.id} />
    }
  }
]);

export const setId = (data: Omit<People[], 'id'>): People[] => {
  return data.map(people => ({
    ...people,
    id: people.name.replace(' ', '')
  }))
}


export function getSearchedUrl(params?: SearchedParams): string {
  const baseUrl = `${apiConfig.baseUrl}${apiConfig.people}`;
  let url = baseUrl;

  if (params?.type === FETCH_TYPE.PAGE) {
    url = `${baseUrl}?page=${params.value}`;
  }

  if (params?.type === FETCH_TYPE.SEARCH) {
    url = `${baseUrl}?search=${params.value}`;
  }

  return url;
}
