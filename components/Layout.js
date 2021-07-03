import Navbar from "./Navbar"
const Layout = ({ children }) => (
  <div>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}
        
    <Navbar />
    <div className="main-container container">
      {children}
    </div>
  </div>
)
export default Layout;