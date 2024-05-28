import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CardList from "../components/cardsOfInfo/CardList";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Character from "../types/character.type";
import Location from "../types/location.type";
import Episode from "../types/episode.type";
import { getAll, getById } from "../api/api";
import SearchBar from "../components/SearchBar";
import { messageType } from "./Login";
import SnackBar from "../components/SnackBar";
import SearchInput from "../components/SearchInput";
import { styles } from "./style/home";

export type dataType = {
  type: string;
  pageNumber: string;
};

export type DataResult = {
  results: Character[] | Location[] | Episode[];
};

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [dataResults, setDataResults] = useState<
    Character[] | Location[] | Episode[]
  >([]);
  const [select, setSelect] = useState<string>("");
  const [openMessage, setOpenMessage] = useState<messageType>({
    open: false,
    type: "",
    message: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const { mutateAsync: getAllData } = useMutation({
    mutationFn: (data: dataType) => getAll(data.type, data.pageNumber),
  });

  const { mutateAsync: getDataById } = useMutation({
    mutationFn: (data: dataType) => getById(data.type, data.pageNumber),
  });

  const getDataSubmit = async (selectType: string, searchValue: string) => {
    try {
      setSearchTerm("");
      setDataResults([]);

      const dataType: dataType = {
        type: selectType,
        pageNumber: searchValue,
      };

      if (selectType.includes("ById")) {
        dataType.type = selectType.replace("ById", "");
        setSelect(dataType.type);
        const data = await getDataById(dataType);
        setDataResults([data]);
      } else {
        setSelect(selectType);
        const allData = await getAllData(dataType);
        setDataResults(allData.results);
      }
    } catch (e) {
      setOpenMessage({
        open: true,
        type: "error",
        message: "failed to get data",
      });
    }
  };

  const filteredResults = dataResults.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Box sx={styles.mainBox}>
        <Box sx={styles.secBox}>
          <SearchBar searchClick={getDataSubmit} />
          {dataResults && dataResults.length > 1 && (
            <Box sx={styles.searchBox}>
              <SearchInput
                options={dataResults.map((data) => data.name)}
                label="search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Box>
          )}
        </Box>

        <Box sx={styles.cardBox}>
          <CardList
            dataResults={filteredResults as Character[]}
            showImg={user?.role === "admin"}
            typeReq={select}
          />
        </Box>
        <SnackBar
          msg={openMessage.message}
          type={openMessage.type}
          open={openMessage.open}
          onClose={() => setOpenMessage({ open: false, type: "", message: "" })}
        />
      </Box>
    </>
  );
};

export default Home;
