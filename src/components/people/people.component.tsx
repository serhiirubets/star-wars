import {Button, Card, Col, Row} from 'antd';
import {People} from '../peoples/peoples.types';
import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import {selectPeople} from '../peoples/peoples.selectors';
import {useEffect} from 'react';
import {fetchPeoples} from '../peoples/peoples.action';
import {useDispatch} from 'react-redux';

export const PeopleComponent = () => {
  const params = useParams();
  const people: People | null = useAppSelector(selectPeople(params.name)) as People | null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeoples())
  }, []);

  if (!people) {
    return null;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Row>
        <Col offset={2}><Button type="primary" size="middle"><Link to={`/`}>Back</Link></Button></Col>
      </Row>
      <Row justify="center">
        <Col>
          <Card
            style={{width: 400}}
            cover={<img alt="example" src="https://via.placeholder.com/400.png/09f/fff"/>}
          >
            <Row justify="start">
              <Col span={12}>Name:</Col>
              <Col span={12}>{people.name}</Col>
            </Row>
            <Row justify="start">
              <Col span={12}>Height:</Col>
              <Col span={12}>{people.height}</Col>
            </Row>
            <Row justify="start">
              <Col span={12}>Hair Color:</Col>
              <Col span={12}>{people.hairColor}</Col>
            </Row>
            <Row justify="start">
              <Col span={12}>Skin Color:</Col>
              <Col span={12}>{people.skinColor}</Col>
            </Row>
            <Row justify="start">
              <Col span={12}>Eye Color:</Col>
              <Col span={12}>{people.eyeColor}</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
