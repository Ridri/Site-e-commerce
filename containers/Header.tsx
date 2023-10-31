
function Header() {
  const headerStyle = {
    backgroundImage: `url('https://cdn.discordapp.com/attachments/1164179015154810995/1167094038420262983/image1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '1000px',
    display: 'flex',
  };

  return (
    <>
      <div className="ellipse"/>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: 570, height: 80,right:508, top: 500, position: 'absolute', background: '#008000', borderRadius: 9999}} />
      <div style={{left: 0,right:70, top: 500, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Jacquemus X Konbini</div>
      </div>
      
      <div>
        <a href="/collection" style={headerStyle}/>
      </div>

    </>


  );
}

export default Header;