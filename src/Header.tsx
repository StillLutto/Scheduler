import "./Header.css";

function Header() {
     return (
          <header>
          <div className="header section-container">
               <div className="header__title">
                    <h1 className="header__title-text"><em>Scheduler</em></h1>
               </div>
               <div className="header__buttons">
                    <i className="fa-regular fa-envelope fa-3x"></i>
                    <i className="fa-solid fa-gear fa-3x"></i>
               </div>
          </div>
     </header>
     );
}

export default Header;