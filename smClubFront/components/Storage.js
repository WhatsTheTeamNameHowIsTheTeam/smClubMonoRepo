import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
    try {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch (e) {
        console.error(e.message);
    }
};

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            const data = JSON.parse(value);
            return data;
        }
    } catch (e) {
        console.log(e.message);
    }
};


const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e.message);
    }
};

const containsKey = async (key) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    } catch (e) {
        console.error(e.message);
    }
};

export default { storeData, getData, removeData, containsKey };