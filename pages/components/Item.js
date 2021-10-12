const Item = (props) => {
  const items = props.items;
  console.log(props, items)

  function buyItem(item) {
    console.log(item)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    {items.map((item, i) => (
    <div key={i} className="border shadow rounded-xl overflow-hidden">
        <img src={item.image} />
          <div className="p-4">
          <p style={{ height: '64px' }} className="text-2xl font-semibold">
          {item.name}</p>
          <div style={{ height: '70px', overflow: 'hidden' }}>
            <p className="text-gray-400">{item.description}</p>
          </div>
          </div>
          <div className="p-4 bg-black">
            <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyItem(item)}>Buy</button>
          </div>
    </div>
    ))}
    </div>
  )
}

export default Item;
