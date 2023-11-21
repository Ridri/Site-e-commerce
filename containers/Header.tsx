
function Header() {
  const headerStyle = {
    backgroundImage: `url('https://cdn.discordapp.com/attachments/1164179015154810995/1167094038420262983/image1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '1300px',
    display: 'flex',
  };

  const handleMouseEnter = (event) => {
    event.target.style.color = 'white'; // Changer la couleur en rouge lors du survol
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = 'black'; // Revenir à la couleur bleue par défaut lorsque la souris quitte
  };

  return (
    <>
      <div className="image-collection">
      <div className="ellipse"/>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: 570, height: 80,right:630, top: 490, position: 'absolute', background: '#cbfcbf', borderRadius: 9999}} />
      <div style={{left: 720, top: 500, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 38, fontFamily: 'Palatino', fontWeight: '700', wordWrap: 'break-word'}}>
    <div>
		  <a href="/collection"><p
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ color: 'black', cursor: 'pointer' }}
        >Voir notre nouvelle collection</p></a>
	  </div>
          
        
      </div>
      
      <div>
        <a style={headerStyle}/>
      </div>
      </div>
      </div>
    </>


  );
}

export default Header;