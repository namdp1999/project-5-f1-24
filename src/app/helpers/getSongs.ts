import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";

export const getSongList = async (max?: number, categoryId?: string) => {
  const songRef = ref(dbFirebase, "songs");
  let songQuery:any;
  if(!categoryId) {
    songQuery = songRef;
  } else {
    songQuery = query(songRef, orderByChild("categoryId"), equalTo(categoryId));
  }

  const result: any[] = await new Promise((resolve) => {
    onValue(songQuery, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({
          id: childKey,
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

export const getSongDetail = async (id: string) => {
  const songRef = ref(dbFirebase, "songs/" + id);

  const result: any[] = await new Promise((resolve: any) => {
    onValue(songRef, (snapshot) => {
      const childKey = snapshot.key;
      const childData = snapshot.val();
      if(childData) {
        const data = {
          id: childKey,
          ...childData
        };
        resolve(data);
      } else {
        resolve(null);
      }
    });
  });

  return result;
}

export const getSongListWishList = async (userId: string) => {
  const songRef = ref(dbFirebase, "songs");
  let songQuery = query(songRef, orderByChild(`wishlist/${userId}`), equalTo(true));

  const result: any[] = await new Promise((resolve) => {
    onValue(songQuery, (snapshot) => {
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({
          id: childKey,
          ...childData
        });
      });
      resolve(data);
    });
  });

  return result;
}