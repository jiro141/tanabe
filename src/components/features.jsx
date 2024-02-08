import logo from "../img/logo.png"
export const Features = (props) => {
  // const [myState, setMyState] = useContext(MyContext);

  return (
    <div id="features" className="text-center" style={{ background: "#fbf7ee" }}>
       <img className="imagen" src={logo} alt="logo" />
      <div className="container" style={{marginTop:"-5%"}}>
        <div className="col-md-10 col-md-offset-1 section-title">
          {/* <h2>Features</h2> */}
        </div>
        <div className="row justify-content-evenly">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
                  <button
                    // onClick={() => handleButtonClick(d.title)}
                    style={{ background: "none", border: "none", cursor: 'auto' }}
                  >
                    <i className={d.icon}></i>
                    <h3 style={{ color: "#c60502", fontWeight: 'bold' }}>{d.title}</h3>
                    <p style={{ fontWeight: 'bold', color: '#000', maxWidth: '330px',fontSize:'18px' }}>{d.text}</p>
                  </button>
                </div>
              ))
            : "Loading..."}
          <div className="col-md-10 col-md-offset-1 section-title">
            {/* <h2>Features</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};
