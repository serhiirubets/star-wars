export const getTableColumns = () => ([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a>{text}</a>,
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
]);