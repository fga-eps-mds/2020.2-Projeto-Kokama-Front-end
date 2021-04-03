import { useEffect } from "react";
import SyncStorage from "sync-storage";
import Api from "../api/Api";

function getCurrentDate() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let monthPresentation = month < 10 ? `0${month}` : `${month}`

  return `${year}${monthPresentation}${date}`
}

export function updateDictionary() {
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (getCurrentDate() !== SyncStorage.get("last-update")) {
            SyncStorage.set("last-update", getCurrentDate());
            const result = await Api(
              "https://projeto-kokama-traducao.herokuapp.com/dicionario/?format=json"
            );
            if (result.status === 200) {
              SyncStorage.set("dictionary", result.data);
              console.log("O dicionário foi atualizado corretamente!");
            } else {
                console.log("A requisição não pôde ser concluída.\n[Status: ", result.status, "]");
            }
          } else {
            console.log("O dicionário já está atualizado");
          }
        } catch (e) {
          console.log("Ocorreu um erro:\n", e);
        }
      };
  
      fetchData();
    }, []);
  }