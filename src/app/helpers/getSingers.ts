import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";

export const getSingers = async (max?: number) => {
  const singerssRef = ref(dbFirebase, "singers");

  const result: any[] = await new Promise((resolve) => {
    onValue(singerssRef, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/singers/${childKey}`,
          ...childData
        });
      });
      if(max) {
        data = data.slice(0, max);
      }
      resolve(data);
    });
  });

  return result;
}

export const getSingerDetail = async (id: string) => {
  const singersRef = ref(dbFirebase, "singers/" + id);

  const result: any[] = await new Promise((resolve) => {
    onValue(singersRef, (snapshot) => {
      const childKey = snapshot.key;
      const childData = snapshot.val();
      const data: any = {
        id: childKey,
        ...childData
      };
      resolve(data);
    });
  });

  return result;
}