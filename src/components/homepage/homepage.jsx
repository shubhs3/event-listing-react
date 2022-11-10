import React from "react";
import NavScrollExample from "../common/navbar";
import "../homepage/homepage.scss";
import SelectBasicExample from "../common/select";
import Button from "react-bootstrap/esm/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllEventsAction } from "../../redux/actions/adminActions";
import { useEffect, useState } from "react";

import EventCard from "../common/event_card";
const results = [
	{
		name: "Basket Ball",
		location: "Delhi",
		description: "A game",
		image: "eventImage_1667573376804.png",
		category_id: "6360cee05165780393412412",
		id: "6360cea780296b1cb878d37b",
	},
	{
		name: "Basket Ball",
		location: "Delhi",
		description: "A game",
		image: "eventImage_1667573376804.png",
		date: "2022-11-01T07:41:14.000Z",
		category_id: "6360cee05165780393412412",
		id: "6360e41392fa0c04b0401f8d",
	},
	{
		name: "Basket Ball",
		location: "Delhi",
		description: "A game",
		image: "eventImage_1667573376804.png",
		date: "2022-11-01T07:41:14.000Z",
		category_id: "6360cee05165780393412412",
		id: "6360e41392fa0c04b0401f8d",
	},
];
const HomePage = (props) => {
	const [currentpage, setcurrentpage] = useState(1);
	const [totalpage, settotalpage] = useState(props.Data.totalpage);
	const [events, setevents] = useState(props.Data.allEvents);

	useEffect(() => {
		console.log(props);
		props.fetchAllEventsAction({
			page: currentpage,
			limit: 3,
			sortBy: "desc",
		});
	}, [currentpage]);

	return (
		<div className="home container-fluid">
			<div className="nav">
				<NavScrollExample />
			</div>

			<div className="exp_div container-fluid">
				<div>Explore Events</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<span>
						<SelectBasicExample placeholder="Select Your City" />
					</span>
					<span>
						<SelectBasicExample placeholder="Select Category" />
					</span>
					<Button variant="primary">Explore</Button>
				</div>
			</div>

			<div className="container events_div">
				<div className="row">
					{props.Data.allEvents.map((item) => (
						<div
							className="col-lg-4 col-md-6 col-sm-12"
							style={{ marginBottom: "30px" }}
						>
							<EventCard
								name={item.name}
								location={item.location}
								description={item.description}
								image={item.image}
								category_id={item.category_id}
								id={item.id}
								date={item.date}
							/>
						</div>
					))}
				</div>

				<div className="row">
					<div
						className="col-12"
						style={{ display: "flex", justifyContent: " center" }}
					>
						<Stack spacing={5}>
							{" "}
							<Pagination
								count={props.Data.totalPages}
								onChange={(e, p) => {
									setcurrentpage(p);
								}}
								color="primary"
							/>
						</Stack>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { label } = state;
	return {
		label,
		Data: state.adminReducer,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchAllEventsAction,
		},
		dispatch
	);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
