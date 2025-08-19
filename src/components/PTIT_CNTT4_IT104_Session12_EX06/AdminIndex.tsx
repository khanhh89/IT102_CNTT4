import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

const AdminIndex = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '600px' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Menu />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding:'20px' }}>
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;