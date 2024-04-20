const CartCard = ({ item }) => {
	return (
		<div
			className="card2"
			style={{
				display: "flex",
				justifyContent: "start",
				gap: "5px",
				border: "1px solid grey",
				borderRadius: "10px",
				padding: "10px",
				marginTop: "10px",
				width: "350px",
				boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
			}}
		>
			<div className="card-img" style={{ paddingLeft: "10px" }}>
				<img width="100px" src={item.image} alt="" />
			</div>
			<div className="card-text" style={{ marginRight: "20px", fontSize: "20px" }}>
				<div>{item.drink}</div>
			</div>
		</div>
	);
};

export default CartCard;
