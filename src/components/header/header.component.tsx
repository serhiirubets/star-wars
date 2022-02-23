import {Col, Form, Input, Layout, Row} from 'antd';
import {useDispatch} from 'react-redux';
import {fetchPeoples} from '../peoples/peoples.action';
import {FormEvent} from 'react';
import {FETCH_TYPE} from '../peoples/peoples.types';

const { Header } = Layout;

export const HeaderComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  function onInput(e: FormEvent<HTMLInputElement>) {
    const searchedValue = (e.target as HTMLInputElement).value;

    dispatch(fetchPeoples({
      type: FETCH_TYPE.SEARCH,
      value: searchedValue,
    }));
  }

  return <Header style={{backgroundColor: '#1a90ff'}}>
    <Row>
      <Col span={8}>
        <Form
          form={form}
          name="basic"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          autoComplete="off"
        >
          <Form.Item
            name="searchBy"
          >
            <Input onInput={onInput} style={{ marginTop: 15 }}/>
          </Form.Item>
        </Form>
      </Col>
    </Row>
   </Header>
}
