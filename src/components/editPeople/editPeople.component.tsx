import {Button, Form, Input, Col, Row} from 'antd';
import {People} from '../peoples/peoples.types';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import {selectPeople} from '../peoples/peoples.selectors';
import {useEffect} from 'react';
import {fetchPeoples} from '../peoples/peoples.action';
import {useDispatch} from 'react-redux';
import {setPeople} from '../peoples/peoplesSlice';



export const EditPeopleComponent = () => {
  const params = useParams();
  const people: People | null = useAppSelector(selectPeople(params.name)) as People | null;
  const dispatch = useDispatch();
  const [form] = Form.useForm()
  let navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchPeoples)
  }, []);

  if (!people) {
    return null;
  }

  const {name, height, hairColor, skinColor, eyeColor} = people;

  function onFinish(e: any) {
    const values = form.getFieldsValue();
    const changedPeople = {
      ...people,
      name: values.name,
      height: values.height,
      hairColor: values.hairColor,
      skinColor: values.skinColor,
      eyeColor: values.eyeColor
    }

    dispatch(setPeople(changedPeople));
    navigate("/");
  }

  return (
    <>
      <Row>
        <Col offset={2}><Button type="primary" size="middle"><Link to={`/`}>Back</Link></Button></Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{name, height, hairColor, skinColor, eyeColor}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{required: true, message: 'Please input your name!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Height"
              name="height"
              rules={[{required: true, message: 'Please input your height!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Hair color"
              name="hairColor"
              rules={[{required: true, message: 'Please input your hairColor!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Skin color"
              name="skinColor"
              rules={[{required: true, message: 'Please input your skinColor!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Eye color"
              name="eyeColor"
              rules={[{required: true, message: 'Please input your eyeColor!'}]}
            >
              <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/*<Card*/}
          {/*  style={{width: 400}}*/}
          {/*  cover={<img alt="example" src="https://via.placeholder.com/400.png/09f/fff"/>}*/}
          {/*>*/}
          {/*  <Row justify="start">*/}
          {/*    <Col span={12}>Name:</Col>*/}
          {/*    <Col span={12}>{people.name}</Col>*/}
          {/*  </Row>*/}
          {/*  <Row justify="start">*/}
          {/*    <Col span={12}>Height:</Col>*/}
          {/*    <Col span={12}>{people.height}</Col>*/}
          {/*  </Row>*/}
          {/*  <Row justify="start">*/}
          {/*    <Col span={12}>Hair Color:</Col>*/}
          {/*    <Col span={12}>{people.hairColor}</Col>*/}
          {/*  </Row>*/}
          {/*  <Row justify="start">*/}
          {/*    <Col span={12}>Skin Color:</Col>*/}
          {/*    <Col span={12}>{people.skinColor}</Col>*/}
          {/*  </Row>*/}
          {/*  <Row justify="start">*/}
          {/*    <Col span={12}>Eye Color:</Col>*/}
          {/*    <Col span={12}>{people.eyeColor}</Col>*/}
          {/*  </Row>*/}
          {/*</Card>*/}
        </Col>
      </Row>
    </>

  )
}
