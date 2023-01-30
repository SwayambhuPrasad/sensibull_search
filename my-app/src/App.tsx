import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Container } from "@mui/system";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import axios from "axios";
import Footer from "./components/Footer";

const instrumentAPI = "https://prototype.sbulltech.com/api/v2/instruments";
const quotesAPI = "https://prototype.sbulltech.com/api/v2/quotes/";
const colInstrument = [
  { field: "Symbol", headerName: "Symbol", width: 140 },
  { field: "Name", headerName: "Name", width: 230 },
  { field: "Sector", headerName: "Sector", width: 200 },
  {
    field: "Validtill",
    headerName: "Validtill",
    type: "date",
    width: 170,
  },
];
const colQuotes = [
  { field: "price", headerName: "Price", width: 230 },
  { field: "time", headerName: "Time", width: 230 },
  { field: "valid_till", headerName: "Valid Till", width: 230 },
];

function App() {
  const [row, setrow] = useState<any[]>([]);
  const [quotesrow, setQuotesrow] = useState<any[]>([]);
  const [data, setdata] = useState<[]>([]);
  const [quotes, setQuotes] = useState<[]>([]);
  const [navigate, setNavigate] = useState(true);
  const [name, setName] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(true);

  const CSVToJSON = (data: any, delimiter = ",") => {
    const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
    return data
      .slice(data.indexOf("\n") + 1)
      .split("\n")
      .map((v: any) => {
        const values = v.split(delimiter);
        return titles.reduce(
          (obj: any, title: any, index: any) => (
            (obj[title] = values[index]), obj
          ),
          {}
        );
      });
  };

  const onCellClickHandel = (e: any) => {
    console.log(e);
    axios.get(quotesAPI + e.formattedValue).then(function (response) {
      if (response.data.payload) {
        console.log(response.data.payload[e.formattedValue]);
        setQuotes(response.data.payload[e.formattedValue]);
        setName(e.formattedValue);
        setNavigate(false);
        // navigate("/Subhomepage");
      }
    });
  };

  const onBackClickHandel = (value: any) => {
    setNavigate(value);
  };
  setTimeout(() => {
    setLoadingScreen(false);
  }, 4000);
  useEffect(() => {
    axios.get(instrumentAPI).then(function (response) {
      setdata(CSVToJSON(response.data));
    });
  }, []);

  useEffect(() => {
    if (data) {
      let x: any[] = [];
      data.forEach((obj: any, i) => {
        x[i] = { ...obj, ...{ id: i } };
      });
      setrow(x);
    }
  }, [data]);
  useEffect(() => {
    if (quotes) {
      let x: any[] = [];
      quotes.forEach((obj: any, i) => {
        x[i] = { ...obj, ...{ id: i } };
      });
      setQuotesrow(x);
      console.log("i am x", x);
    }
  }, [quotes]);
  return (
    <>
      {loadingScreen ? (
        <Loading />
      ) : (
        <div
          style={{
            width: "100vw",
            backgroundColor: "#b1d7f5",
          }}
        >
          <NavBar />
          {navigate ? (
            <Table
              name="Stocks"
              col={colInstrument}
              row={row}
              showSearchProp={true}
              onCellClickEvent={onCellClickHandel}
              autoHightProp={false}
            />
          ) : (
            <Table
              name={"Quotes for " + name}
              col={colQuotes}
              row={quotesrow}
              showSearchProp={false}
              autoHightProp={true}
              onBackClickEvent={onBackClickHandel}
              // onCellClick={onCellClickHandel}
            />
          )}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
