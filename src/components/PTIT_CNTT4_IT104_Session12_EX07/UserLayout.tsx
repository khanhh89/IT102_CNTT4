import Header from './Header';
import Navigation from './Navication';
import Menu from './Menu';
import Cart from './Cart';
import Article from './Article'

const MainLayout = () => {
    const cartItems = Array.from({ length: 12 }, (u, index) => <Cart key={index} />);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Navigation />
      <div style={{ display: 'flex', flex: 1 }}>
        <Menu />
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '10px', background: '#ffe6e6' }}>
          {cartItems}
        </div>
        <Article />
      </div>
    </div>
  );
};

export default MainLayout;