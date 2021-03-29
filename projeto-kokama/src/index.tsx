import React, { useEffect } from "react";
import Api from "./api/Api";
import Translation from "./screens/Translation/index";
import SyncStorage from "sync-storage";
import { getCurrentDate } from "./utils/dictionary";

function updateDictionary() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Api(
          "https://projeto-kokama-traducao.herokuapp.com/dicionario/?format=json"
        );
        if (result.status === 200) {
          if (getCurrentDate() !== SyncStorage.get("last-update")) {
              SyncStorage.set("last-update", getCurrentDate());
              SyncStorage.set("dictionary", result.data);
              console.log("O dicionário foi atualizado corretamente!");
          } else {
              console.log("O dicionário já está atualizado");
          }
        }
      } catch (e) {
        console.log("Ocorreu um erro:\n", e);
      }
    };

    fetchData();
  }, []);
}

const Root = () => {
  // Updates dictionary
  updateDictionary();

  return <Translation />;
};

export default Root;
