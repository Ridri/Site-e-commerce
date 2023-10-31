
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
      <div style={{width: 300, height: 145, left: 0, top: 0, position: 'absolute', background: '#008000', borderRadius: 9999}} />
      <div style={{left: 17, top: 44, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>Jacquemus X Konbini</div>
      </div>
      
      <div>
        <a href="/collection" style={headerStyle}/>
      </div>

    </>


  );
}

export default Header;