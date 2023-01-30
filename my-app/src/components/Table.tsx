import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import "@fontsource/roboto/300.css";
import Back from "./back.png";

import "./Table.css";
import { Tableprops } from "./Table.types";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";

const PlaceTableHead = styled("h1")({
  backgroundColor: "transparent",
  color: " #181717",
  height: 45,
  width: 300,
  paddingLeft: 20,
  paddingTop: 5,
  borderRadius: "5px",
  fontFamily: "roboto",
  marginBottom: 20,
  fontSize: 25,
  fontWeight: "bold",
});

const SearchTable = styled("input")({
  backgroundColor: "#fd7e14",
  height: 45,
  width: 300,
  color: " #000000",
  border: 0,
  borderRadius: "20px",
  opacity: 1,
  paddingLeft: 19,
  fontSize: "1.1rem",
});
const BackButton = styled("img")({
  backgroundColor: "#fd7e14",
  height: 45,
  width: 45,
  color: " #ffffff",
  border: 0,
  borderRadius: "5px",
  opacity: 1,
  fontSize: "1.1rem",
  padding: 6,
});
const keysForSearch = ["Symbol", " Name"];
const Table: React.FC<Tableprops> = ({
  name,
  col,
  row,
  showSearchProp,
  onCellClickEvent,
  onBackClickEvent,
  autoHightProp,
}) => {
  const [query, setQuery] = useState("");
  // const [showSearch, setShowSearch] = useState(showSearchProp);

  const search = (row: any) => {
    if (!showSearchProp) return row;
    return row.filter((item: any) =>
      keysForSearch.some((key) => {
        if (item[key]) return item[key].toLowerCase().includes(query);
      })
    );
  };

  const onChangeHandle = (e: any) => {
    console.log(e.target.value);
    setQuery(e.target.value.toLowerCase());
  };
  // console.log(row[0][keysForSearch[0]]);

  // useEffect(() => {
  //   row = search(row);
  // }, [query]);

  const onCellClickHandel = (e: any) => {
    if (onCellClickEvent) onCellClickEvent(e);
  };
  const onBackButtonClick = () => {
    if (onBackClickEvent) onBackClickEvent(true);
  };
  return (
    <Container>
      <div style={{ display: "flex", gap: "20px" }}>
        <PlaceTableHead>{name}</PlaceTableHead>
        {showSearchProp ? (
          <>
            <SearchTable
              placeholder="Search Symbol and Name"
              onChange={onChangeHandle}
            />
            <Search
              style={{ marginLeft: "-50px", marginTop: "8px", opacity: ".5" }}
            />
          </>
        ) : (
          <BackButton src={Back} onClick={onBackButtonClick} />
        )}
      </div>
      <div style={{ height: "70vh" }}>
        {
          <DataGrid
            columns={col}
            rows={search(row).slice(0, row.length - 1)}
            rowsPerPageOptions={[5]}
            hideFooter={true}
            onCellClick={onCellClickHandel}
            autoHeight={autoHightProp}
          ></DataGrid>
        }
      </div>
    </Container>
  );
};

export default Table;
