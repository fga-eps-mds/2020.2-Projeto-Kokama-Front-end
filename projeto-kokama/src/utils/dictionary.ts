import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from "../api/Api";
import { TRANSLATE_MICROSERVICE_URL } from "@env";

export function getCurrentDate() {
	let newDate = new Date()
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	let datePresentation = date < 10 ? `0${date}` : `${date}`
	let monthPresentation = month < 10 ? `0${month}` : `${month}`

	return `${year}${monthPresentation}${datePresentation}`
}

export function updateDictionary() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				let lastUpdate: string | null;
				lastUpdate = await AsyncStorage.getItem("last-update");
				if (lastUpdate === null || getCurrentDate() !== lastUpdate) {
					await AsyncStorage.setItem("last-update", getCurrentDate());
					const request = await Api(TRANSLATE_MICROSERVICE_URL + "dicionario/");
					if (request.status === 200) {
						await AsyncStorage.setItem("dictionary", JSON.stringify(request.data));
					} else {
						console.log("A requisição não pôde ser concluída.\n[Status: ", request.status, "]");
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