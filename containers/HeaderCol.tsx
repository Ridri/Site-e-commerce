// Header.jsx
function HeaderCol() {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1600x900')",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg text-white">
          Anim aute id magna aliqua ad ad non deserunt sunt.
        </p>
      </div>
    </div>
  );
}

export default HeaderCol;