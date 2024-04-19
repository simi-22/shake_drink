import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ onSearch }) => {
	const [keyword, setKeyword] = useState("");
	const navigate = useNavigate();

	const searchByKeyword = (e) => {
		e.preventDefault();
		console.log("@@@ 검색 키워드:", keyword);
		navigate(`?s=${keyword}`, { replace: true });
		onSearch(keyword);
		// setKeyword("");
	};

	const handleClearInput = () => {
		setKeyword(""); // 입력 필드 초기화
		navigate("/search", { replace: true });
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				p: 1,
			}}
		>
			<form
				// onClick={searchByKeyword}
				onSubmit={searchByKeyword}
				style={{ width: "100%" }}
			>
				<TextField
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					fullWidth
					id="search"
					type="search"
					// label="Search"
					variant="outlined"
					placeholder="Search"
					color="warning"
					disableClearable
					sx={{
						// borderColor: "#FD4926",
						border: "1px solid #FD4926",
						minWidth: 280,
						borderRadius: "15px",
						"& .MuiOutlinedInput-root": {
							borderRadius: "15px",
							height: 70,
							"& .MuiInputBase-input": {
								pl: 2,
							},
						},
						"&:-webkit-autofill": {
							borderRadius: "15px",
							WebkitBoxShadow: "0 0 0 1000px #FD4926 inset;",
							WebkitTextFillColor: "#FD4926",
						},
						'& input[type="search"]::-webkit-search-cancel-button': {
							WebkitAappearance: "none",
							appearance: "none",
						},
						"&:hover": {
							borderColor: "#FD4926",
						},
						"&.Mui-focused": {
							borderColor: "#FD4926",
						},
						"&.Mui-disabled": {
							borderColor: "#FD4926",
						},
					}}
					// InputLabelProps={{
					//   shrink: false,
					// }}
					InputProps={{
						startAdornment: (
							// <InputAdornment
							//   position="start"
							//   type="submit"
							// >
							//   <SearchIcon />
							// </InputAdornment>
							<InputAdornment position="start">
								<IconButton
									type="submit"
									aria-label="search"
									sx={{ backgroundColor: "#FD4926", borderRadius: "8px" }}
								>
									<SearchIcon sx={{ color: "#fff" }} fontSize="large" />
								</IconButton>
							</InputAdornment>
						),
						endAdornment: keyword && ( // 입력 값이 있을 때만 클리어 아이콘 표시
							<InputAdornment position="end">
								<IconButton onClick={handleClearInput} aria-label="clear input">
									<ReplayIcon sx={{ color: "#aaa" }} fontSize="large" />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</Box>
	);
};

export default SearchForm;
