import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";

export const getCategories = async (max?: number) => {
  const categoriesRef = ref(dbFirebase, "categories");

  const result: any[] = await new Promise((resolve) => {
    onValue(categoriesRef, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/categories/${childKey}`,
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

export const getCategoryDetail = async (id: string) => {
  const categoriesRef = ref(dbFirebase, "categories/" + id);

  const result: any[] = await new Promise((resolve) => {
    onValue(categoriesRef, (snapshot) => {
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