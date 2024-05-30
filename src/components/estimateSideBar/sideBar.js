import { FaLessThan } from 'react-icons/fa';
const SideBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 8,
        border: '1px solid lightgray',
        alignItems:'center'
      }}
    >
      <FaLessThan style={{margin : '8px'}} />
      <Text text={'Catalogues'} />
      <Text text={'Recipes'} />
    </div>
  );
};

const Text = ({ text }) => {
  return <p style={{ writingMode: 'vertical-lr', margin: '8px', fontWeight: 'bold' }}>{text}</p>;
};

export { SideBar };
