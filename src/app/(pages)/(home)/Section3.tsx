import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

const getSingers = async () => {
  const singersRef = ref(dbFirebase, "singers");

  const result: any[] = await new Promise((resolve) => {
    onValue(singersRef, (snapshot) => {
      const data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({
          id: childKey,
          link: `/singers/${childKey}`,
          ...childData
        });
      });
      resolve(data.slice(0, 5));
    });
  });

  return result;
}

export default async function Section3() {
  const dataSingers: any[] = await getSingers();

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={dataSingers} />
      </div>
    </>
  )
}