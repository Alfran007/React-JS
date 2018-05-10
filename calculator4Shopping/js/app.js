var React = require('react');
var Render = require('react-dom').render;
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react.js');

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();
// class App extends Component {
//     render() {
//         return (
//             <div className="demo-big-content">
//                 <Layout>
//                     <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">BOSE</Link>} scroll>
//                         <Navigation>
//                             <Link to="/headphones">HEADPHONES</Link>
//                             <Link to="/speakers">SPEAKERS</Link>
//                             <Link to="/register">REGISTER WITH BOSE</Link>
//                             <Link to="/support">SUPPORT</Link>
//                         </Navigation>
//                     </Header>
//                     <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">BOSE</Link>}>
//                         <Navigation>
//                             <Link to="/headphones">HEADPHONES</Link>
//                             <Link to="/speakers">SPEAKERS</Link>
//                             <Link to="/register">REGISTER WITH BOSE</Link>
//                             <Link to="/support">SUPPORT</Link>
//                         </Navigation>
//                     </Drawer>
//                     <Content>
//                         <div className="page-content" />
//                         <Main/>
//                     </Content>
//                 </Layout>
//             </div>

//         );
//     }
// }

// Render FluxCartApp Controller View
Render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
